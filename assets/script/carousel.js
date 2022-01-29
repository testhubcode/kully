$('.owl-carousel').owlCarousel({
    items:3,
    loop:true,
    margin:24,
    // autoplay:true,
    // autoplayTimeout:1500,
    // autoplayHoverPause:true,
    merge:false,
    responsive:{
        575:{
            items: 1,
            mergeFit:true,
            margin: 5
        },
        1000:{
            
            mergeFit:false
        }
    }
});