// 함수 이외 조작들
(($) => {
  // 기본 크기설정, 리사이즈/스크롤
  const sizeSetting = {
    init() {
      this.content();
    },
    content() {
      asideSize();
      asideQuick();
      // 포트폴리오 사진 기본높이 설정
      // let pfImgWidth = $("#section4 img").width();
      // $("#section4 img").height(`${pfImgWidth * (40 / 100)}px`);

      // 크기 변화 시
      $(window).resize(function () {
        asideSize();
        asideQuick();
      });
      // 스크롤 변화 시
      $(window).scroll(function () {
        asideSize();
        asideQuick();
      });

      // 사이드바 관련 크기설정
      function asideSize() {
        let winWidth = $(window).width() + 5; // 윈도우 너비(스크롤 포함)
        let mainWidth = $("main").width() + 16; // 메인 왼쪽크기(모바일 제외)
        let winScTop = $(window).scrollTop(); // 현재 스크롤위치
        let mainTop = $("main").offset().top; // 메인의 탑위치
        let footerTop = $("footer").offset().top; // 푸터의 탑위치
        let pcHeight = $("aside .pc").height(); // pc사이드바의 높이(변화함)

        let sizeLevel = null; // 사이즈 레벨
        let footerTouch = winScTop >= footerTop - pcHeight;
        // => 메뉴바가 footer에 닿았는지
        let mainTopTouch = winScTop >= mainTop;
        // => 스크롤이 메인탑을 넘어갔는지

        if ($("main").css("width") === "1200px") {
          sizeLevel = 3; // 1200px 이상
        } else if ($(".pc").css("display") === "block") {
          sizeLevel = 2; // 태블릿, PC
        } else {
          sizeLevel = 1; // 모바일
        }

        if (mainTopTouch) {
          $("aside .mobile").add("aside .pc").css({
            position: "fixed",
          });
        } else {
          $("aside .mobile").add("aside .pc").css({
            position: "absolute",
            //   left: `auto`,
          });
        }

        switch (sizeLevel) {
          case 1: // 모바일
            $(".mainLeft").css({ width: "100%" }); // 100%로 채움
            break;
          case 2: // 태블릿, PC
            $(".mainLeft").width(mainWidth - 316); // 크기변화에 따라 바뀜
            $("aside .mobile").add("aside .pc").css({
              left: `auto`,
            });
            if (footerTouch) {
              $("aside .pc").css({
                bottom: `${winScTop - (footerTop - pcHeight) + 40}px`,
              });
            } else {
              $("aside .pc").css({ bottom: 0 });
            }
            break;
          case 3: // 1200px 이상
            $(".mainLeft").width(882); // 882고정
            if (footerTouch) {
              $("aside .pc").css({
                left: `${winWidth / 2 + 300}px`,
                bottom: `${winScTop - (footerTop - pcHeight) + 40}px`,
              });
            } else {
              $("aside .pc").css({ bottom: 0 });
              if (mainTopTouch) {
                $("aside .pc").css({
                  left: `${winWidth / 2 + 300}px`,
                });
              } else {
                $("aside .pc").css({
                  left: `auto`,
                });
              }
            }
            break;
        }
      }
      // 사이드 점멸
      function asideQuick() {
        let winScTop = $(window).scrollTop() + 100; // 현재 스크롤위치
        const menuTop1 = $("#section1").offset().top;
        const menuTop2 = $("#section2").offset().top;
        const menuTop3 = $("#section3").offset().top;
        const menuTop4 = $("#section4").offset().top;
        const menuTop5 = $("#section5").offset().top;
        $(".mobile .menu").removeClass("on");
        $(".pc .quickMenu li a").removeClass("on");
        let num = 0;
        if (menuTop1 <= winScTop && winScTop < menuTop2) {
          num = 0;
        } else if (menuTop2 <= winScTop && winScTop < menuTop3) {
          num = 1;
        } else if (menuTop3 <= winScTop && winScTop < menuTop4) {
          num = 2;
        } else if (menuTop4 <= winScTop && winScTop < menuTop5) {
          num = 3;
        } else if (menuTop5 <= winScTop) {
          num = 4;
        }
        $(`.mobile .menu${num + 1}`).addClass("on");
        $(".pc .quickMenu li a").eq(num).addClass("on");
      }
    },
  };
  sizeSetting.init();

  // 메인페이지 글자 만들기
  const mainText = {
    init() {
      this.content();
    },
    content() {
      const textList = ["Story Development", "FE Developer", "My Portfolio"];

      let start = true;
      let textI = 0;
      textWrite();
      // 쓰기 지우기가 번갈아가면서 작동

      function textWrite() {
        if (textI > 2) textI = 0;
        let text = textList[textI];
        let strI = 0;
        let t = "";
        let writeItvI = setInterval(() => {
          t = t + text[strI];
          if (strI < text.length) {
            $(".blinkText").text(t);
          } else {
            clearInterval(writeItvI);
            // 텍스트 지우기
            setTimeout(textDelete, 2000);
          }
          strI++;
        }, 150);
        textI++;
      }
      function textDelete() {
        let deleteItvI = setInterval(() => {
          let text = $(".blinkText").text();
          let textLength = text.length;
          let t = "";
          if (!textLength) {
            clearInterval(deleteItvI);
            // 텍스트 쓰기
            setTimeout(textWrite, 1000);
          } else {
            t = text.substring(0, textLength - 1);
            $(".blinkText").text(t);
          }
        }, 30);
      }
    },
  };
  mainText.init();

  // 메뉴바관련 동작들
  const menuBar = {
    init() {
      this.content();
    },
    content() {
      $(".mobile .menuBar>div>a").hover(function () {
        $(this).toggleClass("ho");
      });
      $(".pc .quickMenu li a").hover(function () {
        $(this).toggleClass("ho");
      });
    },
  };
  menuBar.init();
})(jQuery);
