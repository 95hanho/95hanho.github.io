// 이벤트동작 함수
// 자기소개서 펼치기
function introDetail(e) {
  e.preventDefault();
  $(e.target).text(e.target.text === "펼치기 >>>" ? "<<< 접기" : "펼치기 >>>");
  $(".intro-detail").stop().slideToggle();
}
// 프로젝트 정렬방식 바꾸기
function projectSort(e) {
  e.preventDefault();
  $(e.target).text(
    e.target.text === "<<<나열식으로 보기"
      ? "슬라이드로 보기>>>"
      : "<<<나열식으로 보기"
  );
}
// 스킬칸에 마우스호버 시
function skillHover(e) {
  $(e.target).toggleClass("on");
}
// 스크롤 가장 위쪽으로
function scrollTopGo(e) {
  e.preventDefault();
  $("html, body").stop().animate(
    {
      scrollTop: 0,
    },
    500
  );
}
// 퀵메뉴 바로가기
function quickGo(e, menuNum) {
  e.preventDefault();
  let menuTop = $(`#section` + menuNum).offset().top;
  if (menuNum === 1) menuTop += 1;
  $("html, body").stop().animate(
    {
      scrollTop: menuTop,
    },
    500
  );
}
// 퀵메뉴 열기 닫기
function quickOpenClose(e, state) {
  e.preventDefault();
  if (state) {
    $(".menuBar").animate({ right: 0 }, 300, () => {
      $(".mobile button").hide();
    });
  } else {
    $(".menuBar").animate({ right: "-40px" }, 300, () => {
      $(".mobile button").show();
    });
  }
}
// 포트폴리오 자세히보기
function portfolioDetail(e) {
  e.preventDefault();
  $(e.target)
    .text(e.target.text === "더보기 >>" ? "<< 접기" : "더보기 >>")
    .parents(".portfolio")
    .toggleClass("on");
}
// 포트폴리오 이미지 기본없애기
function portfolioImgClick(e) {
  e.preventDefault();
}
