<?php
    @require_once("config.php");
    $userid=$_GET["userid"];
    $goodsid=$_GET["goodsid"];
    $str="UPDATE gouwuche set type='0' where userid='$userid' and goodsid='$goodsid'";
    $result=mysql_query($str);
    $line=mysql_affected_rows();
    $list=array();
    if($line>0){
        $list["code"]=1;
        $list["msg"]="删除成功";
    }else{
        $list["code"]=0;
        $list["msg"]="网络繁忙，请稍后重试";
    }
    echo json_encode($list);
    
?>