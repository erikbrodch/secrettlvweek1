$(document).on('click', 'a', function(event){
    event.preventDefault();

    $("#food").animate({
        scrollTop: $( $.food(this, 'href') ).offset().top
    }, 500);
}); 