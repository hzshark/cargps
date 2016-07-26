<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="">
<meta name="author" content="">
<title>欢迎登录新能源汽车实时调度系统</title>
<link href="/Public/css/bootstrap.min.css" rel="stylesheet" media="screen">
<link href="/Public/css/skin.css" rel="stylesheet" media="screen">
<script charset="utf-8" src="http://map.qq.com/api/js?v=2.exp&libraries=convertor"></script>
<script type="text/javascript">
var car_img = "/Public/images/car.png";
var busmarker = "/Public/images/busmarker.png";
var vehicles = <?php echo ($vehicles); ?>;
</script>
<style>
#map_container{
	 height:100%;
	 border: 1px solid #999;
	 min-width:500px;
     min-height:767px;
}

@media print{
  #notes{display:none}
  #map_container{margin:0}
}

</style>
<title>DEMO</title>
</head>

<body class="ng-scope-body">
<div class="navbar navbar-inverse  navbar-fixed-top bg-dark">
  <div class="container-fluid"> 
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
      <a data-container="body" data-animation="am-slide-top aside-open-backdrop" data-placement="top" data-template="views/partials/aside.tpl.html" bs-aside="aside" class="navbar-brand text-lt ng-scope"> <img src="/Public/images/logos.png" ></a> </div>
    
    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#">修改密码</span></a></li>
        <li> <a href="#" class="dropdown-toggle">退出 </a> </li>
      </ul>
    </div>
    <!-- /.navbar-collapse --> 
  </div>
  <!-- /.container-fluid --> 
</div>
<div class="app-aside hidden-xs bg-dark lt">
  <div bs-affix="" class="app-aside-inner ng-scope affix-top" style="position: absolute;"> 
    <!-- uiView: aside@ -->
    <div ui-view="aside@" class="app-aside-body scrollable hover ng-scope">
      <div class="row" style="padding:10px">
        <div class="col-lg-12">
          <div class="btn-group"  style="width:100%; margin-bottom:6px">
            <button aria-expanded="false" aria-haspopup="true" data-toggle="dropdown" class="btn btn-default dropdown-toggle" type="button"  style="width:100%; ">车牌 <span class="caret"></span></button>
            <ul class="dropdown-menu">
              <li><a href="#">下拉选项</a></li>
              <li><a href="#">下拉选项</a></li>
              <li><a href="#">下拉选项</a></li>
            </ul>
          </div>
          <!-- /input-group --> 
        </div>
        <!-- /.col-lg-6 -->
        <div class="col-lg-12">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="">
            <span class="input-group-btn">
            <button class="btn btn-default" type="button">搜索</button>
            </span> </div>
          <!-- /input-group --> 
        </div>
        <!-- /.col-lg-6 --> 
        
        <!-- /.row -->
        <div class="pages text-center">
          <nav>
            <ul class="pagination pagination-sm">
              <li> <a href="#" aria-label="Previous"> <span aria-hidden="true">&laquo;</span> </a> </li>
              <li><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li> <a href="#" aria-label="Next"> <span aria-hidden="true">&raquo;</span> </a> </li>
            </ul>
          </nav>
        </div>
        <div class="nav">
          <div class="car-list">
            <dl>
              <dt style="color:#fff">
                <label>
                  <input type="checkbox">
                  浙A 123456</label>
                <span class="pull-right btn btn-success">行驶中</span></dt>
              <dd> 整车编号：SN123213123231<br>
                所属车队：浙江顺丰快递<br>
                设备编号：qs2323213<br>
              </dd>
              <dd> <a href="#" class="btn btn-success btn-xs">实时跟踪</a> <a href="#" class="btn btn-success btn-xs">动态数据</a> <a href="#" class="btn btn-success btn-xs">历史轨迹</a> </dd>
            </dl>
          </div>
          <div class="car-list">
            <dl>
              <dt style="color:#fff">
                <label>
                  <input type="checkbox">
                  浙A 123456</label>
                <span class="pull-right btn btn-info">行驶中</span></dt>
              <dd> 整车编号：SN123213123231<br>
                所属车队：浙江顺丰快递<br>
                设备编号：qs2323213<br>
              </dd>
              <dd> <a href="#" class="btn btn-success btn-xs">实时跟踪</a> <a href="#" class="btn btn-success btn-xs">动态数据</a> <a href="#" class="btn btn-success btn-xs">历史轨迹</a> </dd>
            </dl>
          </div>
          <div class="car-list">
            <dl>
              <dt style="color:#fff">
                <label>
                  <input type="checkbox">
                  浙A 123456</label>
                <span class="pull-right btn btn-warning">行驶中</span></dt>
              <dd> 整车编号：SN123213123231<br>
                所属车队：浙江顺丰快递<br>
                设备编号：qs2323213<br>
              </dd>
              <dd> <a href="#" class="btn btn-success btn-xs">实时跟踪</a> <a href="#" class="btn btn-success btn-xs">动态数据</a> <a href="#" class="btn btn-success btn-xs">历史轨迹</a> </dd>
            </dl>
          </div>
        </div>
      </div>
      <div class="close-left"><a href="#">收起</a></div>
      <div class="app-aside-footer p text-xs text-center">V1.0 by xxx </div>
    </div>
  </div>
