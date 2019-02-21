<div class="stock pt-5 pb-2">
    <div class="container">
        <div class="nav">
            <a class="btn font-weight-bold <?= isset($new_active) ? $new_active : "" ?>" href="new.php">Новинки</a>
            <a class="btn font-weight-bold <?= isset($stock_active) ? $stock_active : "" ?>" href="stock.php">Акции</a>
        </div>
        <ul class="nav owl-carousel owl-theme slide-1 pt-3 mb-5">

            <?= $menu_cart?>

        </ul>
    </div>

</div>