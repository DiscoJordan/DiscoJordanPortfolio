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




























/*document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        let formData = new FormData(form);
        formData.append('image', formImage.files[0]);


        if(error === 0){
             form.classList.add('_sending');

           /* let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData
            });
            if(response.ok){
                let result = await response.json();
                alert(result.massage);
                formPreview.innerHTML = '';
                form.reset();
            } else{
                alert('Error');

        }else{
            alert('Заполните обязательные поля');
        }

    }

    function formValidate(form){
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++){
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_email')) {
                if(emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            }
            else if(input.getAttribute("type") === "checkbox" && input.checked === false){
                formAddError(input);
                error++;
            }
            else{
                if(input.value === ''){
                    formAddError(input);
                    error++;
                }
            }

        }
        return error;
    }

    function formAddError(input){
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input){
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
    function emailTest(input){
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
    const formImage = document.getElementById('formImage');
    const formPreview = document.getElementById('formPreview');

    formImage.addEventListener('change', ()=>{
        uploadFile(formImage.files[0]);
    });

    function uploadFile(file){
        if(!['image/jpeg','image/png'].includes(file.type)){
            alert('Разрешены только изображения.');
            formImage.value ='';
            return;
        }
        if(file.size > 2*1024*1024){
            alert('Файл должен быть менее 2 МБ.');
            return;
        }


        var reader = new FileReader();
        reader.onload = function (e) {
            formPreview.innerHTML = `<img src="${e.target.result}" alt="Photo">`;
        };
        reader.onerror = function(e){
            alert('Error');
        };
        reader.readAsDataURL(file);
    }


});}*/