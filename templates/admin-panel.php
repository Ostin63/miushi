<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?= $page_name ?></title>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,600,700&amp;subset=cyrillic"
          rel="stylesheet">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/owl.carousel.min.css">
    <link rel="stylesheet" href="css/owl.theme.default.min.css">
    <link rel="stylesheet" href="css/style.min.css">
</head>

<body>

<main>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <h2>Admin-panel</h2>
        </div>
        <table class="table table-striped">
            <thead>
            <tr>
                <th scope="col">№</th>
                <th scope="col">Дата заказа</th>
                <th scope="col">Название товара</th>
                <th scope="col">количество</th>
                <th scope="col">стоимость товара</th>
                <th scope="col">Соус</th>
                <th scope="col">количество соуса</th>
                <th scope="col">стоимость соуса</th>
                <th scope="col">стоимость заказа</th>
                <th scope="col">Имя</th>
                <th scope="col">Адрес</th>
                <th scope="col">Телефон</th>
                <th scope="col">Вид доставки</th>
                <th scope="col">статус заказа</th>
            </tr>
            </thead>
            <?php foreach ($content as $val): ?>
                <tbody>
                <tr class="table_row">
                    <th scope="row"><?= $val['id']?></th>
                    <th><?= ($val['date_creation'])?></th>
                    <td><?= ($val['product_name'])?></td>
                    <td><?= ($val['product_quantity'])?></td>
                    <td><?= ($val['product_price'])?></td>
                    <td><?= ($val['sauce_name'])?></td>
                    <td><?= ($val['sauce_quantity'])?></td>
                    <td><?= ($val['sauce_price'])?></td>
                    <td><?= ($val['price'])?></td>
                    <td><?= ($val['client_name'])?></td>
                    <td><?= ($val['client_adress'])?></td>
                    <td><?= ($val['client_phone'])?></td>
                    <td><?= ($val['type_of_delivery'])?></td>
                    <td>
                        <button class="send btn btn-info">отправить</button>
                        <button class="delivered btn btn-success">Доставлен</button>
                    </td>
                </tr>
                </tbody>
            <?php endforeach ?>
        </table>
        <div class="row justify-content-center mt-5">
            <a class="btn_dellete btn btn-danger btn-lg" href="admin-panel.php">чистить таблицу</a>
        </div>
    </div>
</main>

<script src="js/jQuery.js"></script>
<script src="js/jquery-json.js"></script>
<script src="js/ajax-popper-1.14.3.js"></script>
<script src="js/bootstrap.js"></script>
<script src="js/admin.js"></script>
</body>

</html>