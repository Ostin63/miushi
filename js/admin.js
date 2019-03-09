$(function () {
    $('.send').on('click', function (evt) {
        var table = $(evt.currentTarget).parents('.table_row');
        table.addClass(' table-info');
    });
    $('.delivered').on('click', function (evt) {
        var table = $(evt.currentTarget).parents('.table_row');
        table.removeClass(' table-info');
        table.addClass(' table-success');
    });
    $('.btn_dellete').on('click', function (evt) {
        var command = {
            name: 1
        }
        $.ajax({
            type: "POST",
            url: "services/del-table-admin.php",
            data: JSON.stringify(command)
        });
        return true;
    });
});