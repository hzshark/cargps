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
	var anchor = new qq.maps.Point(29, 16);
	var size = new qq.maps.Size(116, 65);
	var origin = new qq.maps.Point(0, 0);
	var scaleSize = new qq.maps.Size(58, 32);
	var icon = new qq.maps.MarkerImage(car_img, size, origin, anchor, scaleSize);
	// var marker_position = new qq.maps.LatLng(39.916527,116.397128);

	function addmarker(latlng, markerContent, click_content) {
		var marker = new qq.maps.Marker({
			icon : icon,
			map : map,
			position : latlng

		});
		var info = new qq.maps.InfoWindow({
			map : map

		});
		info.open();
		info.setContent(markerContent);
		info.setPosition(latlng);
		qq.maps.event.addListener(marker, 'click', function() {
			info.close();
			info.setContent(click_content);
			info.setPosition(latlng);
			info.open();
		});
	}

	function markerContent(plate, speed, time, vin_code) {
		var html = "<div class=\"popb\" style=\"left:300px; top:300px\">";

		var is_running = "停驶中";
		if (speed > 0) {
			is_running = "行驶中";
		}
		html += "<h2>" + plate + "    " + is_running + "</h2>";
		html += "<div class=\"state\">";
		html += "<ul>";
		html += "<li><span>上报时间：</span><em>" + time + "</em></li>";
		html += "<li><span>车速：</span><em>" + speed + "km/h</em></li>";
		html += "<li><span>VIN码：</span><em>" + vin_code + "</em></li>";
		html += "</ul>";
		html += "</div>";
		html += "<div class=\"cz\">";
		html += "<ul>";
		html += "<li class=\"cz1\"><a  class=\"img\">跟踪车辆</a><br>跟踪车辆</li>";
		html += "<li class=\"cz2\"><a  class=\"img\">历史轨迹</a><br>历史轨迹</li>";
		html += "<li class=\"cz3\"><a  class=\"img\">抓拍车辆</a><br>抓拍车辆</li>";
		html += "<li class=\"cz4\"><a  class=\"img\">查看图片</a><br> 查看图片</li>";
		html += "</ul>";
		html += "</div>";
		html += "<div class=\"triangle-down2\"></div>";
		html += "<div class=\"triangle-down3\"></div>";
		html += "</div>";
		return html;
	}

	function show_content(plate, speed) {
		var html = "<div id=\"show_content\" class=\"popss\"> <span>" + plate
				+ "</span> <i>" + speed + "KM/H</i></div>";
		return html;
	}

	function show_snap_button() {
		var html = "<div class=\"popb\" style=\"left:600px; top:300px; height:200px\"> <a class=\"close\">X</a>";
		var is_running = "停驶中";
		if (speed > 0) {
			is_running = "行驶中";
		}
		html += "<h2>" + plate + "    " + is_running + "</h2>";
		html += "<div class=\"state\" style=\"margin-top:16px\">";
		html += "<ul>";
		html += "<li><span>抓拍类型：</span><em><input name=\"snap\" type=\"radio\" value=\"1\">连续拍3张</em><em style=\"margin-left:16px\"><input name=\"video\" type=\"radio\" value=\"2\">连续拍3张</em></li>";
		html += "</ul>";
		html += "</div>";
		html += "<div class=\"cz\">";
		html += "<span class=\"btn btn-success\" style=\"width:100%;\">抓拍</span>";
		html += "</div>";
		html += "<div class=\"triangle-down2\"></div>";
		html += "<div class=\"triangle-down3\"></div>";
		html += "</div>";
		return html;
	}
	function addStartMarker() {
		var anchor = new qq.maps.Point(6, 6), size = new qq.maps.Size(24, 36), start_icon = new qq.maps.MarkerImage(
				busmarker, size, new qq.maps.Point(0, 0), anchor), end_icon = new qq.maps.MarkerImage(
				busmarker, size, new qq.maps.Point(24, 0), anchor);
	}

	function addTextMarker(longitude, latitude) {
		var label = new qq.maps.Label(
				{
					position : new qq.maps.LatLng(latitude, longitude),
					map : map,
					content : '<div class="car-icon"> <a class="glyph-search search-btn" href="#" style="font-size:30px; color:#f30"><span>u</span></a><div class="pop-s"> <span>浙AQ83a25</span> <i>123KM/H</i><div class="triangle-down"></div></div></div>'
				// content:div
				});
		label.setMap(map);
	}

	function changeMapCe(longitude, latitude) {
		map.panTo(new qq.maps.LatLng(latitude, longitude));
		alert("_++_++");
	}

	function convertor_coordinates(longitude, latitude) {

	}

	for (var i = 0; i < vehicles.length; i++) {
		var click_content = markerContent(vehicles[i].plate, vehicles[i].speed,
				vehicles[i].time, vehicles[i].car_id);
		var content = show_content(vehicles[i].plate, vehicles[i].speed);
		// 转换百度坐标为腾讯坐标
		qq.maps.convertor.translate(new qq.maps.LatLng(vehicles[i].latitude,
				vehicles[i].longitude), 3, function(res) {
			latlng = res[0];
			// setTimeout(function(){ map.panTo(latlng);}, 1000);
			addmarker(latlng, content, click_content);
		});

	}

});
