<?php
namespace Home\Controller;
use Think\Controller;
use Home\Service\Cargps;
class CarmapController extends Controller {
public function index(){
        header("Content-Type:text/html; charset=utf-8");
        $this->display('map','utf-8');
    }

    public function mapdata(){
        header("Content-Type:text/html; charset=utf-8");
        $carservice = new Cargps();
        $carlist = $carservice->showAllCar();
//         var_dump($carlist);
        $this->ajaxReturn($carlist);
    }
}

