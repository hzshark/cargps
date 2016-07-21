<?php
namespace Home\Controller;

use Think\Controller;
use Home\Service\PushToApp;
class PushController extends Controller {
    public function index(){
        header("Content-Type:text/html; charset=utf-8");
        $this->display('qqmap','utf-8');
    }
    public function pushtest(){
        header("Content-Type:text/html; charset=utf-8");

        //采用"PHP SDK 快速入门"， "第二步 获取访问凭证 "中获得的应用配置
        define('APPKEY','iaKwmdguULAgkEu5lrKM3A');
        define('APPID','L7YAaPwfCc73PMfVxbQ4W1');
        define('MASTERSECRET','WJmJb2yvzw8cYBgSIrPNH8');
        define('HOST','http://sdk.open.api.igexin.com/apiex.htm');
        define('CID1','请输入您的CID1');
        define('CID2','请输入您的CID2');
        //define('Alias1','请输入您的Alias1');
        //define('Alias2','请输入您的Alias2');
        $pushphp = new PushToApp();
        $pushphp->pushMessageToSingle();
        $this->show("aaa", "utf-8");
    }
    
}