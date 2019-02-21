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
<header class="main-header container">
    <nav class="main-header__nav">
        <ul class="navbar row justify-content-between pl-sm-2 pr-sm-2">
            <li class="nav-item align-items-center d-block d-xl-none">
                <button class="btn btn-link mr-5" data-toggle="modal" data-target="#exampleModal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px"
                         height="14px">
                        <path fill-rule="evenodd" fill="rgb(78, 200, 61)"
                              d="M19.000,8.000 L1.000,8.000 C0.448,8.000 0.000,7.552 0.000,7.000 C0.000,6.447 0.448,6.000 1.000,6.000 L19.000,6.000 C19.552,6.000 20.000,6.447 20.000,7.000 C20.000,7.552 19.552,8.000 19.000,8.000 ZM19.000,2.000 L1.000,2.000 C0.448,2.000 0.000,1.552 0.000,1.000 C0.000,0.447 0.448,-0.000 1.000,-0.000 L19.000,-0.000 C19.552,-0.000 20.000,0.447 20.000,1.000 C20.000,1.552 19.552,2.000 19.000,2.000 ZM1.000,12.000 L19.000,12.000 C19.552,12.000 20.000,12.447 20.000,13.000 C20.000,13.552 19.552,14.000 19.000,14.000 L1.000,14.000 C0.448,14.000 0.000,13.552 0.000,13.000 C0.000,12.447 0.448,12.000 1.000,12.000 Z"/>
                    </svg>
                </button>
            </li>
            <li class="nav-item align-items-center d-block d-md-none">
                <a class="ml-2" href="/">
                    <img src="img/Miushu-logo-320.png" alt="logo">
                </a>
            </li>
            <li class="nav-item align-items-center d-none d-md-block d-xl-none">
                <a class="ml-5" href="/"><img src="img/Miushu-logo-760.png" alt="logo">
                </a>
            </li>
            <li class="nav-item align-items-center d-none d-xl-block">
                <a href="/">
                    <img src="img/Miushu-logo.png" alt="logo">
                </a>
            </li>
            <li class="row nav-item align-items-center d-none d-xl-flex">
                <?= $flags ?>
            </li>
            <li class="row nav-item align-items-center d-none d-xl-flex">
                <?= $post ?>
            </li>
            <li class="nav-item d-none d-xl-block">
                <?= $phone ?>
            </li>
            <li class="nav-item d-none d-xl-block">
                <?= $back_call ?>
            </li>
            <li class="nav-item align-items-center d-flex d-xl-none pl-0">
                <a href="basket.php"><?= $img_cart ?></a>
            </li>
        </ul>

        <div class="main-header__nav--bottom nav-bottom d-none d-xl-block">
            <ul class="nav-bottom__list  nav navbar pl-0 pr-0 text-uppercase">

                <?= $bottom_menu ?>
                <?= $basket_cabinet ?>

            </ul>
        </div>
    </nav>
    <?= $top_modal ?>
</header>
<main>
    <div class=" bg-light">

        <?= $content ?>

    </div>
    <?= $stock_new ?>

    <?= $vantage ?>
    <?= $reviews ?>
    <?= $contact ?>
    <?= $company ?>

</main>

