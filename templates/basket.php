<div>
    <div class="container pb-5">
        <div class="row pt-5 justify-content-center">
            <img class="mt-3 mr-4 d-none d-xl-block" src="img/wave-left.png" width="109" height="40" alt="wave">
            <img class="mt-3 mr-4 d-none d-lg-block d-xl-none" src="img/wave-left750.png" width="101" height="37" alt="wave">
            <img class="mt-1 mr-4 d-lg-none" src="img/wave-left320.png" width="74" height="27" alt="wave">
            <h2 class="text-lemon">Корзина</h2>
            <img class="mt-1 ml-4 d-lg-none" src="img/wave-right320.png" width="74" height="27" alt="wave">
            <img class="mt-3 ml-4 d-none d-lg-block d-xl-none" src="img/wave-right750.png" width="101" height="37" alt="wave">
            <img class="mt-3 ml-4 d-none d-xl-block" src="img/wave-right.png" width="109" height="40" alt="wave">
        </div>
        <div class="row">
            <div class="m-3">
                <p class="h5 m-0 pt-1 pb-1">Ваша корзина сейчас пуста</p>
            </div>
        </div>

        <form class="basket__form h5" method="post" action="/delivery.php">
            <div class="basket-product row navbar" id="">
                <input class="basket__name col-4 border-0 bg-light" type="text" value="Унаги диру">
                <div class="col-1 text-danger">X</div>
                <input class="basket__quantity col-1 border-0 bg-light" type="text" value="1">
                <div class="col-1"><span>шт</span><span> x</span></div>
                <input class="basket__price col-1 border-0 bg-light" type="text" value="80">
                <div class="col-1">руб</div>
            </div>
            <div class="row justify-content-center mt-5">
                <input class="btn btn-outline-danger" type="submit" value="Оформить заказ">
                <a class="btn btn-outline-danger offset-1" href="menu.php">Вернуться к покупкам</a>
            </div>
        </form>
    </div>
</div>