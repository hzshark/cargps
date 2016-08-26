<?php
namespace Home\Common;

use Think\Controller;

class CommonController extends controller{
    public function _initialize(){
        $this->login_check();
    }
    public function login_check(){
        if (session('?user')) {
            $this->user= session('user');
        }else{
            $this->redirect('Login/index');
        }
    }
}