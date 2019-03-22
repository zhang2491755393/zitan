<?php
// @header("content-type:text/html;charset=utf8");
// @header("Access-Control-Allow-Origin:*");
// mysql_connect("192.168.50.161:3306","root","root");//你们的是3306
// mysql_select_db("1811");//表示选择的执行的数据库
// mysql_query("set character set 'utf8'"); //设置执行语句的编码格式  防止中文乱码

@header("content-type:text/html;charset=utf8");
@header("Access-Control-Allow-Origin:*");
mysql_connect("b-zddbhjvt7bybtw.bch.rds.gz.baidubce.com:3306","b_zddbhjvt7bybtw","123456");//你们的是3306
mysql_select_db("b_zddbhjvt7bybtw");//表示选择的执行的数据库
mysql_query("set character set 'utf8'"); //设置执行语句的编码格式  防止中文乱码
?>