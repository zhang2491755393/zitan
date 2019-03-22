<?php
@require_once("config.php");
$userid=$_GET["userid"];
$goodsid = $_GET["goodsid"];
$goodsguige=$_GET["goodsguige"];
$goodsnum = $_GET["goodsnum"];
// $goodsname=$_GET["goodsname"];
//判断用户是否加入过购物车，加入过数量+1，没加入新增
$count = "SELECT count(*) FROM gouwuche where goodsid='$goodsid'and userid='$userid' and goodsguige='$goodsguige'";
$countresult = mysql_query($count);
$item = mysql_fetch_array($countresult);
$temp = array();
if ($item["count(*)"]==1) { //存在
    $str = "UPDATE gouwuche set goodsnum=goodsnum+'$goodsnum' where goodsid='$goodsid' and userid='$userid' and goodsguige='$goodsguige'";
    $result = mysql_query($str);
    $line = mysql_affected_rows();
    if ($line > 0) {
        $temp["code"] = 1;
        $temp["msg"] = "更新购物车成功";
    }else{
    $temp["code"] = 0;
    // $temp["msg"] = "更新购物车失败";
    $temp["msg"] = "网络繁忙，请稍后再试";
    }
} else { //不存在
    $str="insert INTO gouwuche (goodsid,userid,goodsguige,goodsnum) VALUES ('$goodsid','$userid','$goodsguige','$goodsnum')";
    $result=mysql_query($str);
    $line = mysql_affected_rows();
    if($line>0){
    $temp["code"]=1;
    $temp["msg"]="添加购物车成功";
    }else{
        $temp["code"]=0;
        // $temp["msg"]="添加购物车失败";
        $temp["msg"]="网络繁忙，请稍后再试";
    }
}
echo json_encode($temp);
 