<?php
@require_once("config.php");
$type = $_GET["goodstype"];
$flag = $_GET["flag"];
if ($flag % 2 == 1) {
    $str = "SELECT * FROM goodsinfo where goodstype='$type' ORDER BY  goodsprice ASC ";
} else {
    $str = "SELECT * FROM goodsinfo where goodstype='$type' ORDER BY  goodsprice DESC ";
}
$result = mysql_query($str);
$list = array();
while ($item = mysql_fetch_array($result)) {
    $temp = array();
    $temp["goodsname"] = $item["goodsname"];
    $temp["goodsprice"] = $item["goodsprice"];
    $temp["goodsimg"] = $item["goodsimg"];
    $temp["id"] = $item["id"];
    $list[] = $temp;
}
echo json_encode($list);
 