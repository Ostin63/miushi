<section class="section-contact bg-dark">
    <div class="container pt-5 pb-5">
        <h6 class="text-white pt-4 mb-4">Есть вопросы?</h6>
        <h2 class="text-lemon text-white">Оставьте свои контакты</h2>
        <form class="d-flex justify-content-end form-cont" action="" enctype="multipart/form-data">
            <div class="form-row align-items-end">
                <div class="col-md-5 col-sm-6">
                    <label class="sr-only" for="name">Имя</label>
                    <input type="text" class="form-contact form-control bg-transparent mb-2" id="name"
                           placeholder="Имя" name="form-contact[name]" value="<?=htmlspecialchars($form['name'])?>">
                </div>
                <div class="col-md-5 col-sm-6">
                    <label class="sr-only" for="phone">Телефон</label>
                    <div class="input-group mb-2">

                        <input type="text" class="form-contact form-control bg-transparent" id="phone"
                               placeholder="Телефон" name="form-contact[phone]"  value="<?=htmlspecialchars($form['phone'])?>">
                    </div>
                </div>
                <div class="col-md-2 col-sm-12 pb-2">
                    <input type="submit" class="btn btn-warning mb-2" value="Отправить">
                </div>
            </div>
        </form>
        <p class="text-white-50 h6">Нажимая на кнопку «Отправить», вы даете согласие на обработку своих персональных
            данных.</p>
    </div>
</section>