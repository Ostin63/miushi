<li class="shadow m-2 bg-white">
    <div class="card-slider">
        <img class="card-img-top" src="img/<?= $product['url'] ?>" alt="photo">
        <!--Иконки-->
        <div class="fire-icon <?= empty($product['stock']) ? "d-none" : "" ?>">
            <img src="img/stock.png" alt="stock">
        </div>
        <div class="hit-icon <?= empty($product['hit']) ? "d-none" : "" ?> text-white dfn font-weight-bold text-uppercase">
            Хит
        </div>
        <div class="new-icon <?= empty($product['new']) ? "d-none" : "" ?> text-white font-weight-bold text-lowercase">
            New
        </div>
        <div class="veg-icon <?= empty($product['veg']) ? "d-none" : "" ?> text-white dfn font-weight-bold text-uppercase">
            Veg
        </div>

    </div>

    <div class="card-body text-center">
        <h5 class="card-title"><?= $product['catalog_name'] ?></h5>
        <div class="navbar m-2">
                <span class="<?= empty($product['quantity']) ? "d-none" : "" ?>"><?= $product['quantity'] ?>
                    шт.</span><span
                    class="<?= empty($product['quantity']) ? "d-none" : "" ?>">|</span><span><?= $product['weight'] ?>
                г.</span>|<span><?= $product['calorie'] ?> Kkal</span>
        </div>
        <div class="sauce_select">
            <div class="navbar js-spinner stepper-2 stepper pl-1 pr-1">
                <p class="font-weight-bold m-0">Добавить:<span class="btn btn-sm btn-light p-0 ml-1">+</span></p>
                <input class="sauce__quantity stepper__input" type="number" min="1" max="100" step="1" value="1">
                <span class="btn btn-sm btn-light p-0">&times;</span>
                <p class="sauce_price font-weight-bold m-0"><span class="sauce_price-val">140</span><sup class="pl-1">руб</sup></p>
                <div class="stepper__controls">
                    <button class="cart-plus btn btn-sm" type="button" spinner-button="up" id="$product['id']"><span class="d-block btn-pink p-1 pt-2 pb-2">+</span></button>
                </div>
            </div>

            <select class="chinese-sauce btn-block btn-sm mt-2 mb-2">
                <?php foreach ($sauces as $sauce): ?>
                    <option value="<?= htmlspecialchars($sauce['name']) ?>" data-id ="<?= htmlspecialchars($sauce['id']) ?>" data-price="<?= htmlspecialchars($sauce['price']) ?>">
                        <?= htmlspecialchars($sauce['name']) ?>
                    </option>
                <?php endforeach ?>
            </select>
        </div>

        <div class="navbar card-text pt-2">
            <div class="h5"><span class="cart-price"><?= $product['price'] ?></span><sup class="pl-1">руб</sup></div>

            <div class="stepper stepper--style-3 js-spinner">
                <input class="stepper_quantity stepper__input" type="number" min="0" max="100" step="1" value="1">
                <div class="stepper__controls">
                    <button class="btn-subtract" type="button" spinner-button="down"><span class="span">-</span></button>
                    <button class="btn-add" type="button" spinner-button="up"><span class="span">+</span></button>
                </div>
            </div>

        </div>

        <a class="button-add btn navbar btn-pink btn-block text-uppercase" href="menu.php" data-id="<?= $product['id'] ?>"
           type="button">В корзину
            <span><img src="img/basket.png" width="23" height="21" alt="basket"></span>
        </a>

    </div>

</li>
