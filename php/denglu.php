<?php
    @require_once("config.php");
    $username=$_GET["username"];
    $userpwd=$_GET["userpwd"];
    $str="SELECT * FROM  userinfo where username='$username' and type='1'";
    $result=mysql_query($str);
    $item=mysql_fetch_array($result);
    $list=array();
    $temp=array();
    if($item){
        if($userpwd==$item["userpwd"]){
            $temp["id"]=$item["id"];
            $temp["code"]=1;
            $temp["msg"]="登录成功";
        }else{
            $temp["code"]=0;
            $temp["msg"]="用户名与密码不匹配";
        }
    }else{
        $temp["code"]=0;
        $temp["msg"]="用户名不存在,请重新输入";
    }
    $list[]=$temp;
    echo json_encode($list);
?>