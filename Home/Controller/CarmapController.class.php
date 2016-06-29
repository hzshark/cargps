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
//         echo "aaaaaaaaa44444444444a";
        $this->ajaxReturn($carlist);
    }

    public function getcartrack(){
        header("Content-Type:text/html; charset=utf-8");
        $carservice = new Cargps();

        $carid = '1477413199';
        $etime = 1467074401;
        $stime = $etime-24*60*60;

        $carlist = $carservice->cartrack($carid, $stime, $etime);
        $this->ajaxReturn($carlist);
    }
    
    public function track(){
        header("Content-Type:text/html; charset=utf-8");
        $this->display('track','utf-8');
    }
}

