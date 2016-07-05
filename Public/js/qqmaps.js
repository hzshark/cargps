var citylocation,map,marker = null;
$(function(){
    var center = new qq.maps.LatLng(39.916527,116.397128);
    map = new qq.maps.Map(document.getElementById('map_container'),{
        center: center,
        zoom: 14
    });
    //获取城市列表接口设置中心点
    citylocation = new qq.maps.CityService({
        complete : function(result){
            map.setCenter(result.detail.latLng);
        }
    });
    //调用searchLocalCity();方法    根据用户IP查询城市信息。
    citylocation.searchLocalCity();
    	//	设置自定义标记
    var anchor = new qq.maps.Point(6, 6),
    size = new qq.maps.Size(24, 24),
    origin = new qq.maps.Point(0, 0),
    icon = new qq.maps.MarkerImage('Public/images/car.png', size, origin, anchor);
    var marker_position = new qq.maps.LatLng(39.916527,116.397128);
var marker = new qq.maps.Marker({
    icon: icon,
    map: map,
    position:marker_position
    });
});