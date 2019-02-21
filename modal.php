<?php
// подключаем файлы
require_once('connect.php');
require_once('functions.php');
session_start();

// подключаем контент
$bottom_menu  = include_template('bottom-menu.php', [
    'btn_style' => 'text-dark'
]);
$back_call  = include_template('back-call.php');
$phone  = include_template('phone.php');
$post  = include_template('post.php');
$flags  = include_template('flags.php');
$index = include_template('top-modal.php', [
    'bottom_menu' => $bottom_menu,
    'flags' => $flags,
    'post' => $post,
    'phone' => $phone,
    'back_call' => $back_call,
]);
// формируем главную страницу

$layout_content = include_template('layout.php', [
    'index' => $index

]);
print($layout_content);