$(document).ready(function() {
    $("#dealPanelTrigger").click(function () {
        $('#makeDealPanel').slideToggle('slow');
        $(".panel-indicator i").toggleClass("fa-angle-down fa-angle-up");
    });

    $("#searchBar").focus(function(){
        $("#searchFilters").slideDown('slow');
    });

    $("#searchBar").blur(function(){
        $("#searchFilters").slideUp('slow');
    });

    $("#dealCategoryTrigger").click(function () {
        $('#dealsByCategoryPanel').slideToggle('slow');
        $(this).toggleClass('deals-by-category-active');
        $(".indicator i").toggleClass("fa-plus-circle fa-minus-circle");
    });
});

$(document).on("click", ".viewDetails", function(){
    var name=$(this).attr('data-itemName');

    $('#itemName').text(name);
});

$(document).on("click", ".btn-delete-deal", function(){
    var id=$(this).attr('data-itemId');

    $('#itemId').text(id);
});

$(document).on("click", "#openComboPanel", function(){
    $('#comboPanel').slideToggle('slow');
    $( "#openComboPanel" ).toggleClass( "btn-add-combo-border" )

});
