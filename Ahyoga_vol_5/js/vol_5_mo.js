$(document).ready(function(){
    let ww=$(window).width();
    let wh=$(window).height();
    resizing();
    function resizing(){
        ww=$(window).width();
        wh=$(window).height();
        $(".vol_5_mo").css({
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
    });
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
    let bg_img=["url(./img/vol_5_1.jpg)","url(./img/vol_5_2.jpg)","url(./img/vol_5_3.jpg)","url(./img/vol_5_4.jpg)","url(./img/vol_5_5.jpg)","url(./img/vol_5_6.jpg)","url(./img/vol_5_7.jpg)","url(./img/vol_5_8.jpg)","url(./img/vol_5_9.jpg)","url(./img/vol_5_10.jpg)"]
    $(".swiper-slide .img_box").css({
        background:function(index){
            return bg_img[index]
        },
        backgroundSize:'100%',
        backgroundRepeat: 'no-repeat'
    })


    var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        color:"white"
    },
});
});//end