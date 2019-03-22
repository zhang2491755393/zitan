<?php
    @require_once("config.php");
    $userid=$_GET["userid"];
    // $goodsid=$_GET["goodsid"];
    // $username=$_GET["username"];
    $str="
    SELECT us.idgwc,gd.goodsname,gd.goodsimg,gd.goodsprice,us.goodsid,us.goodsnum,gd.goodsbiaohao,us.goodsguige from gouwuche  us, goodsinfo  gd where us.goodsid = gd.id and us.userid = '$userid' and us.type='1'";
    $result=mysql_query($str);
    $list=array();
    while($item=mysql_fetch_array($result,MYSQL_ASSOC)){
        $list[]=$item;
    }
    echo json_encode($list);
    
?>