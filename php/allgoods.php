<?php
    @require_once("config.php");
    $type=$_GET["goodstype"];
    $str="SELECT * from goodsinfo where goodstype='$type'";
    $result=mysql_query($str);
    $list=array();
    while($item=mysql_fetch_array($result)){
        $temp=array();
        $temp["goodsname"]=$item["goodsname"];
        $temp["goodsprice"]=$item["goodsprice"];
        $temp["goodsimg"]=$item["goodsimg"];
        $temp["id"]=$item["id"];
        $list[]=$temp;
    }
    echo json_encode($list);

?>