$(document).ready(function(){
    let ww=$(window).width();
    
        
        $(window).scroll(function () {
            
            let height = $(document).scrollTop();
            console.log(height);
        
            if(height>100 && height<1500){
                $(".section2_img1").css({
                    animation:"img1_in 1s ease-out forwards"
                })
            }else{
                $(".section2_img1").css({
                    animation:"img1_out 1s ease-out forwards"
                })
            }
            if(height>800 && height<2600){
                    $(".section2_img2").css({
                        animation: "img2_in 1s ease-out forwards"
                    })
            }else{
                $(".section2_img2").css({
                    animation:"img2_out 1s ease-out forwards"
                })
            }
            if(height>1950 && height<3500){
                        $(".section3_img").css({
                            animation:"img3_in 1s ease-out forwards"
                        })
            }else{
                $(".section3_img").css({
                    animation:"img3_out 1s ease-out forwards"
                })
            }
            if(height>2800){
                $(".section4_img").css({
                    animation: "img4_in 1s ease-out forwards"
                })
            }else{
                $(".section4_img").css({
                    animation: "img4_out 1s ease-out forwards"
                })
            }
            if(height>1200 && height<2170){
                $(".section3_text").css({
                    animation:"font1_in 1s ease-out forwards"
                })
            }else{
                $(".section3_text").css({
                    animation:"font1_out 1s ease-out forwards"
                })
            }
            if(height>2250 && height<3200){
                $(".section4_text").css({
                    animation:"font2_in 1s ease-out forwards"
                })
            }else{
                $(".section4_text").css({
                    animation:"font2_out 1s ease-out forwards"
                })
            }
            if(height>3300){
                $(".section5_text").css({
                    animation:"font3_in 1s ease-out forwards"
                })
            }else{
                $(".section5_text").css({
                    animation:"font3_out 1s ease-out forwards"
                })
            }
    
        });
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
    
    
    



})