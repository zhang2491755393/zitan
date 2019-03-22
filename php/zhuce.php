<?php
    @require_once("config.php");
    $username=$_GET["username"];
    $userpwd=$_GET["userpwd"];
    if($username && $userpwd){
        $str="INSERT INTO userinfo (username,userpwd) VALUES ('$username','$userpwd')";
    }
    
    $result=mysql_query($str);
    $list=array();
    $temp=array();
    if($result){
            $temp["code"]=1;
            $temp["msg"]="注册成功";
    }else{
        $temp["code"]=0;
        $temp["msg"]="注册失败,请重新注册";
    }
    $list[]=$temp;
    echo json_encode($list);
?>