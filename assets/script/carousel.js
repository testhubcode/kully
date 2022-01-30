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
    autoplay:true,
    autoplayTimeout:1500,
    dots:false,
    autoplayHoverPause:true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        576:{
            items:2,
            margin : 24,
            nav:true
        },
        992:{
            items:3,
            margin:24
        },
        1200: {
            items: 3,
            nav: false,
            dots:false,
            loop: true,
            margin : 24
        }
    }
})