<footer class="bg-dark">
    <div class="container">
        <div class="row justify-content-between pt-5 pb-5">
            <div class="footer-menu col-xl-2 col-lg-3">
                <div class="nav navbar d-lg-none text-white">
                    <h6 class="">Меню</h6>
                    <button class="btn btn-link d-lg-none arrow-down">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="11px">
                            <path fill-rule="evenodd" fill="rgb(255, 255, 255)"
                                  d="M19.899,1.000 L10.707,10.192 L10.707,10.192 L10.000,10.899 L9.293,10.192 L9.293,10.192 L0.100,1.000 L0.808,0.293 L10.000,9.485 L19.192,0.293 L19.899,1.000 Z"/>
                        </svg>
                    </button>
                    <button class="btn btn-link d-none arrow-up">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="11px">
                            <path fill-rule="evenodd" fill="rgb(255, 255, 255)"
                                  d="M19.993,10.256 L19.279,10.988 L10.000,1.471 L0.721,10.988 L0.007,10.256 L9.286,0.739 L9.286,0.739 L10.000,0.007 L10.714,0.739 L10.714,0.739 L19.993,10.256 Z"/>
                        </svg>
                    </button>
                </div>
                <ul class="p-2 d-none d-lg-block text-footer bg-footer down-menu">
                    <li>Суши</li>
                    <li>Гунканы</li>
                    <li>Инари</li>
                    <li>Супы</li>
                    <li>Салаты</li>
                    <li>Горячие закуски</li>
                    <li>Десерты</li>
                    <li>Напитки</li>
                    <li>Дополнительно</li>
                </ul>
            </div>
            <div class="footer-menu col-xl-4 col-lg-6">
                <div class="nav navbar text-white">
                    <h6>Сеты</h6>
                    <button class="btn btn-link d-lg-none arrow-down">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="11px">
                            <path fill-rule="evenodd" fill="rgb(255, 255, 255)"
                                  d="M19.899,1.000 L10.707,10.192 L10.707,10.192 L10.000,10.899 L9.293,10.192 L9.293,10.192 L0.100,1.000 L0.808,0.293 L10.000,9.485 L19.192,0.293 L19.899,1.000 Z"/>
                        </svg>
                    </button>
                    <button class="btn btn-link d-lg-none d-none arrow-up">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="11px">
                            <path fill-rule="evenodd" fill="rgb(255, 255, 255)"
                                  d="M19.993,10.256 L19.279,10.988 L10.000,1.471 L0.721,10.988 L0.007,10.256 L9.286,0.739 L9.286,0.739 L10.000,0.007 L10.714,0.739 L10.714,0.739 L19.993,10.256 Z"/>
                        </svg>
                    </button>
                </div>
                <div class="p-2 row  d-none d-lg-flex bg-footer p-2 down-menu">
                    <ul class="pl-0 text-info">
                        <li>До 500руб.</li>
                        <li>До 1000 руб. (На двоих)</li>
                        <li>До 1500 руб. (На двоих-троих)</li>
                        <li>До 2000 руб. (На двоих-троих)</li>
                        <li>От 2000 руб.</li>
                        <li>очень большая компания</li>
                    </ul>
                    <ul class="text-info">
                        <li>С угрем</li>
                        <li>Горячие</li>
                        <li>Запеченые</li>
                        <li>Суши</li>
                    </ul>
                </div>
            </div>
            <div class="footer-menu col-xl-2 col-lg-2">
                <div class="nav navbar text-white">
                    <h6>Роллы</h6>
                    <button class="btn btn-link d-lg-none arrow-down">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="11px">
                            <path fill-rule="evenodd" fill="rgb(255, 255, 255)"
                                  d="M19.899,1.000 L10.707,10.192 L10.707,10.192 L10.000,10.899 L9.293,10.192 L9.293,10.192 L0.100,1.000 L0.808,0.293 L10.000,9.485 L19.192,0.293 L19.899,1.000 Z"/>
                        </svg>
                    </button>
                    <button class="btn btn-link d-none d-lg-none arrow-up">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="11px">
                            <path fill-rule="evenodd" fill="rgb(255, 255, 255)"
                                  d="M19.993,10.256 L19.279,10.988 L10.000,1.471 L0.721,10.988 L0.007,10.256 L9.286,0.739 L9.286,0.739 L10.000,0.007 L10.714,0.739 L10.714,0.739 L19.993,10.256 Z"/>
                        </svg>
                    </button>
                </div>
                <div class="p-2 d-none d-lg-block down-menu">
                    <ul class="p-0 text-info bg-footer">
                        <li>Традиционные/Классические</li>
                        <li>Простые</li>
                        <li>Теплые</li>
                        <li>Запеченые</li>
                        <li>Вегитарианские</li>
                    </ul>
                </div>

            </div>
            <div class="footer-menu col-xl-1 col-lg-2">
                <div class="nav navbar text-white">
                    <h6>Вок</h6>
                    <button class="btn btn-link d-lg-none arrow-down">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="11px">
                            <path fill-rule="evenodd" fill="rgb(255, 255, 255)"
                                  d="M19.899,1.000 L10.707,10.192 L10.707,10.192 L10.000,10.899 L9.293,10.192 L9.293,10.192 L0.100,1.000 L0.808,0.293 L10.000,9.485 L19.192,0.293 L19.899,1.000 Z"/>
                        </svg>
                    </button>
                    <button class="btn btn-link d-none d-lg-none arrow-up">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="11px">
                            <path fill-rule="evenodd" fill="rgb(255, 255, 255)"
                                  d="M19.993,10.256 L19.279,10.988 L10.000,1.471 L0.721,10.988 L0.007,10.256 L9.286,0.739 L9.286,0.739 L10.000,0.007 L10.714,0.739 L10.714,0.739 L19.993,10.256 Z"/>
                        </svg>
                    </button>
                </div>
                <div class="p-2 d-none d-lg-block down-menu">
                    <ul class="p-0 text-info bg-footer">
                        <li>Яичная</li>
                        <li>Удон</li>
                        <li>Гречневая</li>
                        <li>Стеклянная</li>
                        <li>Рис</li>
                    </ul>
                </div>
            </div>
            <div class="footer-menu col-xl-2 col-lg-2">
                <div class="nav navbar text-white">
                    <h6>Пицца</h6>
                    <button class="btn btn-link d-lg-none arrow-down">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="11px">
                            <path fill-rule="evenodd" fill="rgb(255, 255, 255)"
                                  d="M19.899,1.000 L10.707,10.192 L10.707,10.192 L10.000,10.899 L9.293,10.192 L9.293,10.192 L0.100,1.000 L0.808,0.293 L10.000,9.485 L19.192,0.293 L19.899,1.000 Z"/>
                        </svg>
                    </button>
                    <button class="btn btn-link border-0 d-none d-lg-none arrow-up">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="11px">
                            <path fill-rule="evenodd" fill="rgb(255, 255, 255)"
                                  d="M19.993,10.256 L19.279,10.988 L10.000,1.471 L0.721,10.988 L0.007,10.256 L9.286,0.739 L9.286,0.739 L10.000,0.007 L10.714,0.739 L10.714,0.739 L19.993,10.256 Z"/>
                        </svg>
                    </button>
                </div>
                <div class="p-2 d-none d-lg-block down-menu">
                    <ul class="p-0 text-info bg-footer">
                        <li>Мясная</li>
                        <li>Рыбная</li>
                        <li>Сырная</li>
                        <li>Вегитарианская</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="row text-info align-items-center justify-content-center justify-content-xl-between pb-5">
            <div class="text-center text-lg-left col-md-6 col-sm-12 col-lg-2">МИЮШИ © 2017</div>
            <a class="text-info text-center col-lg-8 col-sm-12" href="">Соглашение на обработку персональных данных</a>
            <div class="nav navbar justify-content-between col-6 col-md-3 col-lg-2">
                <a class="btn bg-secondary badge-pill" href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 20 20">
                        <path d="M18 0H2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-8 6a4 4 0 1 1-4 4 4 4 0 0 1 4-4zM2.5 18a.47.47 0 0 1-.5-.5V9h2.1a3.4 3.4 0 0 0-.1 1 6 6 0 1 0 12 0 3.4 3.4 0 0 0-.1-1H18v8.5a.47.47 0 0 1-.5.5zM18 4.5a.47.47 0 0 1-.5.5h-2a.47.47 0 0 1-.5-.5v-2a.47.47 0 0 1 .5-.5h2a.47.47 0 0 1 .5.5z"
                              fill="#8d969a">
                        </path>
                    </svg>
                </a>
                <a class="btn bg-secondary badge-pill" href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 26.14 14.91">
                        <path d="M26 13.47l-.09-.17a13.55 13.55 0 0 0-2.6-3q-.87-.83-1.1-1.12A1 1 0 0 1 22 8a10.27 10.27 0 0 1 1.22-1.78l.88-1.16q2.35-3.13 2-4L26 .94a.8.8 0 0 0-.4-.22 2.14 2.14 0 0 0-.87 0h-3.92a.51.51 0 0 0-.27 0h-.3a.6.6 0 0 0-.15.14.93.93 0 0 0-.14.24 22.22 22.22 0 0 1-1.46 3.06q-.5.84-.93 1.46a7 7 0 0 1-.71.91 4.94 4.94 0 0 1-.52.47q-.23.18-.35.15l-.23-.05a.9.9 0 0 1-.31-.33 1.49 1.49 0 0 1-.16-.53v-.55-.65-.57-1.12-1-.75a3.14 3.14 0 0 0 0-.62 2.12 2.12 0 0 0-.14-.44.73.73 0 0 0-.28-.33 1.57 1.57 0 0 0-.46-.18A9 9 0 0 0 12.57 0a8.93 8.93 0 0 0-3.25.33 1.83 1.83 0 0 0-.52.41q-.25.3-.07.33a1.67 1.67 0 0 1 1.16.59l.08.16a2.6 2.6 0 0 1 .19.63 6.32 6.32 0 0 1 .12 1 10.59 10.59 0 0 1 0 1.7q-.07.71-.13 1.1a2.21 2.21 0 0 1-.18.64 2.69 2.69 0 0 1-.16.3l-.07.07a1 1 0 0 1-.37.07.86.86 0 0 1-.46-.19 3.27 3.27 0 0 1-.56-.52 7 7 0 0 1-.66-.93q-.37-.6-.76-1.42l-.22-.39q-.2-.38-.56-1.11t-.62-1.43A.9.9 0 0 0 5.2.9h-.07a.93.93 0 0 0-.22-.16A1.44 1.44 0 0 0 4.6.65L.87.68A1 1 0 0 0 .1.94L0 1a.44.44 0 0 0 0 .22 1.08 1.08 0 0 0 .08.37Q.9 3.53 1.86 5.31t1.66 2.87Q4.23 9.27 5 10.24t1 1.24l.37.41.34.33a8.06 8.06 0 0 0 1 .78 16.34 16.34 0 0 0 1.4.9 7.6 7.6 0 0 0 1.79.72 6.19 6.19 0 0 0 2 .22h1.57a1.08 1.08 0 0 0 .72-.3l.05-.07a.9.9 0 0 0 .1-.25 1.38 1.38 0 0 0 0-.37 4.48 4.48 0 0 1 .09-1.05 2.77 2.77 0 0 1 .23-.71 1.74 1.74 0 0 1 .29-.4 1.19 1.19 0 0 1 .23-.2h.11a.86.86 0 0 1 .77.21 4.52 4.52 0 0 1 .83.79q.39.47.93 1.05a6.41 6.41 0 0 0 1 .87l.27.16a3.31 3.31 0 0 0 .71.3 1.53 1.53 0 0 0 .76.07l3.48-.05a1.58 1.58 0 0 0 .8-.17.68.68 0 0 0 .34-.37 1.06 1.06 0 0 0 0-.46 1.71 1.71 0 0 0-.1-.36z"
                              fill="#8d969a">
                        </path>
                    </svg>
                </a>
                <a class="btn bg-secondary badge-pill" href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 10.15 21.74">
                        <path d="M3.34 1.12A4.77 4.77 0 0 1 6.53 0h3.61v3.81H7.81a1.07 1.07 0 0 0-1.09.83v2.55h3.42c-.08 1.23-.24 2.45-.41 3.67h-3v10.87H2.21V10.86H0V7.21h2.19V3.66a3.83 3.83 0 0 1 1.15-2.54z"
                              fill="#8d969a">
                        </path>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</footer>


<script src="js/jQuery.js"></script>
<script src="js/ajax-popper-1.14.3.js"></script>
<script src="js/bootstrap.js"></script>
<script src="js/owl.carousel.js"></script>
<script src="js/stepper.min.js"></script>
<script src="js/main.js"></script>
</body>

</html>