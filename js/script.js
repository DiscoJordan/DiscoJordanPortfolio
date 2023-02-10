$(document).ready(function (){
    $('.header_burger').click(function(event) {
        $('.header_burger, .nav').toggleClass('active');
    });
    $('.spoiler__title').click(function(event) {
        $('.spoiler__title').toggleClass('active').next().slideToggle(100);
        $(".single_photos").css("display","flex");
    });
});