$(document).ready(function(){
    let ww=$(window).width();
    let wh=$(window).height();
    resizing();
    function resizing(){
        ww=$(window).width();
        wh=$(window).height();

        $(".vol_1_mo").css({
            width:ww,height:wh*5
        });
        $(".move_text").css({
            width:ww
        });
        $(".bg_text_box").css({
            width:ww*3
        });
       
    }
    $(window).resize(function(){
        resizing();
    })
    bg_text_move();
    setInterval(function(){
        bg_text_move()
    },15000);
    function bg_text_move(){
        $(".bg_text_box").animate({
            left:-ww
        },15000,'linear',function(){
            $(".move_text").first().appendTo(".bg_text_box")
            $(".bg_text_box").css({
                left:0
            })
        });
    };
    AOS.init();
});//end
