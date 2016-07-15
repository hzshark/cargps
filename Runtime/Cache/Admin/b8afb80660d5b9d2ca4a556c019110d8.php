<?php if (!defined('THINK_PATH')) exit();?>﻿<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>车辆监管</title>
    <link href="/Public/css/lib/bootstrap.min.css" rel="stylesheet">
    <script src="/Public/js/lib/WdatePicker.js" type="text/javascript"></script>
</head>
<body>
<jsp:include page="/page/nav.jsp"></jsp:include>

<div class="container">
    <div class="panel panel-primary">
        <div class="panel panel-heading">
            <h5>车辆监管</h5>
        </div>
        <div class="panel panel-body">

            <form class="form-inline">
                <div class="row query-box">
                    <div class="col-md-3 col-sm-3">
                        <div class="form-group">
                            <label for="userName">姓名：</label>
                            <input type="text" name="userName" id="userName" class="form-control" placeholder="请输入姓名">
                        </div>
                    </div>

                    <div class="col-md-3 col-sm-3">
                        <div class="form-group">
                            <label for="email">邮箱：</label>
                            <input type="text" name="email" id="email" class="form-control" placeholder="请输入邮箱">
                        </div>
                    </div>

                    <div class="col-md-3 col-sm-3">
                        <div class="form-group">
                            <label for="phone">手机：</label>
                            <input type="text" name="phone" id="phone" class="form-control" placeholder="请输入手机号">
                        </div>
                    </div>

                    <div class="col-md-3 col-sm-3">
                        <div class="form-group">
                            <label for="userType">状态:</label>
                            <select name="userType" id="userType" class="form-control">
                                <option value="" selected="selected">请选择</option>
                                <option value="0">未激活</option>
                                <option value="1">已激活</option>
                                <option value="2">已注销</option>
                                <option value="3">已锁定</option>
                                <option value="4">已冻结</option>
                            </select>
                        </div>
                    </div>
                </div>
                <br>

                <div class="row query-box">
                    <div class="col-md-3 col-sm-3">
                        <div class="form-group">
                            <label for="regFrom">注册来源：</label>
                            <select id="regFrom" name="regFrom" class="form-control">
                                <option value="">请选择</option>
                                <option value="0102" selected="selected">平台+手机app</option>
                                <option value="01">平台</option>
                                <option value="02">手机app</option>
                                <option value="03">接口</option>
                                <option value="10">客户推荐</option>
                            </select>
                        </div>
                    </div>

                    <div class="col-md-3 col-sm-3">
                        <div class="form-group">
                            <label for="mtId">会员类型：</label>
                            <select id="mtId" name="mtId" class="form-control">
                                <option value="" selected="selected">请选择</option>
                                <option value="1">个人</option>
                                <option value="2">企业</option>
                            </select>
                        </div>
                    </div>

                    <div class="col-md-3 col-sm-3">
                        <div class="form-group">
                            <label for="emailStatus">邮箱状态:</label>
                            <select name="emailStatus" id="emailStatus" class="form-control">
                                <option value="" selected="selected">请选择</option>
                                <option value="0">未激活</option>
                                <option value="1">已激活</option>
                            </select>
                        </div>
                    </div>
                </div>
                <br>

                <div class="row query-box">
                    <div class="col-md-6 col-sm-6">
                        <div class="form-group">
                            <label >注册时间：</label>
                            <input type="text" name="regTimeBegin" class="form-control" id="regTimeBegin"  onClick="WdatePicker()"> ~
                            <input type="text" name="regTimeEnd" class="form-control" id="regTimeEnd"  onClick="WdatePicker()">
                        </div>
                    </div>

                    <div class="col-md-3 col-sm-3">
                        <div class="form-group">
                            <input type="button" id="search_button" class="btn btn-primary" onclick="queryUser(1)" value="查询">&emsp;&emsp;
                            <input type="button" class="btn btn-default" onclick="toExcel()" value="导出到Excel">
                        </div>
                    </div>

                </div>


            </form><br>

            <!-- 开始构建表格 -->
            <div class="table-responsive">
                <table class="table table-hover">
                    <thead>
                    <tr>
                        <th style="width : 140px;">姓名</th>
                        <th style="width : 60px;">类型</th>
                        <th style="width : 230px;">注册时间</th>
                        <th style="width : 140px;">联系方式</th>
                        <th style="width : 260px;">邮箱</th>
                        <th style="width : 170px;">公司名称</th>
                        <th style="width : 100px;">子账号</th>
                        <th style="width : 150px;">注册来源</th>
                        <th style="width : 80px;">状态</th>
                        <th style="width : 100px;">操作</th>
                    </tr>
                    </thead>
                    <tbody id="userList-box">

                    </tbody>
                </table>
            </div>
        </div>

        <div class="panel-footer">
            <div style="width: 700px;" class="container">
                <ul class="pagination" id="pagination-box">

                </ul>
            </div>
        </div>

        <!--显示查询结果-->
        <script id="userList-template" type="text/template">
            {% for(var user in users ){ %}
            <tr>
                <td>{%= users[user]['fullname'] %}</td>
                <td>{%= users[user]['type'] %}</td>
                <td>{%= users[user]['createdate'] %}</td>
                <td>{%= users[user]['mobile'] %}</td>
                <td>{%= users[user]['mail'] %}</td>
                <td>{%= users[user]['company'] %}</td>
                <td>{%= users[user]['property'] %}</td>
                <td>{%= users[user]['logintype'] %}</td>
                <td>{%= users[user]['status'] %}</td>
                <td style="width: 140px;">
                    <a href="javascript:void(0)" onclick="seeDetails('{%= users[user]['id'] %}');">详请</a>
                    <a href="javascript:void(0)" onclick="sendMail('{%= users[user]['id'] %}')">
                       <%-- {%= users[user]['aut_status']=='0'?'激活邮件':'' %}--%>
                        {%if(users[user]['aut_status']=='0' && (users[user]['status']=='已激活'||users[user]['status']=='未激活')){ %}激活邮件{% }%}
                    </a>
                </td>
            </tr>
            {% } %}
        </script>

        <script id="pagination-template" type="text/template">
            <li>
                <button class="btn btn-default" aria-label="Previous" onclick="queryUser(1)" {%= pagenum == 1 ? 'disabled="true"' : '' %}>
                    <span aria-hidden="true">&laquo;首页</span>
                </button>
            </li>
            <li><button class="btn btn-default" onclick="queryUser({%= pagenum-1 %})" {%= pagenum == 1 ? 'disabled="true"' : '' %}>上一页</button></li>
            <li><button class="btn btn-default" onclick="queryUser({%= pagenum+1 %})" {%= pagenum == pageCount ? 'disabled="true"' : '' %}>下一页</button></li>
            <li>
                <button class="btn btn-default"  aria-label="Next" onclick="queryUser({%= pageCount %})" {%= pagenum == pageCount ? 'disabled="true"' : '' %}>
                    <span aria-hidden="true" >尾页&raquo;</span>
                </button>
            </li>
            <li style="line-height: 35px;">
                &emsp;第<strong id="currentPage">{%= pagenum %}</strong>页&emsp;共{%= pageCount %}页&emsp;共{%= count %}条数据&emsp;到&nbsp;<input type="text" id="pageNum" class="form-control" style="width:50px;display: inline;">&nbsp;页&nbsp;<a href="javascript:void(0);" onclick="turnToPage()" style="float: right;">跳转</a>
            </li>
        </script>
    </div>
</div>
<jsp:include page="/page/layout/foot.jsp"></jsp:include>
<script src="/assert/js/custom/member/memberManagement.js" type="text/javascript"></script>

<script>
    $(document).ready(function () {
        queryUser(1);
    });
</script>
</body>
</html>