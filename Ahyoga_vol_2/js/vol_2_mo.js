$(document).ready(function(){
    let ww=$(window).width();
    let wh=$(window).height();
    resizing();
    function resizing(){
        ww=$(window).width();
        wh=$(window).height();

        $(".vol_2_mo").css({
            width:ww,height:wh
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
    let i=0
    $(".img_box").click(function(){
        if(i==0){
            $(this).css({
                transform: 'scale(3.25)',
                zIndex: 999,
                transitionDuration: '0.5s'
            })
            i++;
        }else{
            $(this).css({
                transform: 'scale(1)',
                zIndex: 9,
                transitionDuration: '0.5s'
            })
            i--;
        }
        
    });
    let a=0
    $(".img_big").click(function(){
        if(a==0){
            $(this).css({
                transform: 'scale(1.52)',
                zIndex: 999,
                transitionDuration: '0.5s'
            })
            a++;
        }else{
            $(this).css({
                transform: 'scale(1)',
                zIndex: 9,
                transitionDuration: '0.5s'
            })
            a--;
        }
        
    });
    var swiper = new Swiper(".mySwiper", {
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
    });
});//end