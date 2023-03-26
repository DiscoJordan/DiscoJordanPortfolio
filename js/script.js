"use strict"
$(document).ready(function (){
    $('.header_burger').click(function(event) {
        $('.header_burger, .nav').toggleClass('active');
    });
    $('.spoiler__title').click(function(event) {
        $('.spoiler__title').toggleClass('active').next().slideToggle(100);
        $(".single_photos").css("display","flex");
    });
});
const  animItems = document.querySelectorAll('._anim-items');

if(animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(){
        for (let index = 0; index <animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                if(!animItem.classList.contains('_anim-no-hide')){
                    animItem.classList.remove('_active');
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return  { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    animOnScroll();
}



$(function(){

    $('.scroll_down').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#down').offset().top }, 1000);
        e.preventDefault();
        behavior: 'smooth';
    });

});
