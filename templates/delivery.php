<div>
    <div class="container">
        <div class="row pt-5 justify-content-center align-items-center">
            <img class="mt-3 mr-4 d-none d-xl-block" src="img/wave-left.png" width="109" height="40" alt="wave">
            <img class="mt-3 mr-4 d-none d-lg-block d-xl-none" src="img/wave-left750.png" width="101" height="37" alt="wave">
            <img class="mt-1 mr-4 d-lg-none" src="img/wave-left320.png" width="74" height="27" alt="wave">
            <div class="text-center">
                <h6 class="text-lemon">Оформление</h6>
                <h6 class="text-lemon">заказа</h6>
            </div>
            <img class="mt-1 ml-4 d-lg-none" src="img/wave-right320.png" width="74" height="27" alt="wave">
            <img class="mt-3 ml-4 d-none d-lg-block d-xl-none" src="img/wave-right750.png" width="101" height="37" alt="wave">
            <img class="mt-3 ml-4 d-none d-xl-block" src="img/wave-right.png" width="109" height="40" alt="wave">
        </div>
        <div class="mt-5 mb-3">

            <h5>Введите ваши контактные данные</h5>
        </div>
        <form class="mb-5"  action="" method="post">
            <div class="form-row">
                <div class="col">
                    <label for="inputName">Ваше имя</label>
                    <?php $classname = isset($errors['name']) ? "form__input--error" : "";
                    $value = isset($form['name']) ? htmlspecialchars($form['name']) : "" ?>
                    <input type="text" class="form-control" id="inputName" placeholder="Имя" name="form_deliv[name]" value="<?= $value ?>">
                </div>
                <div class="col">
                    <label for="inputPhone">Ваш телефон (обязательно)</label>
                    <?php $classname = isset($errors['phone']) ? "form__input--error" : "";
                    $value = isset($form['phone']) ? htmlspecialchars($form['phone']) : "" ?>
                    <input type="phone" class="form-control is-invalid" id="inputPhone" placeholder="+7 900 000 00 00" name="form_deliv[phone]" value="<?= $value ?>">
                    <?php if (isset($errors['phone'])): ?>
                        <p class="form__message text-white">
                            <?= $errors['phone'] ?>
                        </p>
                    <?php endif; ?>
                </div>
            </div>

            <div class="form-row mt-3">
                <div class="col">
                    <label for="inputAddress">Ваш адрес (обязательно)</label>
                    <?php $classname = isset($errors['address']) ? "form__input--error" : "";
                    $value = isset($form['address']) ? htmlspecialchars($form['address']) : "" ?>
                    <input type="text" class="form-control is-invalid" id="inputAddress" placeholder="улица Мира дом 21 квартира 102" name="form_deliv[address]" value="<?= $value ?>">
                    <?php if (isset($errors['address'])): ?>
                        <p class="form__message text-white">
                            <?= $errors['address'] ?>
                        </p>
                    <?php endif; ?>
                </div>
                <div class="col">
                    <label for="exampleFormControlSelect1">Вид доставки (обязательно)</label>
                    <?php $classname = isset($errors['option']) ? "form__input--error" : "";
                    $value = isset($form['option']) ? htmlspecialchars($form['option']) : "" ?>
                    <select class="form-control is-invalid" id="exampleFormControlSelect1" name="form_deliv[option]">
                        <option>Самвывоз (0 руб.)</option>
                        <option>Доставка по Волгограду (200 руб.)</option>
                    </select>
                </div>
            </div>
            <div class="form-group mt-3">
                <label for="textarea">Комментарий к заказу</label>
                <?php $classname = isset($errors['text]']) ? "form__input--error" : "";
                $value = isset($form['text]']) ? htmlspecialchars($form['text]']) : "" ?>
                <textarea class="form-control" id="textarea" name="form_deliv[text]"></textarea>
            </div>
            <input class="btn btn-outline-danger" type="submit" name="" value="Оформить заказ">
        </form>
    </div>
</div>