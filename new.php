<?php
// подключаем файлы
require_once('connect.php');
require_once('functions.php');
session_start();

// заголовок
$page_name = 'Miushi';
$src_menu = 'js/menu.js"';

// подключаем контент
$goods = count(getParamBasket($con));
$btn_menu  = include_template('btn-menu.php');
$img_cart  = include_template('img-cart.php', [
    'goods' => $goods
]);
$back_call  = include_template('back-call.php');
$phone  = include_template('phone.php');
$post  = include_template('post.php');
$flags  = include_template('flags.php');
$bottom_menu  = include_template('bottom-menu.php', [
    'btn_style' => 'btn btn-outline-success border-0',
    'stock_active' => 'active'
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

$menu_carts = [];
$menu_products = getNewMenu($con, (int)'1');
$sauces = getNameSause($con);
foreach ($menu_products as $menu_product) {
    $menu_cart = include_template('menu-cart.php', [
        'product' => $menu_product,
        'sauces' => $sauces
    ]);
    $menu_carts[] = $menu_cart;
}

$stock_new = include_template('stock-new.php', [
    'menu_cart' => join($menu_carts),
    'new_active' => 'text-danger',
    'stock_active' => 'text-dark'
]);
// формируем главную страницу
$layout_content = include_template('layout.php', [
    'page_name' => $page_name,
    'src_menu' => $src_menu,
    'flags' => $flags,
    'post' => $post,
    'phone' => $phone,
    'back_call' => $back_call,
    'btn_menu' => $btn_menu,
    'basket_cabinet' => $basket_cabinet,
    'bottom_menu' => $bottom_menu,
    'img_cart' => $img_cart,
    'top_modal' => $top_modal,
    'stock_new' => $stock_new
]);
print($layout_content);