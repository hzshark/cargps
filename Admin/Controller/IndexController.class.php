<?php
namespace Admin\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function login(){
        header("Content-Type:text/html; charset=utf-8");
        $this->display('login','utf-8');
    }
    
    public function verify() {
        $Verify =     new \Think\Verify();
        $Verify->imageW = 150;
        $Verify->imageH = 34;
        $Verify->fontSize = 16;
        $Verify->length   = 4;
        
//         // 验证码字体使用 ThinkPHP/Library/Think/Verify/ttfs/5.ttf
//         $Verify->fontttf = '5.ttf';
        
        // 开启验证码背景图片功能 随机使用 ThinkPHP/Library/Think/Verify/bgs 目录下面的图片
//         $Verify->useImgBg = true;        
        
//         // 设置验证码字符为纯数字
//         $Verify->codeSet = '0123456789';

//         $Verify->useZh = true;
//         // 设置验证码字符
//         $Verify->zhSet = '们以我到他会作时要动国产的一是工就年阶义发成部民可出能方进在了不和有大这';
        $Verify->useNoise = false;  // 关闭验证码杂点
        $Verify->entry();
    }
    
    public function index(){
        header("Content-Type:text/html; charset=utf-8");
        $this->display('carManagement','utf-8');
    }
    
    // 检测输入的验证码是否正确，$code为用户输入的验证码字符串
    function check_verify($code, $id = ''){
        $verify = new \Think\Verify();
        return $verify->check($code, $id);
    }
}