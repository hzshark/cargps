<?php
namespace Home\Service;

class Cargps {

    function showAllCar(){
        $carDao = D("Cargps");
                                        
        $carsql = $carDao->table("car_gps as gps")->join("left join car_info as car on car.car_id = gps.car_id") 
                         ->field('gps.car_id,car.plate,gps.Longitude, gps.Latitude, gps.Speed, gps.time')
                         ->group('gps.car_id')
                         ->order(array('gps.time'=>'desc'))
//                          ->buildSql();
                         ->select();
// var_dump($carDao->getLastSql());
        return $carsql;

    }
    
    function cartrack($carid, $stime, $etime){
        $carDao = D("Cargps");
        $where['time']  = array(array('EGT',$stime), array('ELT', $etime));
        $where['car_id'] = $carid;
        $cartrackdata = $carDao
        ->field('car_id,Longitude, Latitude, Speed, time')
        ->where($where)
        ->order(array('time'=>'asc'))
        ->select();
//         var_dump($carDao->getLastSql());
        return $cartrackdata;
    }
}