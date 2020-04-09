$("ul").on("click" ,"li" , function(){
   $(this).toggleClass("completed");


});

$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});


// 13 is enter
$("input[type='text']").keypress( function (event) {
    //we store .val() to var
     if (event.which === 13) {
        var toDoText = $(this).val();
        $(this).val("");
    
         $("ul").append("<li><span><i class='fas fa-trash'></i></span>" + toDoText + "</li>");
        
    }
   
});


//hide and show input

$(".fa-plus").on("click",function(){
    $("input").slideToggle();
});


 