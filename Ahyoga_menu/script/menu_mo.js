$(document).ready(function(){
    let ww=$(window).width();
    let wh=$(window).height();
    
    resizing();

    function resizing(){
        ww=$(window).width();
        wh=$(window).height();
        $(".menu_page").css({
            width:ww,
            height:wh
        })
    }

    $(window).resize(function(){
        resizing();
    });
    $(".out_box").scroll(function(){
        let i=$(this).scrollTop()/10;
        $("p").text(i);
        if(0<=i && i<13){
            $(".img_05").css({transform:'scale(1.8)',marginBottom: '30%'})
            $(".img_04").css({transform:'scale(1.5)',marginBottom: '30%'})
            $(".img_03").css({transform:'scale(1)'})
            $(".vol_title").not(".vol_5").fadeOut();
            $(".vol_5").fadeIn()

        }else if(12<i && i<36){
            $(".img_05").css({transform:'scale(1.5)',marginBottom: '30%'})
            $(".img_04").css({transform:'scale(1.8)',marginBottom: '30%'})
            $(".img_03").css({transform:'scale(1.5)'})
            $(".vol_title").not(".vol_4").fadeOut();
            $(".vol_4").fadeIn()
        }else if(36<i && i<56){
            $(".img_05").css({transform:'scale(1)',marginBottom: '30%'})
            $(".img_04").css({transform:'scale(1.5)',marginBottom: '30%'})
            $(".img_03").css({transform:'scale(1.8)',marginBottom: '30%'})
            $(".img_02").css({transform:'scale(1.5)'})
            $(".vol_title").not(".vol_3").fadeOut();
            $(".vol_3").fadeIn();
        }else if(55<i && i<73){
            $(".img_04").css({transform:'scale(1)',marginBottom: '30%'})
            $(".img_03").css({transform:'scale(1.5)',marginBottom: '30%'})
            $(".img_02").css({transform:'scale(1.8)',marginBottom: '30%'})
            $(".img_01").css({transform:'scale(1.5)'})
            $(".vol_title").not(".vol_2").fadeOut();
            $(".vol_2").fadeIn();
        }else if(i>72){
            $(".img_03").css({transform:'scale(1)',marginBottom: '30%'})
            $(".img_02").css({transform:'scale(1.5)',marginBottom: '30%'})
            $(".img_01").css({transform:'scale(1.8)'})
            $(".vol_title").not(".vol_1").fadeOut();
            $(".vol_1").fadeIn();
        }
    });
});//end