// 页面滚动超过 50px 导航条变色
$(function () {
  $(document).scroll(function() {
    var scroH = $(document).scrollTop();  //滚动高度
    if(scroH > 50) {
      $('.header').addClass('light-color');
    } else {
      $('.header').removeClass('light-color');
    }
  });
});

// 导航条下划线跟随效果
$(function () {
  var menuActive = $('.header .menu a.active')
  var menuActiveWdith = menuActive.innerWidth()
  var menuActiveOffsetLeft = menuActive.get(0) ? menuActive.get(0).offsetLeft : 0
  $('.bottomLine').width(menuActiveWdith)
  $('.bottomLine').css({
      'left': menuActiveOffsetLeft + 'px'
  })
  $(".menu").hover(function () { }, function () {
      $(".bottomLine").css("width", parseFloat($(".header .menu a.active").eq(0).innerWidth()) + "px");
      $(".bottomLine").css("left", parseFloat($(".header .menu a.active").eq(0)[0].offsetLeft) + "px");
  })
  $(".header .menu a").hover(function () {
      $(".bottomLine").css("width", parseFloat($(this).innerWidth()) + "px");
      $(".bottomLine").css("left", parseFloat($(this)[0].offsetLeft) + "px");
  });
})