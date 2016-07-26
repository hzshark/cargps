<?php
namespace Home\Controller;

use Think\Controller;
use Home\Service\Cargps;

class MonitorController extends Controller
{

    public function index()
    {
        header("Content-Type:text/html; charset=utf-8");
        $vehicle = new Cargps();
        $user_ip = $this->getip();
        
        $vehicles = $vehicle->showAllCar();
        
        $this->assign("vehicles", json_encode($vehicles));
        var_dump($vehicles);
        $this->assign("user_ip", $user_ip);
        $this->display('car', 'utf-8');
    }

    public function history()
    {
        header("Content-Type:text/html; charset=utf-8");
        $this->display('qqmap_history', 'utf-8');
    }
    
    //获取用户ip(外网ip 服务器上可以获取用户外网Ip 本机ip地址只能获取127.0.0.1)
    private function getip(){
        if(!empty($_SERVER["HTTP_CLIENT_IP"])){
            $cip = $_SERVER["HTTP_CLIENT_IP"];
        }
        else if(!empty($_SERVER["HTTP_X_FORWARDED_FOR"])){
            $cip = $_SERVER["HTTP_X_FORWARDED_FOR"];
        }
        else if(!empty($_SERVER["REMOTE_ADDR"])){
            $cip = $_SERVER["REMOTE_ADDR"];
        }
        else{
            $cip = '';
        }
        preg_match("/[\d\.]{7,15}/", $cip, $cips);
        $cip = isset($cips[0]) ? $cips[0] : 'unknown';
        unset($cips);
        return $cip;
    }
}