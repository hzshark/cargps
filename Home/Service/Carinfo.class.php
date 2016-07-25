<?php
namespace Home\Service;


class Carinfo
{
    private $UNREG = 0;
    private $REG = 1;
    private $FAULT = 2;
    private $TRAVEL = 3;
    private $UNTRAVEL = 4;
    
    function vehiclecount(){
        $vehicleDao = D("CarInfo");
    
        $count = $vehicleDao->count();
    
        return $count;
    
    }
    
    function reg_vehicle(){
        $vehicleDao = D("CarInfo");
        $where['status'] = $this->REG;
        $count = $vehicleDao->where($where)->count();
        return $count;
    }
    
    function get_run_vehicle(){
        $vehicleDao = D("Cargps");
        $where['Speed'] = array("gt",0);
        $count = $vehicleDao->where($where)->group("car_id")->order('time desc')->count();
//         echo $vehicleDao->getLastSql();
        return $count;
    }
    
    
    function get_unrun_vehicle(){
        $vehicleDao = D("Cargps");
        $where['Speed'] = array("gt",0);
        $count = $vehicleDao->where($where)->group("car_id")->order('time desc')->count();
        //         echo $vehicleDao->getLastSql();
        return $count;
    }
    
}
