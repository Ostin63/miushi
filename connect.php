<?php
//соединение с сервером
$con = mysqli_connect('localhost', 'root', '', 'miushi');
mysqli_set_charset($con, "utf8");

if ($con == false) {
    print(mysqli_connect_error());
}
