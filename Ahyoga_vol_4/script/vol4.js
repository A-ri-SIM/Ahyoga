$(document).ready(function(){
    
    $(".fly_box").click(function(){
        let re=$(this).css("top")
        // alert(re)
        let ind=$(this).index()
        if(re=="-400px"){
            $(this).animate({
                top:"50%",
                left:"50%"
            },300)
            $(this).css({
                transform:`rotateZ(`+0+`deg)`
            })
            $("img",this).attr("src",`./img/vol_4_${ind-1}a.jpg`)
                $(`.bookmark${ind-1}`).slideUp()
            
        }else{
            $("img",this).attr("src",`./img/vol_4_${ind-1}b.png`)
            $(this).animate({
            top:-400,
            left:1500
            },200)
            $(this).css({
                transform:`rotateZ(`+-90+`deg)`
            })
            setTimeout(function(){
                $(`.bookmark${ind-1}`).slideDown()
            },1300)
            
        }
    })
//fixed
let wh=$(window).height();
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

    // 호버
    $(".fly_box_re").hover(function(){
        $(".fly_box_hover",this).slideDown()
    },function(){
        $(".fly_box_hover",this).slideUp()
    })


})