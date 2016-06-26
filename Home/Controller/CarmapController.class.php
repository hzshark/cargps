<?php
namespace Home\Controller;
use Think\Controller;
class CarmapController extends Controller {
public function index(){
        header("Content-Type:text/html; charset=utf-8");
        $this->display('map','utf-8');
    }

    public function map(){
        header("Content-Type:text/html; charset=utf-8");
        $this->display('map','utf-8');
    }
}

