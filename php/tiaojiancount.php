<?php
@require_once("config.php");
$type = $_GET["goodstype"];
$flag = $_GET["flag"];
$title=$_GET["title"];
if ($flag % 2 == 1) {
    $str = "SELECT count(*) FROM goodsinfo where goodstype='$type' and goodsname like '%$title%'";
} else {
    $str = "SELECT count(*) FROM goodsinfo where goodstype='$type' and goodsname like '%$title%'";
}
$result = mysql_query($str);
$item=mysql_fetch_array($result,MYSQL_ASSOC);
echo json_encode($item);