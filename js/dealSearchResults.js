$(document).on("click", ".viewDetails", function(){
    var name=$(this).attr('data-itemName');

    $('#itemName').text(name);
});

$(document).on("click", ".btn-delete-deal", function(){
    var id=$(this).attr('data-itemId');

    $('#itemId').text(id);
});