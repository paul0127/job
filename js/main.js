
// goTop
$(function(){
    $('#goTop').on('click', function(){
        $('html, body').animate({
            scrollTop:0
        }, 600);
    });
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('#goTop').fadeIn('fast');
        } else {
            $('#goTop').stop().fadeOut('fast');
        }
    });
});

//siteMap showToggle
$(function(){
   $('.site_map_btn button').on('click', function(e){
        $('.cstm_cntr').toggleClass('active');
    })
    $('.site_map_btn button').on('click', function() {
        $(".site_map_btn").toggleClass("active");
    })
});