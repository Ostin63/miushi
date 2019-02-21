<div class="container mt-5 modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
     aria-hidden="true">
    <div class="modal-body bg-white" style="width: 18rem;">
        <a class="d-flex flex-row-reverse p-3" href="/">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="17px"
                 height="17px">
                <path fill-rule="evenodd" fill="rgb(174, 174, 174)"
                      d="M16.278,15.571 L15.571,16.278 L8.500,9.207 L1.429,16.278 L0.722,15.571 L7.793,8.500 L0.722,1.429 L1.429,0.721 L8.500,7.792 L15.571,0.721 L16.278,1.429 L9.207,8.500 L16.278,15.571 Z"/>
            </svg>
        </a>

        <ul>
            <?= $bottom_menu ?>
            <li class="nav-item">
                <?= $phone ?>
            </li>
            <li class="pt-5 pb-5">
                <?= $back_call ?>
            </li>
            <li class="nav">
                <?= $flags ?>
            </li>
            <li class="nav">
                <?= $post ?>
            </li>
        </ul>
    </div>
</div>
