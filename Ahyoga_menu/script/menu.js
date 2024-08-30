$(document).ready(function () {
    
    //회전

    var box_index = 0;
    var before_time = new Date().getTime();
    var now_time = new Date().getTime();
    var direction = '';
    
    function wrap_scroll_down() {
        if (box_index < 33) {
            box_index += 1;
            direction = 'down';
        }
        let rotate= box_index * -3
        $(".move_wrap").css({
            transform: "rotateZ("+rotate+"deg)"
        })
        if(box_index==6){
            $(".menu_number").text("04")
            $(".menu_bottom_title").slideUp(500)
            $(".c_text1").slideDown(500)
        }else if(box_index==14){
            $(".menu_number").text("03")
            $(".menu_bottom_title").slideUp(500)
            $(".c_text2").slideDown(500)
        }else if(box_index==22){
            $(".menu_number").text("02")
            $(".menu_bottom_title").slideUp(500)
            $(".c_text3").slideDown(500)
        }else if(box_index==30){
            $(".menu_number").text("01")
            $(".menu_bottom_title").slideUp(500)
            $(".c_text4").slideDown(500)
        }
        before_time = now_time;
    }

    function wrap_scroll_up() {
        
        if (box_index > 0) {
            box_index -= 1;
            direction = 'up';
        }
        let rotate= box_index * -3
        $(".move_wrap").css({
            transform: "rotateZ("+rotate+"deg)"
        })
        if(box_index==10){
            $(".menu_number").text("04")
            $(".menu_bottom_title").slideUp(500)
            $(".c_text1").slideDown(500)
        }else if(box_index==18){
            $(".menu_number").text("03")
            $(".menu_bottom_title").slideUp(500)
            $(".c_text2").slideDown(500)
        }else if(box_index==26){
            $(".menu_number").text("02")
            $(".menu_bottom_title").slideUp(500)
            $(".c_text3").slideDown(500)
        }else if(box_index==2){
            $(".menu_number").text("05")
            $(".menu_bottom_title").slideUp(500)
            $(".c_text0").slideDown(500)
        }
    }
    $(window).on('mousewheel', function (event,delta) {
        // event.preventDefault();
        $('.move_wrap').clearQueue();
        now_time = new Date().getTime();
        if (0 > delta) {
            if (direction == 'down') {
                if (before_time + 30 < now_time) {
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
        } else {
            if (direction == 'up') {
                if (before_time + 30 < now_time) {
                    if (box_index <= 33) {
                        wrap_scroll_up();
                    } else {
                        wrap_scroll_down();
                    }
                }
            } else {
                if (box_index < 34) {
                    wrap_scroll_up();
                } else {
                    wrap_scroll_down();
                }
            }
        }
    })

    // 이미지 호버
    $(".box_in_box").hover(function(){
        $(".box_in_click",this).css({
            display:"block"
        })
        $("img",this).css({
            opacity:0.5
        })
    },function(){
        $(".box_in_click",this).css({
            display:"none"
        })
        $("img",this).css({
            opacity:0.8
        })
    })











});