login = function(){
    var name = $("#nick_name").val();
    var password = $("#user_password").val();
    var code = $("#validateCode").val();
    var returnValue = false;

    if(name == null || name == ""){
        $("#code_warn").html("");
        $("#name_warn").html("*用户名不能为空");
        return false;
    }else if(password == null || password == ""){
        $("#name_warn").html("");
        $("#code_warn").html("");
        $("#pass_warn").html("*密码不能为空");
        return false;
    }else if(code == null || code == ""){
        $("#name_warn").html("");
        $("#pass_warn").html("");
        $("#code_warn").html("*验证码不能为空")
    }else{
        $("#name_warn").html("");
        $("#pass_warn").html("");

        $.ajax({
            url:"/user/login.json",
            data:{name:name,password:password,code:code},
            type:"POST",
            async:false,success:function(result){

            if(result == 2){
                $("#code_warn").html("*验证码错误");
                returnValue = false;//登录失败,验证码错误
            }else if(result == 1){
                returnValue = true;//登录成功
            }else if(result == 0){
                $("#name_warn").html("*用户名或密码错误");
                returnValue = false;//登录失败
            }
        }});
    }
    return returnValue;
}

//
changeValidateCode = function(){
    var img = $("#validateCodeImg")[0];
    img.src = ("/admin/index/verify?" +Math.random());
}