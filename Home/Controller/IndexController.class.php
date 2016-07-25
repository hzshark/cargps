<?php
namespace Home\Controller;

use Think\Controller;
use Home\Service\Carinfo;

class IndexController extends Controller
{

    public function index()
    {
        header("Content-Type:text/html; charset=utf-8");
        $vehicle = new CarInfo();
        
        $count = $vehicle->vehiclecount();
        $reg_count =$vehicle->reg_vehicle();
        $run_count = $vehicle->get_run_vehicle();
        $unrun_count = $vehicle->get_unrun_vehicle();
        
        $this->assign("curdate", date("Y-m-d H:i:s"));
        $this->assign("vehiclecount", $count);
        $this->assign("reg_count", $reg_count);
        $this->assign("run_count", $run_count);
        $this->assign("unrun_count", $unrun_count);
        $this->display('index', 'utf-8');
    }

    public function history()
    {
        header("Content-Type:text/html; charset=utf-8");
        $this->display('qqmap_history', 'utf-8');
    }
    
    
}