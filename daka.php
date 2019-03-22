<?php
@require_once("config.php");
$userid=$_GET["userid"];
$zhuangtai=$_GET["zhuangtai"];
$date=$_GET["date"];
$moring=$_GET["moring"];
$xingqi=$_GET["xingqi"];
$evening=$_GET["evening"];
$bumen="select department,username,type from kaoqing  where id=$userid";//找到部门,名字,type
$result=mysql_query($bumen);
$list=array();
while($item=mysql_fetch_array($result)){
    $temp=array();
    $temp["department"]=$item["department"];
    $temp["username"]=$item["username"];
    $temp["type"]=$item["type"];
    $temp["xingqi"]=$item["xingqi"];
    $temp["eveningdaka"]=$item["eveningdaka"];
    $list[]=$temp;
};
$department=($list[0]["department"]);
$type=($list[0]["type"]);
$username=($list[0]["username"]);
$add="insert into daka(department,type,date,zhuangtai,userid,moringdaka,eveningdaka,username,xingqi) VALUES ('$department','$type','$date','$zhuangtai','$userid','$moring','$evening','$username','$xingqi')";
$result2=mysql_query($add);
echo ($result2);
?> 