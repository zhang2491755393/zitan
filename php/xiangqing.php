<?php
    @require_once("config.php");
    $id=$_GET["id"];
    $str="SELECT * from goodsinfo where id='$id'";
    $result=mysql_query($str);
    $list=array();
    $item=mysql_fetch_array($result,MYSQL_ASSOC);
    echo json_encode($item);

?>