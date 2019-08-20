<?php
include_once "db.php";
$ids = $_POST['ids'];

$mysql = new Mysql();
$result = $mysql -> delete("data", 'where id in ('.$ids.')');
$res = array(
    'success' => true
);
echo json_encode($res);

