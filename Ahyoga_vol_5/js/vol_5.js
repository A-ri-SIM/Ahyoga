$(document).ready(function () {
  let ww = $(window).width();
  let wh = $(window).height();

  $('.text_move_box').css({
    width: ww * 4,
    height: wh,
  });
  $('.text_top_move_box,.text_bottom_move_box').css({
    width: ww * 4,
    height: wh / 2,
  });
  $('.move_box').css({
    width: ww * 4,
    height: wh,
  });
  $('.title_box_wrap').css({
    width: ww,
    height: '150px',
  });
  $('.left_fixed_text').css({
    width: wh * 2,
    height: '200px',
  });
  $('.left_fixed_move_box').css({
    width: wh * 8,
    height: '200px',
    top: 0,
  });
  left_text_move();
  back_text_move();
  setInterval(function () {
    left_text_move();
  }, 15000);
  setInterval(function () {
    back_text_move();
  }, 25000);
  function left_text_move() {
    $('.left_fixed_move_box').animate(
      {
        top: wh * 4,
      },
      20000,
      'linear',
      function () {
        $('.left_fixed_text').eq(0).appendTo('.left_fixed_move_box');
        $('.left_fixed_move_box').css({
          top: wh * 2,
        });
      }
    );
  }
  function back_text_move() {
    $('.text_move_box').animate(
      {
        left: -ww,
      },
      25000,
      'linear',
      function () {
        $('.top_move_box').eq(0).appendTo('.text_top_move_box');
        $('.bottom_move_box').eq(0).appendTo('.text_bottom_move_box');
        $('.text_move_box').css({
          left: 0,
        });
      }
    );
  }
  // 변수지정
  let box_index = 0;
  let before_time = new Date().getTime();
  let now_time = new Date().getTime();
  let direction = '';
  function move_box_scroll_down() {
    let ww = $(window).width();
    // let move=$(".move_box").left();
    if (box_index < 11) {
      box_index += 1;
      direction = 'down';
    }
    $('.move_box').animate(
      {
        left: -510 * box_index,
      },
      500
    );
    before_time = now_time;
  }
  function move_box_scroll_up() {
    let ww = $(window).width();
    // let move=$(".move_box").left();
    if (box_index > 0) {
      box_index -= 1;
      direction = 'up';
    }
    $('.move_box').animate(
      {
        left: -510 * box_index,
      },
      500
    );
    before_time = now_time;
  }
  $(window).on('mousewheel', function (event) {
    event.preventDefault();
    $('.move.box').clearQueue();
    now_time = new Date().getTime();
    if (0 > event.originalEvent.wheelDeltaY) {
      if (direction == 'down') {
        if (before_time + 500 < now_time) {
          //alert(box_index);
          if (box_index >= 0) {
            move_box_scroll_down();
          } else {
            move_box_scroll_up();
          }
        }
      } else {
        if (box_index >= 0) {
          // alert(box_index);
          move_box_scroll_down();
        } else {
          move_box_scroll_up();
        }
      }
    } else {
      if (direction == 'up') {
        if (before_time + 500 < now_time) {
          // alert(box_index);
          if (box_index <= 11) {
            move_box_scroll_up();
          } else {
            move_box_scroll_down();
          }
        }
      } else {
        if (box_index < 12) {
          //alert(box_index);
          move_box_scroll_up();
        } else {
          move_box_scroll_down();
        }
      }
    }
  }); //event end
}); //end
