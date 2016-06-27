<?php
namespace Home\Controller;
use Think\Controller;
use Home\Service\Cargps;
class CarmapController extends Controller {
public function index(){
        header("Content-Type:text/html; charset=utf-8");
        $cars = new Cargps();
//         var_dump($cars->showAllCar());
        $this->assign("carlist", $cars->showAllCar());
        $this->display('map','utf-8');
    }

    public function map(){
        header("Content-Type:text/html; charset=utf-8");
        $this->display('map','utf-8');
    }
}

