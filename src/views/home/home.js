// 点击图片 切换 zindex
$(function () {
  $(".tab-content-left .img-wrap img").click(function () {
    $(this).addClass('active');
    $(this).siblings('img').removeClass('active');
    $('.tab-img-indicators-num').removeClass('active');
    const className = '.tab-img-indicators-' + $(this).index();
    $(className).addClass('active');
  });
});

// 最新动态 点击tab
$(function() {
  $('ul.news-tab li').click(function() {
    console.log(1);
    $(this).addClass('active');
    $(this).siblings('li').removeClass('active');
  });
});