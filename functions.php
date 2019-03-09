<?php
require_once('mysql_helper.php');

/**
 * Получает списк категорий
 * @param $con mysqli Ресурс соединения
 * @param  $name Название карегории
 * @return array
 */
function getNameCategory($con) {
    $sql = "SELECT `id`, `name` FROM categories";
    $res = mysqli_query($con, $sql);
    $nameCatagory= mysqli_fetch_all($res, MYSQLI_ASSOC);
    return $nameCatagory;
}

/**
 * Получает списк соусов
 * @param $con mysqli Ресурс соединения
 * @return array
 */
function getNameSause($con) {
    $sql = "SELECT * FROM sauce";
    $res = mysqli_query($con, $sql);
    $nameSause= mysqli_fetch_all($res, MYSQLI_ASSOC);
    return $nameSause;
}

/**
 * Получает данные товара по id категории
 * @param $con mysqli Ресурс соединения
 * @paaram $idCategory array Идентификатор карегории
 * @return array
 */
function getParamMenu($con, $idCategory) {
    $sql = "SELECT * FROM product WHERE category_id = ?";
    $stmt = db_get_prepare_stmt($con, $sql, [$idCategory]);
    mysqli_stmt_execute($stmt);
    $res = mysqli_stmt_get_result($stmt);
    $menu_product= mysqli_fetch_all($res, MYSQLI_ASSOC);
    return $menu_product;
}

/**
 * Получает данные товара новинок
 * @param $con mysqli Ресурс соединения
 * @param $filter Название фильтра
 * @return array
 */
function getNewMenu($con, int $filter) {
    $sql = "SELECT *  FROM product WHERE  new = ?";
    $stmt = db_get_prepare_stmt($con, $sql, [$filter]);
    mysqli_stmt_execute($stmt);
    $res = mysqli_stmt_get_result($stmt);
    $menu_filter= mysqli_fetch_all($res, MYSQLI_ASSOC);
    return $menu_filter;
}
/**
 * Получает данные товара акции
 * @param $con mysqli Ресурс соединения
 * @param $filter Название фильтра
 * @return array
 */
function getStockMenu($con, int $filter) {
    $sql = "SELECT *  FROM product WHERE  stock = ?";
    $stmt = db_get_prepare_stmt($con, $sql, [$filter]);
    mysqli_stmt_execute($stmt);
    $res = mysqli_stmt_get_result($stmt);
    $menu_filter= mysqli_fetch_all($res, MYSQLI_ASSOC);
    return $menu_filter;
}

/**
 * Добавляет данные корзины в БД
 * @param $con mysqli Ресурс соединения
 * @param $product_id int  id продукта
 * @param $product_quantity int количество продукта
 * @param $sauce_id id int  id соуса
 * @param $sauce_quantity  int количество соусов
 * @return boolean
 */
function addProductInBasket($con, $product_name, $product_quantity, $product_price, $sauce_name, $sauce_price, $sauce_quantity)
{
    $sql = "
        INSERT INTO basket (product_name, product_quantity, product_price, sauce_name, sauce_price, sauce_quantity) 
        VALUES (?, ?, ?, ?, ?, ?)";
    $stmt = db_get_prepare_stmt($con, $sql, [$product_name, $product_quantity, $product_price, $sauce_name, $sauce_price, $sauce_quantity]);
    return mysqli_stmt_execute($stmt);
}
/**
 * Получает данные товара из корзины
 * @param $con mysqli Ресурс соединения
 * @return array
 */
function getParamBasket($con) {
    $sql = "SELECT * FROM basket";
    $res = mysqli_query($con, $sql);
    $basket_product = mysqli_fetch_all($res, MYSQLI_ASSOC);
    return $basket_product;
}

/**
 * Удаляет товар из корзины по id товара
 * @param $con mysqli Ресурс соединения
 * @param $idBasket int id товара
 * @return boolean
 */
function deleteProductById ($con, int $idBasket)
{
    $sql = "DELETE FROM basket WHERE id = ?";
    $stmt  = db_get_prepare_stmt($con, $sql, [$idBasket]);
    mysqli_stmt_execute($stmt);
    $res = mysqli_stmt_get_result($stmt);
    return mysqli_fetch_all($res, MYSQLI_ASSOC);
}

/**
 * вычисляет итоговую цену заказа
 * @param $basket_product ассоативный массив карзины
 * @param $final_price итоговая цена заказа
 * @return int
 */
function finalPrice($basket_product) {
    $final_price = 0;
    foreach ($basket_product as $product){

        $price = intval($product['product_quantity']) * intval($product['product_price'])
            + intval($product['sauce_quantity']) * intval($product['sauce_price']);


        $final_price += $price;
    }
    return $final_price;
}

/**
 * Добавляет данные корзины заказа в БД
 * @param $con mysqli Ресурс соединения
 * @param $product_id int  id продукта
 * @param $product_quantity int количество продукта
 * @param $sauce_id id int  id соуса
 * @param $sauce_quantity  int количество соусов
 * @param $client_name Имя заказчика
 * @param $client_phone телефон заказчика
 * @param $client_address адрес заказчика
 * @param $type_of_delivery  вид доставки
 * @return boolean
 */
function addOrder($con, $product_name, $product_quantity, $product_price, $sauce_name, $sauce_price, $sauce_quantity,
    $price, $client_name, $client_phone, $client_address, $type_of_delivery)
{
    $sql = "
        INSERT INTO basketorder (date_creation, product_name, product_quantity, product_price, sauce_name, sauce_price, sauce_quantity, 
        price, client_name, client_phone, client_address, type_of_delivery) 
        VALUES (NOW(), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    $stmt = db_get_prepare_stmt($con, $sql, [$product_name, $product_quantity, $product_price, $sauce_name, $sauce_price, $sauce_quantity,
        $price, $client_name, $client_phone, $client_address, $type_of_delivery]);
    return mysqli_stmt_execute($stmt);
}

/**
 * Получает данные заказа из БД
 * @param $con mysqli Ресурс соединения
 * @return array
 */
function checkOrder($con) {
    $sql = "SELECT * FROM basketorder";
    $res = mysqli_query($con, $sql);
    $basket_order = mysqli_fetch_all($res, MYSQLI_ASSOC);
    return $basket_order;
}

/**
 * Очищаает корзину
 * @param $con mysqli Ресурс соединения
 * @return boolean
 */
function deleteBasket($con) {
    $sql = "TRUNCATE TABLE  basket";
    mysqli_query($con, $sql);
}

/**
 * Очищаает Admin таблицу
 * @param $con mysqli Ресурс соединения
 * @return boolean
 */
function deleteBasketOrder($con) {
    $sql = "TRUNCATE TABLE  basketorder";
    mysqli_query($con, $sql);
}