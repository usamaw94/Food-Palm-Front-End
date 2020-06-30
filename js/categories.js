/**
 * Created by Haier on 6/17/2017.
 */
$(document).ready(function() {
    $("#categoryPanelTrigger").click(function () {
        $('#addCategoryPanel').slideToggle('slow');
        $(".panel-indicator i").toggleClass("fa-angle-down fa-angle-up");
    });
});

$(document).on("click", ".editCat", function(){
    var id=$(this).attr('data-catID');
    var name=$(this).attr('data-catName');
    var main=$(this).attr('data-mainCat');

    $('#categoryID').val(id);
    $('#categoryName').val(name);
    $('#mainCategory').val(main);
});

$(document).on("click", ".delCat", function(){

    var id=$(this).attr('data-catID');
    var name=$(this).attr('data-catName');

    $('#catID').val(id);
    $('#catName').text(name);
});