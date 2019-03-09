<?php
// подключаем файлы
require_once('connect.php');
require_once('functions.php');


// заголовок
$page_name = 'Miushi';

// подключаем контент
$content = checkOrder($con);
// формируем главную страницу
$layout_content = include_template('admin-panel.php', [
    'content' => $content
]);
print($layout_content);
