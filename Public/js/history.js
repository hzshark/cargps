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
	// 调用searchLocalCity();方法 根据用户IP查询城市信息。
	citylocation.searchLocalCity();
	// 设置自定义标记
	var anchor = new qq.maps.Point(6, 6);
	var size = new qq.maps.Size(48, 48);
	var origin = new qq.maps.Point(0, 0);
	var icon = new qq.maps.MarkerImage('Public/images/car.png', size, origin,
			anchor);
	// var marker_position = new qq.maps.LatLng(39.916527,116.397128);

	function addmarker(longitude, latitude) {
		var marker = new qq.maps.Marker({
			icon : icon,
			map : map,
			position : new qq.maps.LatLng(longitude, latitude)
		});
	}

	function addStartMarker(longitude, latitude) {
		var start_icon = new qq.maps.MarkerImage(
				publicpath+'/images/busmarker.png', new qq.maps.Size(24, 36),
				new qq.maps.Point(0, 0), new qq.maps.Point(6, 6));
		var start_marker = new qq.maps.Marker({
			icon : start_icon,
			position : new qq.maps.LatLng(longitude, latitude),
			map : map,
			zIndex : 1
		});
	}

	function addEndMarker(longitude, latitude) {
		var end_icon = new qq.maps.MarkerImage(
				publicpath+'/images/busmarker.png', new qq.maps.Size(24, 36),
				new qq.maps.Point(24, 0), new qq.maps.Point(6, 6));
		var end_marker = new qq.maps.Marker({
			icon : end_icon,
			position : new qq.maps.LatLng(longitude, latitude),
			map : map,
			zIndex : 1
		});

	}

	function addTextMarker(longitude, latitude) {

		var label = new qq.maps.Label({
			position : new qq.maps.LatLng(longitude, latitude),
			map : map,
			// content:'<div class="car-icon"> <a class="glyph-search
			// search-btn" href="#" style="font-size:30px;
			// color:#f30"><span>u</span></a><div class="pop-s">
			// <span>浙AQ83a25</span> <i>123KM/H</i><div
			// class="triangle-down"></div></div></div>'
			content : div
		});
		label.setMap(map);
	}

	function changeMapCe(longitude, latitude) {
		map.panTo(new qq.maps.LatLng(longitude, latitude));
	}
	addStartMarker(30.278914, 120.124357);
	addEndMarker(30.28403, 120.14854);
});
