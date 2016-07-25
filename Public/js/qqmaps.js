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
	var anchor = new qq.maps.Point(6, 6);
	var size = new qq.maps.Size(48, 48);
	var origin = new qq.maps.Point(0, 0);
	var icon = new qq.maps.MarkerImage(car_img, size, origin,
			anchor);
	// var marker_position = new qq.maps.LatLng(39.916527,116.397128);

	function addmarker(longitude, latitude) {
		var marker = new qq.maps.Marker({
			icon : icon,
			map : map,
			position : new qq.maps.LatLng(longitude, latitude)
		});
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
		
		var div = document.createElement("div");
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
		i_text.appendChild(document.createTextNode(this._speed + "km/h"));

		var div_down = document.createElement("div");
		div_down.setAttribute("class", "triangle-down");
		div_text.appendChild(i_text);
		div.appendChild(a_tag);
		div.appendChild(div_text);
		
		var label = new qq.maps.Label({
	        position: new qq.maps.LatLng(longitude, latitude),
	        map: map,
	        //content:'<div class="car-icon"> <a class="glyph-search search-btn" href="#" style="font-size:30px; color:#f30"><span>u</span></a><div class="pop-s"> <span>浙AQ83a25</span> <i>123KM/H</i><div class="triangle-down"></div></div></div>'
	        content:div
	    });
		label.setMap(map);
	}
	
	function changeMapCe(longitude, latitude) {
		map.panTo(new qq.maps.LatLng(longitude, latitude));
	}
	addTextMarker(30.278914, 120.124357);
});
