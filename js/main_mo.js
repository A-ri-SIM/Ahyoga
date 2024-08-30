$(document).ready(function(){
    let ww=$(window).width();
    let wh=$(window).height();
            
            resizing();

            function resizing(){
                ww=$(window).width();
                wh=$(window).height();
                $(".main_page").css({
                    width:ww,
                    height:wh
                })
            }

            $(window).resize(function(){
                resizing();
            });
})