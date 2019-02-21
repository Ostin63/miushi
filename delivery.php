<?php
// подключаем файлы
require_once('connect.php');
require_once('functions.php');
session_start();

// заголовок
$page_name = 'Miushi';

$userId = $_SESSION['user']['id'];
$name = $_SESSION['user']['name'];
//Валидация

// подключаем контент
$btn_menu  = include_template('btn-menu.php');
$img_cart  = include_template('img-cart.php');
$back_call  = include_template('back-call.php');
$phone  = include_template('phone.php');
$post  = include_template('post.php');
$flags  = include_template('flags.php');
$bottom_menu_modal = include_template('bottom-menu.php', [
    'btn_style' => 'btn btn-outline-success border-0'
]);
$bottom_menu  = include_template('bottom-menu.php', [
    'btn_style' => 'btn btn-outline-success border-0',
    'delivery_active' => 'active'
]);
$basket_cabinet = include_template('basket-cabinet.php', [
    'btn_style' => 'btn btn-outline-success border-0',
    'img_cart' => $img_cart
]);
$top_modal = include_template('top-modal.php', [
    'bottom_menu' => $bottom_menu_modal,
    'phone' => $phone,
    'back_call' => $back_call,
    'flags' => $flags,
    'post' => $post
]);
$delivery = include_template('delivery.php');

// формируем главную страницу
$layout_content = include_template('layout.php', [
    'page_name' => $page_name,
    'flags' => $flags,
    'post' => $post,
    'phone' => $phone,
    'back_call' => $back_call,
    'btn_menu' => $btn_menu,
    'basket_cabinet' => $basket_cabinet,
    'bottom_menu' => $bottom_menu,
    'content' => $delivery,
    'img_cart' => $img_cart,
    'top_modal' => $top_modal
]);
print($layout_content);
