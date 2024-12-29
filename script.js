$(document).ready(function(){
    $('.menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){
        $('.menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
    });
}); 

let cart = document.querySelectorAll(".cart");
cart.forEach(item => {
    item.addEventListener('click', () => {
        console.log("Btn clicked");
        item.innerHTML = "Added <i class='fa-solid fa-cart-shopping'></i>";
    });
});
