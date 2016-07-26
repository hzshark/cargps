var citylocation, map, marker = null;

$(function() {
	var center = new qq.maps.LatLng(30.278914, 120.124357);
	map = new qq.maps.Map(document.getElementById('map_container'), {
		center : center,
		zoom : 14
	});
	// 获取城市列表接口设置中心点
	citylocation = new qq.maps.CityService({
		complete : function(result) {
			map.setCenter(result.detail.latLng);
		}
	});
	//调用searchLocalCity();方法    根据用户IP查询城市信息。
    citylocation.searchLocalCity();
	// 设置自定义标记
	var anchor = new qq.maps.Point(29, 16);
	var size = new qq.maps.Size(116, 65);
	var origin = new qq.maps.Point(0, 0);
	var scaleSize = new qq.maps.Size(58, 32);
	var icon = new qq.maps.MarkerImage(car_img, size, origin,
			anchor, scaleSize);
	// var marker_position = new qq.maps.LatLng(39.916527,116.397128);

	function addmarker(latlng, markerContent) {
		var marker = new qq.maps.Marker({
			icon : icon,
			map : map,
			position :latlng
			
		});
		var info = new qq.maps.InfoWindow({
	        map: map
	    });
		qq.maps.event.addListener(marker, 'click', function() {
		       info.open(); 
		       info.setContent(markerContent);
		       info.setPosition(latlng); 
		   });
	}
	
	function markerContent(plate, speed){
		var html = "<div class=\"popbbbb\" style=\"left:300px; top:300px\"> <a class=\"close\">X</a>";
		var is_running = "停驶中";
		if (speed> 0){
			is_running = "行驶中";
		}
		html += "<h2>"+plate+"    "+is_running+"</h2>";
//		html += "<div class=\"state\">";
//        <div class="state">
//          <ul>
//            <li><span>上报时间：</span><em>2016-01-02 12：13：34</em></li>
//            <li><span>车速：</span><em>12km/h</em></li>
//            <li><span>VIN码：</span><em>ljds23u49832798</em></li>
//          </ul>
//        </div>
//        <div class="cz">
//          <ul>
//            <li class="cz1"><a  class="img">跟踪车辆</a><br>
//              跟踪车辆</li>
//            <li class="cz2"><a  class="img">历史轨迹</a><br>
//              历史轨迹</li>
//            <li class="cz3"><a  class="img">抓拍车辆</a><br>
//              抓拍车辆</li>
//            <li class="cz4"><a  class="img">查看图片</a><br>
//              查看图片</li>
//          </ul>
//        </div>
//        <div class="triangle-down2"></div>
//        <div class="triangle-down3"></div>
		html += "单击标记单击标记单击标记单击标记单击标记单击标记单击标记单击标记</div>";
		return html;
//		return '<div style="left:300px; top:300px" class="popbbbb" > <a class="close">X</a>单击标记单击标记单击标记单击标记单击标记单击标记单击标记单击标记</div>';
	}
	
	
	function addStartMarker(){
		var anchor = new qq.maps.Point(6, 6),
        size = new qq.maps.Size(24, 36),
        start_icon = new qq.maps.MarkerImage(
        	busmarker, 
            size, 
            new qq.maps.Point(0, 0),
            anchor
        ),
        end_icon = new qq.maps.MarkerImage(
        	busmarker, 
            size, 
            new qq.maps.Point(24, 0),
            anchor
        );
	}

	function addTextMarker(longitude, latitude){
		var label = new qq.maps.Label({
	        position: new qq.maps.LatLng(latitude, longitude),
	        map: map,
	        content:'<div class="car-icon"> <a class="glyph-search search-btn" href="#" style="font-size:30px; color:#f30"><span>u</span></a><div class="pop-s"> <span>浙AQ83a25</span> <i>123KM/H</i><div class="triangle-down"></div></div></div>'
//	        content:div
	    });
		label.setMap(map);
	}
	
	function changeMapCe(longitude, latitude) {
		map.panTo(new qq.maps.LatLng(latitude, longitude));
		alert("_++_++");
	}
	
	function convertor_coordinates(longitude, latitude){
		
	}
	
	for (var i=0;i<vehicles.length;i++){
		var content = markerContent(vehicles[i].plate, vehicles[i].speed);
		alert(content);
		//转换百度坐标为腾讯坐标
        qq.maps.convertor.translate(new qq.maps.LatLng(vehicles[i].latitude,vehicles[i].longitude), 3, function(res) {
            latlng = res[0];
//            setTimeout(function(){ map.panTo(latlng);}, 1000);
            addmarker(latlng, content);
        });
        
	}
	
});
