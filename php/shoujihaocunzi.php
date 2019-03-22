<?php
    @require_once("config.php");
    $username=$_GET["username"];
    $str="SELECT * FROM  userinfo where username='$username' and type='1'";
    $result=mysql_query($str);
    $item=mysql_fetch_array($result);
    $list=array();
    $temp=array();
    if($item){
         $temp["code"]=0;
        $temp["msg"]="用户名已存在，请重新输入";
    }else{
        $temp["code"]=1;
        $temp["msg"]="√";
    }
    $list[]=$temp;
    echo json_encode($list);
?>