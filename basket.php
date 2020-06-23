<?php
// подключаем файлы
require_once('connect.php');
require_once('functions.php');
session_start();

// заголовок
$page_name = 'Miushi';
//скрипты
$src_menu = 'js/basket.js';

// подключаем контент

$basket_product = getParamBasket($con);
$price = finalPrice($basket_product);
$goods = count(getParamBasket($con));

$btn_menu  = include_template('btn-menu.php');
$img_cart  = include_template('img-cart.php', [
    'goods' => $goods
]);
$back_call  = include_template('back-call.php');
$phone  = include_template('phone.php');
$post  = include_template('post.php');
$flags  = include_template('flags.php');
$bottom_menu_modal = include_template('bottom-menu.php', [
    'btn_style' => 'btn btn-outline-success border-0'
]);
$bottom_menu  = include_template('bottom-menu.php', [
    'btn_style' => 'btn btn-outline-success border-0'
]);
$basket_cabinet = include_template('basket-cabinet.php', [
    'btn_style' => 'btn btn-outline-success border-0',
    'img_cart' => $img_cart,
    'basket_active' => 'active'
]);
$top_modal = include_template('top-modal.php', [
    'bottom_menu' => $bottom_menu_modal,
    'phone' => $phone,
    'back_call' => $back_call,
    'flags' => $flags,
    'post' => $post
]);

//Валидация

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $form = $_POST['form_deliv'];
    $key = [];

    $errors = [];

    $request = ['phone', 'address'];

    foreach ($request as $val) {
        if (empty($form[$val])) {
            $errors[$val] = "Это поле обязательно";
        }
    }
    if (empty($errors)) {
        foreach ($basket_product as $key){
            addOrder($con, $key['product_name'], $key['product_quantity'], $key['product_price'],
                $key['sauce_name'], $key['sauce_price'], $key['sauce_quantity'], $form['price'],
                $form['name'], $form['phone'], $form['address'], $form['option']);
        }
        $res = checkOrder($con);
        if ($res > 0) {
            deleteBasket($con);
            header("Location: /delivery.php");
            exit();
        }
    }
}

$basket = include_template('basket.php', [
    'basket' => $basket_product,
    'price' => $price,
    'goods' => $goods,
    'form' => $form,
    'errors' => $errors
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
    'content' => $basket,
    'img_cart' => $img_cart,
    'top_modal' => $top_modal
]);
print($layout_content);
