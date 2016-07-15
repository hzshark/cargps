<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function index(){
        header("Content-Type:text/html; charset=utf-8");
        $this->display('qqmap','utf-8');
    }
    public function history(){
        header("Content-Type:text/html; charset=utf-8");
        $this->display('qqmap_history','utf-8');
    }
    
}