</div>
<div class="app-content ng-scope">
  <div class="p-h-md p-v bg-white box-shadow pos-rlt ng-scope">
    <h3 class="no-margin">车辆监控 </h3>
  </div>
  <div class="p-md" style="padding:0">
    <div class="row" style="height:100%; min-height:650px">
      <div class="car-icon"> <a class="glyph-search search-btn" href="#" style="font-size:30px; color:#f30"></a>
        <div class="pop-s"> <span>浙AQ83a25</span> <i>123KM/H</i>
          <div class="triangle-down"></div>
        </div>
      </div>
      <div class="pop-b" style="left:300px; top:300px"> <a class="close">X</a>
        <h2>浙A23243A    行驶中</h2>
        <div class="state">
          <ul>
            <li><span>上报时间：</span><em>2016-01-02 12：13：34</em></li>
            <li><span>车速：</span><em>12km/h</em></li>
            <li><span>VIN码：</span><em>ljds23u49832798</em></li>
          </ul>
        </div>
        <div class="cz">
          <ul>
            <li class="cz1"><a  class="img">跟踪车辆</a><br>
              跟踪车辆</li>
            <li class="cz2"><a  class="img">历史轨迹</a><br>
              历史轨迹</li>
            <li class="cz3"><a  class="img">抓拍车辆</a><br>
              抓拍车辆</li>
            <li class="cz4"><a  class="img">查看图片</a><br>
              查看图片</li>
          </ul>
        </div>
        <div class="triangle-down2"></div>
        <div class="triangle-down3"></div>
      </div>
      <div class="pop-b" style="left:600px; top:300px; height:200px"> <a class="close">X</a>
        <h2>浙A23243A    行驶中</h2>
        <div class="state" style="margin-top:16px">
          <ul>
            <li><span>抓拍类型：</span><em><input name="" type="radio" value="">连续拍3张</em><em style="margin-left:16px"><input name="" type="radio" value="">连续拍3张</em></li>
          </ul>
        </div>
        <div class="cz">
         <span class="btn btn-success" style="width:100%;">抓拍</span>
        </div>
        <div class="triangle-down2"></div>
        <div class="triangle-down3"></div>
      </div>
       <div id="map_container"></div>
    </div>
    <nav> </nav>
  </div>
</div>
<script type="text/javascript" src="Public/js/jquery.js"></script>
<script type="text/javascript" src="/Public/js/bootstrap.min.js"></script>
<script type="text/javascript" src="Public/js/qqmaps.js" />

</body>
</html>