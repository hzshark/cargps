// 创建地图对象并初始化
var mp = new BMap.Map("map_container", {
	enableHighResolution : true
// 是否开启高清
});
var point = new BMap.Point(120.21799400, 30.21028600);
mp.centerAndZoom(point, 18); // 初始化地图

// mp.centerAndZoom('杭州', 18);

mp.enableInertialDragging(); // 开启关系拖拽
// mp.enableScrollWheelZoom(); //开启鼠标滚动缩放
mp.enableDragging(); // 启用地图拖拽事件，默认启用(可不写)
mp.disableDoubleClickZoom(); // 启用鼠标双击放大，默认启用(可不写)
mp.disableKeyboard(); // 启用键盘上下左右键移动地图
followChk = document.getElementById("follow");
playBtn = document.getElementById("play");
pauseBtn = document.getElementById("pause");
resetBtn = document.getElementById("reset");

// 获取所有点的坐标
var points = new Array();

var car; // 汽车图标
var label; // 信息标签
var centerPoint;

var timer; // 定时器
var index = 0; // 记录播放到第几个point

var followChk, playBtn, pauseBtn, resetBtn; // 几个控制按钮

$.ajax({
	url : 'getcartrack',
	type : 'post',
	data : '',
	async : true, // 默认为true 异步
	error : function() {
		alert('error');
	},
	success : function(data) {
		$.each(data, function(i, item) {
			points.push(new BMap.Point(item.longitude, item.latitude));

		});
		
		// 通过DrivingRoute获取一条路线的point
		var driving = new BMap.DrivingRoute(mp);
		driving.search(points[0], points[points.length - 1]);
		driving.setSearchCompleteCallback(function() {
			// 得到路线上的所有point
			points = driving.getResults().getPlan(0).getRoute(0).getPath();
			// 画面移动到起点和终点的中间
			centerPoint = new BMap.Point(
					(points[0].lng + points[points.length - 1].lng) / 2,
					(points[0].lat + points[points.length - 1].lat) / 2);
			mp.panTo(centerPoint);
			// 连接所有点
			mp.addOverlay(new BMap.Polyline(points, {
				strokeColor : "red",
				strokeWeight : 5,
				strokeOpacity : 1
			}));

			// 显示小车子
			label = new BMap.Label("", {
				offset : new BMap.Size(-20, -20)
			});
			car = new BMap.Marker(points[0], {
				icon : new BMap.Icon("__PUBLIC__/images/car.png",
						new BMap.Size(48, 48), {
							imageOffset : new BMap.Size(0, 0)
						})
			});
			car.setLabel(label);
			mp.addOverlay(car);

			// 点亮操作按钮
			playBtn.disabled = false;
			resetBtn.disabled = false;
		});
	}
});

function play() {
	playBtn.disabled = true;
	pauseBtn.disabled = false;

	var point = points[index];
	if (index > 0) {
		mp.addOverlay(new BMap.Polyline([ points[index - 1], point ], {
			strokeColor : "red",
			strokeWeight : 1,
			strokeOpacity : 1
		}));
	}
	label.setContent("经度: " + point.lng + "<br>纬度: " + point.lat);
	car.setPosition(point);
	index++;
	if (followChk.checked) {
		mp.panTo(point);
	}
	if (index < points.length) {
		timer = window.setTimeout("play(" + index + ")", 200);
	} else {
		playBtn.disabled = true;
		pauseBtn.disabled = true;
		mp.panTo(point);
	}
}

function pause() {
	playBtn.disabled = false;
	pauseBtn.disabled = true;

	if (timer) {
		window.clearTimeout(timer);
	}
}

function reset() {
	followChk.checked = false;
	playBtn.disabled = false;
	pauseBtn.disabled = true;

	if (timer) {
		window.clearTimeout(timer);
	}
	index = 0;
	car.setPosition(points[0]);
	mp.panTo(centerPoint);
}