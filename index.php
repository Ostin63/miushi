<?php
// подключаем файлы
require_once('connect.php');
require_once('functions.php');
session_start();

// заголовок
$page_name = 'Miushi';

// подключаем контент
$goods = count(getParamBasket($con));
$btn_menu  = include_template('btn-menu.php');
$img_cart  = include_template('img-cart.php');
$back_call  = include_template('back-call.php');
$phone  = include_template('phone.php');
$post  = include_template('post.php');
$flags  = include_template('flags.php');
$carousel = include_template('carousel.php');
$vantage = include_template('vantage.php');
$reviews = include_template('reviews.php');
$company = include_template('company.php');
$contact = include_template('contact.php');
$bottom_menu  = include_template('bottom-menu.php', [
    'btn_style' => 'btn btn-outline-success border-0'
]);
$basket_cabinet = include_template('basket-cabinet.php', [
    'btn_style' => 'btn btn-outline-success border-0',
    'img_cart' => $img_cart
]);
$bottom_menu_modal = include_template('bottom-menu.php', [
    'btn_style' => 'btn btn-outline-success border-0'
]);
$top_modal = include_template('top-modal.php', [
    'bottom_menu' => $bottom_menu_modal,
    'phone' => $phone,
    'back_call' => $back_call,
    'flags' => $flags,
    'post' => $post
]);
$stock = include_template('stock.php');
// формируем главную страницу
$layout_content = include_template('layout.php', [
    'page_name' => $page_name,
    'content' => $carousel,
    'flags' => $flags,
    'post' => $post,
    'phone' => $phone,
    'back_call' => $back_call,
    'btn_menu' => $btn_menu,
    'basket_cabinet' => $basket_cabinet,
    'bottom_menu' => $bottom_menu,
    'img_cart' => $img_cart,
    'vantage' => $vantage,
    'reviews' => $reviews,
    'company' => $company,
    'contact' => $contact,
    'top_modal' => $top_modal,
    'stock' => $stock
]);
print($layout_content);
