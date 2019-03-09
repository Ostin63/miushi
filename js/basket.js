$(function (){
    $('.del-product').on('click', function (evt) {

        var idProduct = $(this).attr('data-id');
        var idProd = {
            id: idProduct
        }
        $.ajax({
            type: "POST",
            url: "services/remove-product-to-basket.php",
            data: JSON.stringify(idProd)
        });
        return true;
    });
});