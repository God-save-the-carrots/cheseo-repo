window.onload = function (){
  $(document).ready(function () {
    //slide1
    var left_bt = $("#left_bt");
    var right_bt = $("#right_bt");
    var count = 0;
    var move = -960;
    var num = document.getElementsByClassName('num');

    $("#left_bt").css("display","none");

    $(left_bt).click(function () {
      if (count > 0) {
        count--;
        slidemove();
      }else if (count < 0) {
        count = 0;
      }
    });

    $(right_bt).click(function () {
      if (count < 8) {
        count++;
        slidemove();
      }else if (count > 8) {
        count = 8;
      }
    });

    $(num[0]).css({'color':"black"});
    $(num[0]).css({'border-bottom':"3px solid black"});

    function slidemove() {
      if (count == 0) {
        all_change();
        $(".slideimgs").stop().animate({left: move*count});
        $(num[count]).css({'color':"black"});
        $(num[count]).css({'border-bottom':"3px solid black"});
        $("#left_bt").css("display","none");
        $("#right_bt").css("display","block");
      }else if (count == 1) {
        all_change();
        $(".slideimgs").stop().animate({left: move*count});
        $(num[count]).css({'color':"black"});
        $(num[count]).css({'border-bottom':"3px solid black"});
        $("#left_bt").css("display","block");
      }else if (count == 2) {
        all_change();
        $(".slideimgs").stop().animate({left: move*count});
        $(num[count]).css({'color':"black"});
        $(num[count]).css({'border-bottom':"3px solid black"});
      }else if (count == 3) {
        all_change();
        $(".slideimgs").stop().animate({left: move*count});
        $(num[count]).css({'color':"black"});
        $(num[count]).css({'border-bottom':"3px solid black"});
      }else if (count == 4) {
        all_change();
        $(".slideimgs").stop().animate({left: move*count});
        $(num[count]).css({'color':"black"});
        $(num[count]).css({'border-bottom':"3px solid black"});
      }else if (count == 5) {
        all_change();
        $(".slideimgs").stop().animate({left: move*count});
        $(num[count]).css({'color':"black"});
        $(num[count]).css({'border-bottom':"3px solid black"});
      }else if (count == 6) {
        all_change();
        $(".slideimgs").stop().animate({left: move*count});
        $(num[count]).css({'color':"black"});
        $(num[count]).css({'border-bottom':"3px solid black"});
      }else if (count == 7) {
        all_change();
        $(".slideimgs").stop().animate({left: move*count});
        $(num[count]).css({'color':"black"});
        $(num[count]).css({'border-bottom':"3px solid black"});
        $("#right_bt").css("display","block");
      }else if (count == 8) {
        all_change();
        $(".slideimgs").stop().animate({left: move*count});
        $(num[count]).css({'color':"black"});
        $(num[count]).css({'border-bottom':"3px solid black"});
        $("#right_bt").css("display","none");
        $("#left_bt").css("display","block");
      }
    };

    function all_change() {
      $(num[0]).css({'color':"#cccccc"});
      $(num[0]).css({'border-bottom':"0px solid black"});
      $(num[1]).css({'color':"#cccccc"});
      $(num[1]).css({'border-bottom':"0px solid black"});
      $(num[2]).css({'color':"#cccccc"});
      $(num[2]).css({'border-bottom':"0px solid black"});
      $(num[3]).css({'color':"#cccccc"});
      $(num[3]).css({'border-bottom':"0px solid black"});
      $(num[4]).css({'color':"#cccccc"});
      $(num[4]).css({'border-bottom':"0px solid black"});
      $(num[5]).css({'color':"#cccccc"});
      $(num[5]).css({'border-bottom':"0px solid black"});
      $(num[6]).css({'color':"#cccccc"});
      $(num[6]).css({'border-bottom':"0px solid black"});
      $(num[7]).css({'color':"#cccccc"});
      $(num[7]).css({'border-bottom':"0px solid black"});
      $(num[8]).css({'color':"#cccccc"});
      $(num[8]).css({'border-bottom':"0px solid black"});
    }

    $(num[0]).click(function () {
      count = 0;
      slidemove();
    });
    $(num[1]).click(function () {
      count = 1;
      slidemove();
    });
    $(num[2]).click(function () {
      count = 2;
      slidemove();
    });
    $(num[3]).click(function () {
      count = 3;
      slidemove();
    });
    $(num[4]).click(function () {
      count = 4;
      slidemove();
    });
    $(num[5]).click(function () {
      count = 5;
      slidemove();
    });
    $(num[6]).click(function () {
      count = 6;
      slidemove();
    });
    $(num[7]).click(function () {
      count = 7;
      slidemove();
    });
    $(num[8]).click(function () {
      count = 8;
      slidemove();
    });

    //밑에 슬라이드
    var move2 = -960;
    var count2 = 0;

    $("#left_bt2").css("display", "none");

    $("#right_bt2").click(function () {
      if (count2 < 2) {
        count2++;
        $(".container").stop().animate({left: move2*count2});
        shownone();
      }else if (count2 > 2) {
        count2 = 2;
        shownone();
      }
    });
    $("#left_bt2").click(function () {
      if (count2 > 0) {
        count2--;
        $(".container").stop().animate({left: move2*count2});
        shownone();
      }else if (count2 < 0) {
        count2 = 0;
        shownone();
      }
    });

    function shownone() {
      if (count2 == 0) {
        $("#left_bt2").css("display", "none");
      }else if (count2 == 2) {
        $("#right_bt2").css("display", "none");
      }else {
        $("#left_bt2").css("display", "block");
        $("#right_bt2").css("display", "block");
      }
    };

    //header
    $(window).on("scroll", function () {
      var scroll = $(document).scrollTop();
      console.log(scroll);
      if (scroll < 400) {
        $("#header").css("position", "relative");
        $("#header").css("backgroundColor", "");
        $("#header").css("border", "none");
        $(".fake_header").css("display", "none");
        // $("#header").slideUp(1000);
        // console.log("대기중이야");
      }else {
        $("#header").css("position", "fixed");
        $(".fake_header").css("display", "block");
        $("#header").css("backgroundColor", "#FFFFFFE6");
        $("#header").css("borderBottom", "1px solid #c9c9c9");
        $("#header").css("backgroundColor", "rgba(255, 255, 255, 0.9)")
        // console.log("일하고 있어");
      };
    });

    //top
    $(window).on("scroll", function () {
      scroll = $(document).scrollTop();
      console.log(scroll);
      if (scroll > 1600 && scroll < 3500) {
        console.log("올라와");
        $(".fixed_top").css({position: "fixed"});
        $(".fixed_top").stop().animate({top: 510}, 500);
      }else if (scroll < 1600) {
        console.log("내려가");
        $(".fixed_top").css({position: "fixed"});
        $(".fixed_top").stop().animate({top: 600}, 500);
      }else if (scroll >= 3556) {
        console.log("멈춰!");
        $(".fixed_top").css({position: 'absolute', bottom: '0'});
      }
    });
    // if (scroll < 1600) {
      //   $(".fixed_top").animate({bottom: -40}, 1000);
      // }else if (scroll > 1600 && scroll < 3568) {
        //   console.log("올라와라");
        //   $(".fixed_top").animate({top: 510}, 1000);
        // }else if (scroll > 3568) {
          //   $(".fixed_top").css("position", "absolute");
          //   // $(".fixed_top").css({top: 510});
          // }
          // fixedTop();
          // setInterval(fixedTop, 100);

    $(".fixed_top").click(function () {
      // console.log("위로 간드아");
      var position = $("#body_wrap").offset();
      $("html, body").stop().animate({scrollTop: position.top}, 0);
    });

  });
};

