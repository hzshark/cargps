<?php
namespace CarGPS\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function index(){
        header("Content-Type:text/html; charset=utf-8");
        $this->display('baidumap','utf-8');
    }
}