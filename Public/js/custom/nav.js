//退出登录
logout = function(){
    $.ajax({
        url:"/user/logout.json",
        type:"GET",
        success:function(){
            location.href = "/login.jsp";
    }});
}

//查看登录用户信息
selectUserInfo = function(){
    location.href = "/page/personalDetails.jsp";
}

//比较两次密码输入是否相同
contrastPassword = function(){
    var newPassword = $("#newPassword").val();
    var newPassword2 = $("#newPassword2").val();

    if(newPassword != newPassword2){
        $("#newPassword2-prompt").html("两次密码不相同");
    }
}

//校验密码
checkPassword = function(){
    var oldPassword = $("#oldPassword").val();
    var newPassword = $("#newPassword").val();
    var newPassword2 = $("#newPassword2").val();

    if(newPassword == null && newPassword == ''){
        $("#newPassword-prompt").html("请输入密码");
        $("#newPassword").focus();
    }else if(newPassword != newPassword2){
        $("#newPassword-prompt").html("两次密码不相同");
        $("#newPassword").focus();
    }else if(newPassword.length < 5){
        $("#newPassword-prompt").html("密码长度应大于5位数");
        $("#newPassword").focus();
    }else{
        $.ajax({
            url:"/permission/checkPassword.json",
            type:"POST",
            data:{oldPassword:oldPassword},
            success:function(data){
                if(data != null && data !=''){
                    changePassword(newPassword);
                }else{
                    alert("原密码错误");
                }
            }
        });
    }
    }

//修改密码
changePassword = function(newPassword){
    $.ajax({
        url:"/permission/changePassword.json",
        type:"POST",
        data:{newPassword:newPassword},
        success:function(data){
            if(data == 1){
                location.href = "/login.jsp";
            }else{
                alert("修改失败");
            }
        }
    });
}

