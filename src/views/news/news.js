$(function(){
  $('.news-tab>span').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active');
  })
});