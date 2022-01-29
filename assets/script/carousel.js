// $('.owl-carousel').owlCarousel({
//     items:3,
//     loop:true,
//     margin:24,
//     autoplay:true,
//     autoplayTimeout:1500,
//     autoplayHoverPause:true,
//     merge:false,
//     responsive:{
//         0:{
//             items: 1,
//             mergeFit:true,
//             margin: 0
//         },
//         1000:{
            
//             mergeFit:false
//         }
//     }
// });

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 3,
            nav: false
        },
        1000: {
            items: 3,
            nav: false,
            dots:false,
            loop: true
        }
    }
})