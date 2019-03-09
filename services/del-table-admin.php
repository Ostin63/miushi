<?php
require_once('../connect.php');
require_once('../functions.php');

$postData = file_get_contents('php://input');
$data = json_decode($postData, true);

var_dump($data);

if (isset($data)){
    deleteBasketOrder($con);
}