<?php
    @require_once("config.php");
    $userid=$_GET["userid"];
    $goodsid=$_GET["goodsid"];
    $goodsnum=$_GET["goodsnum"];
    $gouwucheid=$_GET["gouwucheid"];
    $str="UPDATE gouwuche set goodsnum='$goodsnum' where userid='$userid' and goodsid='$goodsid' and idgwc='$gouwucheid'";
    $result=mysql_query($str);
    $line=mysql_affected_rows();
    $list=array();
    if($line==1){
        $list["code"]=1;
        $list["msg"]="数量成功";
    }else{
        $list["code"]=0;
        $list["msg"]="网络繁忙，请稍后重试";
    }
    echo json_encode($list);
    
?>