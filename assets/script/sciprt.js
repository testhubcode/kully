const burgerİcon = document.querySelector('.burger-icon');

const burgerImg = document.querySelector('.burger-img');

const burgerIcon = document.querySelector('.burger-icon');

const burgerMenu = document.querySelector('.burger-menu');

const burgerContent = document.querySelector('.burger-content');

const burgerTop = document.querySelector('.burger-top');

const burgerBottom = document.querySelector('.burger-bottom');

const header = document.querySelector('.header');

let value = true;

burgerİcon.addEventListener('click', function () {

    if ((value == true)) {

        // Burger Menu Classlist Add Burger Menu Active Class
        burgerMenu.classList.add('burger-menu-act');

        // Burger Content Classlist Add Burger Content Active Class and Classlist Remove Burger Content Class
        burgerContent.classList.add('burger-content-act');
        burgerContent.classList.remove('burger-content');

        // Burger Top Classlist Add Burger Top Active Class and Classlist Renove Burger Top Norm
        burgerTop.classList.remove('burger-top-norm');
        burgerTop.classList.add('burger-top-act');

        // Burger Bottom Classlist Add Burger Bottom Active Class and Classlist Remove Burger Bottom Norm
        burgerBottom.classList.remove('burger-bottom-norm');
        burgerBottom.classList.add('burger-bottom-act');

        // Burger Image Src and Style Change  , Classlist Add Burger Image Active Class
        burgerImg.src = "assets/img/close.png"
        burgerImg.classList.add('burger-img-act');

        // Burger Icon Classlist Add Burger Icon Active Class 
        burgerIcon.classList.add('burger-icon-act');

        // Header Classlist Add Header Active Class
        header.classList.add('header-act');

        value = false;

    } else {

        // Burger Menu Classlist Remove Burger Menu Active Class
        burgerMenu.classList.remove('burger-menu-act');

        // Burger Content Classlist Add Burger Content Active Class and Classlist Remove Burger Content Class
        document.querySelector('.burger-content-act').classList.add('burger-content');
        document.querySelector('.burger-content-act').classList.remove('burger-content-act');

        // Burger Top Classlist Add Burger Top Active Class and Classlist Renov
        burgerTop.classList.remove('burger-top-act');
        burgerTop.classList.add('burger-top-norm');

        // Burger Bottom Classlist Add Burger Bottom Active Class and Classlist Remove Burger Bottom Norm
        burgerBottom.classList.remove('burger-bottom-act');
        burgerBottom.classList.add('burger-bottom-norm');

        // Burger Image Src Change and Classlist Remove Burger Image Active Class
        burgerImg.src = "assets/img/Sort.svg"
        burgerImg.classList.remove('burger-img-act');

        // Burger Icon Claslist Remove Burger Icon Active Class
        burgerIcon.classList.remove('burger-icon-act');

        
        // Header Classlist Remove Header Active Class
        header.classList.remove('header-act');

        value = true;


    }

})