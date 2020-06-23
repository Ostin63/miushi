$(function () {
    $('.button-add').on('click', function (evt) {

        var cardBody = $(evt.currentTarget).parents('.card-body');

        var nameProduct = cardBody.find('.card-title').text();
        var quantityProduct = parseInt(cardBody.find('.stepper_quantity').val());
        var priceProduct = parseInt(cardBody.find('.cart-price').text());
        var nameSauce = cardBody.find('select option:selected').val();
        var priceSauce = parseInt(cardBody.find('select option:selected').attr('data-price'));
        var sauceQuantity = parseInt(cardBody.find('.sauce__quantity').val());

        var cart = {
            productName: nameProduct,
            productQuantity: quantityProduct,
            productPrice: priceProduct,
            sauceName: nameSauce,
            saucePrice: priceSauce,
            sauceQuantity: sauceQuantity
        }
        $.ajax({
            type: "POST",
            url: "services/add-product-to-basket.php", //название севиса
            data: JSON.stringify(cart),      //добавить преобразованную строку JSON в документ.
        });

    });
});