$(document).ready(function(){
    
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

    let z_num=1300;
    let z_num2=900;
    let z_num3=1000;
    let z_num4=800;
    let z_num5=900;

$(window).scroll(function () {
    let height = $(document).scrollTop();
//     console.log(height);
    $("h1").text(box_index)
  box_index=height/100;

//     if(height>=3800){
//         $(".section_5").css({
//             position:"fixed",
//             top:0,
//             left:230
//         })

        

//         if(z_num>=0){
//             z_num-=100;
//             $(".section5_fixed").css({
//                 transform:"translateZ("+z_num+"px)"
//             })
        })
        
        







        
//     }else{
//         $(".section_5").css({
//             position:"relative",
//             left:0
//         })
//     }
// })

    var box_index = 0;
    var before_time = new Date().getTime();
    var now_time = new Date().getTime();
    var direction = '';

    function wrap_scroll_down() {
        if (box_index < 81) {
            box_index += 1;
            direction = 'down';
        }
        $("h1").text(box_index)
        if(box_index>=36){
            $(".section_5").css({
                position:"fixed",
                top:0,
                left:230
            })
            
        }
        if(box_index>=40){
            z_num-=50;
            if(z_num<=0){
                z_num=0;
            }
            
            $(".section5_fixed").css({
                transform:"translateZ("+z_num+"px)"
            })
        }
        if(box_index>=47){
            z_num3-=60;
            if(z_num3<=0){
                z_num3=0;
            }
            
            $(".section5_img8_box,.section5_img3_box").css({
                transform:"translateZ("+z_num3+"px)"
            })
        }
        if(box_index>=52){
            z_num2-=40;
            if(z_num2<=0){
                z_num2=0;
            }
           
            $(".section5_img2_box,.section5_img6_box").css({
                transform:"translateZ("+z_num2+"px)"
            })
        }
        if(box_index>=59){
            z_num5-=50;
            if(z_num5<=0){
                z_num5=0;
            }
            
            $(".section5_img4_box,.section5_img7_box").css({
                transform:"translateZ("+z_num5+"px)"
            })
        }
        if(box_index>=62){
            z_num4-=100;
            if(z_num4<=0){
                z_num4=0;
            }
            
            $(".section5_img5_box").css({
                transform:"translateZ("+z_num4+"px)"
            })
        }
    }
    
    function wrap_scroll_up() {
        if(box_index > 0){
            box_index -=1;
            direction = `up`;
        }
        $("h1").text(box_index)
        if(box_index<36){
            $(".section_5").css({
                position:"relative",
                left:0
            })
        }
        if(box_index<=58){
            z_num+=50;
            if(z_num>=1200){
                z_num=1300;
            }
            $(".section5_fixed").css({
                transform:"translateZ("+z_num+"px)"
            })
        }
        if(box_index<=65){
            z_num3+=60;
            if(z_num3>=1000){
                z_num3=1000;
            }
            
            $(".section5_img8_box,.section5_img3_box").css({
                transform:"translateZ("+z_num3+"px)"
            })
        }
        if(box_index<=75){
            z_num2+=40;
            if(z_num2>=900){
                z_num2=900;
            }
            
            $(".section5_img2_box,.section5_img6_box").css({
                transform:"translateZ("+z_num2+"px)"
            })
        }
        if(box_index<=77){
            z_num5+=50;
            if(z_num5>=900){
                z_num5=900;
            }
            
            $(".section5_img4_box,.section5_img7_box").css({
                transform:"translateZ("+z_num5+"px)"
            })
        }
        if(box_index<=70){
            z_num4+=100;
            if(z_num4>800){
                z_num4=800;
            }
            
            $(".section5_img5_box").css({
                transform:"translateZ("+z_num4+"px)"
            })
        }
    }

    $(window).on('mousewheel', function (event,delta) {
        // event.preventDefault();
        $('.move_wrap').clearQueue();
        now_time = new Date().getTime();
        if (0 > delta) {
            if (direction == 'down') {
                if (before_time + 10 < now_time) {
                    if (box_index >= 0) {
                        wrap_scroll_down();
                    } else {
                        wrap_scroll_up();
                    }
                }
            } else {
                if (box_index >= 0) {
                    wrap_scroll_down();
                } else {
                    wrap_scroll_up();
                }
            }
        }else{
            if (direction == 'up') {
                if (before_time + 10 < now_time) {
                    if (box_index <= 60) {
                        wrap_scroll_up();
                    } else {
                        wrap_scroll_down();
                    }
                }
            } else {
                if (box_index < 61) {
                    wrap_scroll_up();
                } else {
                    wrap_scroll_down();
                }
            }
        }
    })
        setInterval(function(){
                $(".move_text_box").eq(0).appendTo("move_text_go")
                $(".move_text_go").css({
                    left:0
                })
        },8000)

    
   


})//end