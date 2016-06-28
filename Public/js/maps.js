/*<![CDATA[*/

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

/**
 * // 添加定位控件 var geoCtrl = new BMap.GeolocationControl({ showAddressBar : true
 * //是否显示 , enableAutoLocation : true //首次是否进行自动定位 , offset : new
 * BMap.Size(0,25) //, locationIcon : icon //定位的icon图标 });
 * 
 * //监听定位成功事件 geoCtrl.addEventListener("locationSuccess",function(e){
 * console.log(e); });
 * 
 * //监听定位失败事件 geoCtrl.addEventListener("locationError",function(e){
 * console.log(e); }); // 将定位控件添加到地图 mp.addControl(geoCtrl);
 */
/**
 * //检索类型 var type = ""; type = LOCAL_SEARCH ; //周边检索 type = TRANSIT_ROUTE;
 * //公交检索 type = DRIVING_ROUTE; //驾车检索
 */
/*******************************************************************************
 * //创建鱼骨控件 var navCtrl = new BMap.NavigationControl({ anchor:
 * BMAP_ANCHOR_TOP_LEFT //设置鱼骨控件的位置 }); // 将鱼骨添加到地图当中 mp.addControl(navCtrl);
 */
/**
 * //创建检索控件 var searchControl = new BMapLib.SearchControl({ container :
 * "searchBox" //存放检索控件的容器 , map : mp //检索的关联地图 , type : type //检索类型 });
 * 
 * document.getElementById("selectType").onchange = function () {
 * searchControl.setType(this.value); };
 */

/**
 * //添加路况控件 var ctrl = new BMapLib.TrafficControl({ showPanel: false
 * //是否显示路况提示面板 }); mp.addControl(ctrl); ctrl.setAnchor(BMAP_ANCHOR_TOP_RIGHT);
 */

/**
 * //设置标注的图标 var icon = new BMap.Icon('C:/data/1.jpg', new BMap.Size(20, 30),
 * {//是引用图标的名字以及大小，注意大小要一样 anchor: new BMap.Size(10, 30)//这句表示图片相对于所加的点的位置 } );
 * //设置标注的经纬度 var mkr = new BMap.Marker(new
 * BMap.Point(120.21799400,30.21028600), { icon: icon }); //把标注添加到地图上
 * mp.addOverlay(mkr); var content = "<div class=\"car-icon\">"; content =
 * content + "<a class=\"glyph-search search-btn\" href=\"#\"
 * style=\"font-size:30px; color:#f30\"><span>u</span></a>"; content =
 * content + "<div class=\"pop-s\"> <span>浙AQ83a25</span> <i>1123KM/H</i>";
 * content = content + "<div class=\"triangle-down\"></div>"; content =
 * content + "</div></div>"; var infowindow = new BMap.InfoWindow(content);
 * mkr.addEventListener("click",function(){ this.openInfoWindow(infowindow); });
 * 
 * mkr.enableDragging(); mkr.addEventListener("dragend", function(e){
 * alert("当前位置：" + e.point.lng + ", " + e.point.lat); })
 */

/**
 * // 添加自定义覆盖物 var marker = new BMap.Marker(new BMap.Point(121.48061,
 * 31.235587)); mp.addOverlay(marker);
 */

// 复杂的自定义覆盖物
function ComplexCustomOverlay(point, text, speed) {
	this._point = point;
	this._text = text;
	this._speed = speed;
}

ComplexCustomOverlay.prototype = new BMap.Overlay();
ComplexCustomOverlay.prototype.initialize = function(map) {
	this._map = map;
	var div = this._div = document.createElement("div");
	div.setAttribute("class", "car-icon");

	var a_tag = this._span = document.createElement("a");
	a_tag.setAttribute("class", "glyph-search search-btn");
	a_tag.setAttribute("href", "#");
	a_tag.style.fontSize = "30px";
	a_tag.style.color = "#f30";

	var span_car = this._span = document.createElement("span");
	a_tag.appendChild(span_car);
	span_car.appendChild(document.createTextNode("u"));

	var div_text = document.createElement("div");
	div_text.setAttribute("class", "pop-s");
	var span_text = this._span = document.createElement("span");
	div_text.appendChild(span_text);
	span_text.appendChild(document.createTextNode(this._text));
	var br = this._span = document.createElement("br");
	div_text.appendChild(br);

	var i_text = this._span = document.createElement("i");
	div_text.appendChild(i_text);
	i_text.appendChild(document.createTextNode(this._speed+"km/h"));

	var div_down = document.createElement("div");
	div_down.setAttribute("class", "triangle-down");
	div_text.appendChild(i_text);
	div.appendChild(a_tag);
	div.appendChild(div_text);
	mp.getPanes().labelPane.appendChild(div);
	return div;
}
ComplexCustomOverlay.prototype.draw = function() {
	var map = this._map;
	var pixel = map.pointToOverlayPixel(this._point);
	this._div.style.left = pixel.x - 20 + "px";
	this._div.style.top = pixel.y - 30 + "px";
}

function addmarker2map(longitude, latitude, carinfo, speed) {

	var myCompOverlay = new ComplexCustomOverlay(new BMap.Point(longitude,
			latitude), carinfo, speed);
	this.mp.addOverlay(myCompOverlay);
}

// $.ajax拼接data的异步请求
$.ajax({
	url : 'carmap/mapdata',
	type : 'post',
	data : '',
	async : false, // 默认为true 异步
	error : function() {
		alert('error');
	},
	success : function(data) {
		$.each(data, function(i, item) {
			return addmarker2map(item.longitude, item.latitude, item.plate,
					item.speed);
		});
	}
});

/* ]]> */