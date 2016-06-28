<?php
namespace Home\Service;

class Cargps {

    function showAllCar(){
        $carDao = D("Cargps");
        $cars = $carDao->field('car_id,Longitude, Latitude, Speed, time')
                                        ->group('car_id')
                                        ->order(array('time'=>'desc'))
//                                         ->buildSql();
                                        ->select();
        
                                        return $cars;

    }

}