<?php
@require_once("config.php");
$type = $_GET["goodstype"];
    $str = "SELECT count(*) FROM goodsinfo where goodstype='$type'";
$result = mysql_query($str);
$item=mysql_fetch_array($result,MYSQL_ASSOC);
echo json_encode($item);