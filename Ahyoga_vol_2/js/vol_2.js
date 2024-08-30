$(document).ready(function(){
    let ww=$(window).width();
    let wh=$(window).height();
    
    $("section").css({
        width:ww,
        height:wh
    })
    $(".title_wrap").css({
        width:ww
    });
    let bg_img=["url(./img/bg_1.jpg)","url(./img/bg_2.jpg)","url(./img/bg_3.jpg)","url(./img/bg_4.jpg)","url(./img/bg_5.jpg)","url(./img/bg_6.jpg)","url(./img/bg_7.jpg)","url(./img/bg_8.jpg)","url(./img/bg_9.jpg)"]
    $(".img_box").css({
        background:function(index){
            return bg_img[index]
        },
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    });

    click_num=1;
    $(".img_box").on({
        mouseenter:function(){
            $(".img_in",this).fadeIn(500)
        },
        mouseleave:function(){
            $(".img_in",this).fadeOut(500)
        },
        click:function(){
            let a=$(this).index();
            if(click_num==1){
                $(this).css({
                    transform:'scale(3)'
                })
                $(".img_box").not(this).fadeOut();
                $(this).off("mouseleave");
                click_num--;
                }else{
                    $(this).css({
                        transform:'scale(1)'
                    })
                    $(".img_box").fadeIn();
                    $(this).on("mouseleave",function(){
                        $(".img_in",this).fadeOut()
                    });
                    click_num++;
                }
            }
    });
    $(".left_fixed_text").css({
        width:wh*2,
        height:"200px"
    });
    $(".left_fixed_move_box").css({
        width:wh*8,
        height:"200px",
        top:0
    });
    left_text_move();
    setInterval(function(){
            left_text_move();               
        },15000);
    function left_text_move(){
            $(".left_fixed_move_box").animate({
                top:wh*4
            },20000,'linear',function(){
                $(".left_fixed_text").eq(0).appendTo(".left_fixed_move_box")
                $(".left_fixed_move_box").css({
                    top:wh*2
                })
            });
        }
});//end