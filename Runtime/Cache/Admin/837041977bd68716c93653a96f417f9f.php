<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
    <link href="/Public/css/lib/bootstrap.min.css" rel="stylesheet">
    <link href="/Public/css/lib/login.css" rel="stylesheet">
    <script src="/Public/js/lib/jquery-2.1.1.min.js" type="text/javascript"></script>
    <script src="/Public/js/custom/login.js" type="text/javascript"></script>
    <title>后台登录</title>
</head>
<body>
<div class="container">
    <div class="row loginBox  col-md-8 col-sm-8 col-lg-6 col-md-offset-2 col-sm-offset-2 col-lg-offset-3">
        <h2 class="text-center">后台登录</h2>
        <form method="post" class="form-horizontal" action="/admin/index/login"><!--目标地址-->
            <div class="form-group ">
                <label for="nick_name" class="col-xs-2 col-sm-2 col-md-2 control-label" style="text-align: center; clear: both;">账 号</label>
                <div class="col-xs-8 col-sm-8 col-md-8">
                    <input type="text" id="nick_name" class="form-control" placeholder="请输入账号">
                </div>
                <span class="col-xs-2 col-sm-2 col-md-2" id="name_warn" style="color:red;"></span>
            </div>
            <br>
            <div class="form-group ">
                <label for="user_password" class="col-xs-2 col-sm-2 col-md-2 control-label" style="text-align: center; clear: both;">密 码</label>
                <div class="col-xs-8 col-sm-8 col-md-8">
                    <input type="password" id="user_password" class="form-control" placeholder="请输入密码">
                </div>
                <span class="col-xs-2 col-sm-2 col-md-2" id="pass_warn" style="color:red;"></span>
            </div>
            <br>
            <div class="form-group">
                <label for="validateCode" class="col-xs-2 col-sm-2 col-md-2 control-label" style="text-align: center; clear: both;">验证码</label>
                <div class="col-xs-5 col-sm-5 col-md-5">
                    <input type="text" id="validateCode" class="form-control" placeholder="请输入验证码">
                </div>
                <div class="col-xs-3 col-sm-3 col-md-3">
                    <img src="/admin/index/verify" id="validateCodeImg" onclick="changeValidateCode()"/>
                </div>
                <span class="col-xs-2 col-sm-2 col-md-2" id="code_warn" style="color:red;"></span>
            </div>
            <div class="form-group">
                <button class="btn btn-primary btn-login col-xs-8 col-sm-8 col-md-8 col-xs-offset-2 col-sm-offset-2 col-md-offset-2" onclick="return login()">登&emsp;&emsp;录</button>
            </div>
        </form>
    </div>
</div>
</body>
</html>