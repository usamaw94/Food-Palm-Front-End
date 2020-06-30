/**
 * Created by Haier on 6/17/2017.
 */
$(document).ready(function() {
    $("#productPanelTrigger").click(function () {
        $('#addProductPanel').slideToggle('slow');
        $(".panel-indicator i").toggleClass("fa-plus fa-minus");
    });

    $("#searchBar").focus(function(){
        $("#searchFilters").slideDown('slow');
    });

    $("#searchBar").blur(function(){
        $("#searchFilters").slideUp('slow');
    });
});

$(document).on("click", ".viewDetails", function(){
    var name=$(this).attr('data-itemName');

    $('#itemName').text(name);
});

$(document).on("click", ".btn-delete-item", function(){
    var id=$(this).attr('data-itemId');

    $('#itemId').text(id);
});
