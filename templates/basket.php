<div>
    <div class="container pb-5">
        <div class="row pt-5 justify-content-center">
            <img class="mt-3 mr-4 d-none d-xl-block" src="img/wave-left.png" width="109" height="40" alt="wave">
            <img class="mt-3 mr-4 d-none d-lg-block d-xl-none" src="img/wave-left750.png" width="101" height="37" alt="wave">
            <img class="mt-1 mr-4 d-none d-sm-block d-lg-none" src="img/wave-left320.png" width="74" height="27" alt="wave">
            <h2 class="text-lemon">Корзина</h2>
            <img class="mt-1 ml-4 d-none d-sm-block d-lg-none" src="img/wave-right320.png" width="74" height="27" alt="wave">
            <img class="mt-3 ml-4 d-none d-lg-block d-xl-none" src="img/wave-right750.png" width="101" height="37" alt="wave">
            <img class="mt-3 ml-4 d-none d-xl-block" src="img/wave-right.png" width="109" height="40" alt="wave">
        </div>
        <div class="row justify-content-center">
            <div class="m-3">
                <?php if (empty($goods)): ?>
                    <p class="basket_info h5 m-0 pt-1 pb-1 text-center">Ваша корзина сейчас пуста</p>
                <?php endif; ?>
            </div>
        </div>

        <form class="basket__form" method="post" action="" enctype="multipart/form-data">
            <div class="basket-product mt-3">
                <?php foreach ($basket as $product): ?>
                    <div class="basket-id ">
                        <div class="row navbar">

                            <input class="basket__name col-4 border-0 bg-light" type="text" name="form_deliv[product_name]" value="<?= htmlspecialchars($product['product_name'])?>">
                            <div class="col-1 text-danger d-none d-lg-block">x</div>
                            <input class="basket__quantity col-1 border-0 bg-light" type="text" name="form_deliv[product_quantity]" value="<?= htmlspecialchars($product['product_quantity'])?>">
                            <div class="col-1 d-none d-lg-block"><span>шт</span><span class="pl-3 text-danger">x</span></div>
                            <input class="basket__price col-1 border-0 bg-light pl-0 pr-0" type="text" name="form_deliv[product_price]" value="<?= htmlspecialchars($product['product_price'])?>">
                            <div class="col-1">руб.</div>
                        </div>
                        <div class="row navbar mt-1 pb-3 border-bottom">
                            <input class="sauce__name col-4 border-0 bg-light text-primary" type="text" name="form_deliv[sauce_name]" value="<?= htmlspecialchars($product['sauce_name'])?>">
                            <div class="col-1 text-danger d-none d-lg-block">X</div>
                            <input class="sauce__quantity col-1 border-0 bg-light" type="text" name="form_deliv[sauce_quantity]" value="<?= htmlspecialchars($product['sauce_quantity'])?>">
                            <div class="col-1 d-none d-lg-block"><span>шт</span><span class="pl-3 text-danger">x</span></div>
                            <input class="sauce__price col-1 border-0 bg-light pl-0 pr-0" type="text" name="form_deliv[sauce_price]" value="<?= htmlspecialchars($product['sauce_price'])?>">
                            <div class="col-1">руб.</div>
                        </div>
                        <div class="text-right mt-2">
                            <a class="del-product col-1 btn btn-sm btn-outline-primary" href="basket.php" data-id="<?= $product['id']?>">
                                <span class="d-none d-lg-block">удалить</span><span class="d-md-block d-lg-none">x</span>
                            </a>
                        </div>
                    </div>
                <?php endforeach ?>
            </div>
            <?php if (isset($goods)): ?>
                <div class="row justify-content-end navbar mt-3">
                    <div class="col-2">Итого:</div>
                    <input class="col-2 border-0 bg-light" type="text" name="form_deliv[price]" value="<?=htmlspecialchars($price)?>">
                    <div class="col-1 pr-4">руб.</div>
                </div>
            <?php endif; ?>

            <div class="pb-3 <?= empty($goods) ? "d-none" : "" ?>">
                <div class="form-row">
                    <div class="col-md-12 col-lg-6">
                        <label for="name">Ваше имя</label>

                        <input type="text" class="form-control" id="name" placeholder="Имя" name="form_deliv[name]" value="<?= htmlspecialchars($form['name']) ?>">
                    </div>
                    <div class="col-md-12 col-lg-6">
                        <label for="phone">Ваш телефон (обязательно)</label>

                        <input type="phone" class="form-control <?=isset($errors['phone']) ? "is-invalid" : "" ?>" id="phone" placeholder="+7 900 000 00 00" name="form_deliv[phone]" value="<?= htmlspecialchars($form['phone'])?>">
                        <p class="form__message text-danger">
                            <?= $errors['phone'] ?>
                        </p>
                    </div>
                </div>

                <div class="form-row mt-3">
                    <div class="col-md-12 col-lg-6">
                        <label for="address">Ваш адрес (обязательно)</label>

                        <input type="text" class="form-control <?= isset($errors['address']) ? "is-invalid" : "" ?>"
                               id="address" placeholder="улица Мира дом 21 квартира 102"
                               name="form_deliv[address]" value="<?=htmlspecialchars($form['address'])?>">
                        <p class="form__message  text-danger">
                            <?= $errors['address'] ?>
                        </p>
                    </div>
                    <div class="col-md-12 col-lg-6">
                        <label for="option">Вид доставки</label>

                        <select class="form-control" id="option" name="form_deliv[option]">
                            <option>Самвывоз (0 руб.)</option>
                            <option>Доставка по Волгограду (200 руб.)</option>
                        </select>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <input class="btn btn-outline-danger mt-3" type="submit" value="Оформить заказ">
                </div>

            </div>
        </form>
    </div>
</div>
