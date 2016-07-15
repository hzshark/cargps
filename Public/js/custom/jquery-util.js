//时间转换
function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp);
    var months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    if (date < 10) {
        date = '0' + date;
    }
    var hour = a.getHours();
    if(hour < 10){
        hour = '0' + hour;
    }
    var min = a.getMinutes();
    if(min < 10){
        min = '0' + min;
    }
    var sec = a.getSeconds();
    if(sec < 10){
        sec = '0' + sec;
    }
    var time = year + '-' + month + '-' + date + ' '+ hour + ':' + min + ':' + sec ;
    return time;
}

//在地址栏查找条件
GetQueryString = function(key){
    var reg = new RegExp("(^|&)"+key+"=([^&]*)(&|$)");
    var result = window.location.search.substr(1).match(reg);
    return result?decodeURIComponent(result[2]):null;
}

//手机号校验
checkMobile = function(str) {
    var re = /^1\d{10}$/;

    if (re.test(str)) {
        return true;
    } else {
        return false;
    }
}

//邮箱校验
checkEmail = function(str){
    var re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;

    if(re.test(str)){
        return true;
    }else{
        return false;
    }
}

//返回的是字符串
permissionCheck = function(obj){
    if(typeof (obj) == "string"){
        var obj = JSON.parse(obj);

        if(obj.code == "403"){
            alert("您没有权限访问");
            return false;
        }
    }
}

//返回的json
permissionJsonCheck = function(obj){
    if(obj.code == "403"){
        alert("您没有权限访问");
        return false;
    }
}