$(document).ready(function(){
    let ww=$(window).width();
    let wh=$(window).height();
    function loding(){
        $(".loding_text").animate({
            width: "350px"
        },2300)
    }
    loding();
    $(".loding_back").fadeOut(4000,function(){
        $(".main_section").fadeIn(4000);
    });
   
    $(".main_section").css({
        width:ww,
        height:wh
    });
    $(".main_logo").css({
        left:ww
    })
    $(".main_logo").animate({
        left:700
    },2000);
   $(".main_bottom_text").css({
        width:ww
        })
    $(".main_bottom_move_box").css({
        width:(ww*4),
            left:ww
        })
       // move_text();
       $(".main_bottom_move_box").animate({
            left:0
        },20000,'linear')
        
    setInterval(function(){
       // move_text()
       $(".main_bottom_move_box").animate({
            left:-ww
        },20000,'linear',function(){
            $(".main_bottom_text").eq(0).appendTo(".main_bottom_move_box");
            $(".main_bottom_move_box").css({
                left:0
            })
        })
    },10000)

});//end