// window.onload = function () {
//   // 화살표 버튼 슬라이드
//   // var lbt = document.getElementById('left_bt');
//   // var rbt = document.getElementById('right_bt')
//   // var imgs = document.getElementById('imgs');
//   //
//   // var img_count = 1;
//   //
//   // lbt.addEventListener('click', function () {
//   //   if (img_count > 1) {
//   //     img_count--;
//   //     imgimg();
//   //   }else if (img_count < 1){
//   //     img_count = 1;
//   //   }
//   // });
//   //
//   // rbt.addEventListener('click', function () {
//   //   if (img_count < 4) {
//   //     img_count++;
//   //     imgimg();
//   //   }else if (img_count >= 4){
//   //     img_count = 4;
//   //   }
//   // });
//   //
//   // function imgimg() {
//   //   if (img_count == 1){
//   //     imgs.src = "imgs/slide_before.png"
//   //   }else if (img_count == 2){
//   //     imgs.src = "slides/slide1.jpg"
//   //   }else if (img_count == 3){
//   //     imgs.src = "slides/slide2.jpg"
//   //   }else if (img_count == 4){
//   //     imgs.src = "slides/slide3.jpg"
//   //     img_count = -1;
//   //   }
//   //   img_count ++;
//   // };
//   //
//   // var imgauto = setInterval(imgimg, 2000);
//   // var numauto = setInterval(num_change, 2000);
//   //
//   // var num = document.getElementsByClassName('num');
//   //
//   // function num_change() {
//   //   if (img_count == 2) {
//   //     num[0].style.color = "black";
//   //     num[1].style.color = "#cccccc";
//   //     num[2].style.color = "#cccccc";
//   //     num[3].style.color = "#cccccc";
//   //   }else if (img_count == 3) {
//   //     num[0].style.color = "#cccccc";
//   //     num[1].style.color = "black";
//   //     num[2].style.color = "#cccccc";
//   //     num[3].style.color = "#cccccc";
//   //   }else if (img_count == 4) {
//   //     num[0].style.color = "#cccccc";
//   //     num[1].style.color = "#cccccc";
//   //     num[2].style.color = "black";
//   //     num[3].style.color = "#cccccc";
//   //   }else if (img_count == 5) {
//   //     num[0].style.color = "#cccccc";
//   //     num[1].style.color = "#cccccc";
//   //     num[2].style.color = "#cccccc";
//   //     num[3].style.color = "black";
//   //   }
//   // };
// };
