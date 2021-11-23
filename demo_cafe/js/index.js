//=====================================================
//スクロールアニメーション
//=====================================================
$(document).ready(function() {
    $(window).scroll(function() {
        var logo_main_top = $('.logo_main').offset().top;
        var logo_main_height = $('.logo_main').height()-35;
        if (window.scrollY > logo_main_top + logo_main_height) {
            /*$('#class1').css('opacity', 0);*/
            $('.logo').animate({opacity: 1}, 100);
            $('.logo_main').animate({opacity: 0}, 100);
        }else{
            $('.logo').animate({opacity: 0}, 100);
            $('.logo_main').animate({opacity: 1}, 100);
        }
        
    });
});

//=====================================================
//メイン画像のスライドアニメーション
//=====================================================
$(function(){
    var page=0;
    var lastPage =parseInt($("#main_slide img").length-1);
    
    //すべての要素をセンタリング
    $("#main_slide img").css("margin","0 auto");

    //一旦すべて非表示
    $("#main_slide img").css("display","none");

    //初期ページ表示
    $("#main_slide img").eq(page).css("display","block");

    //ページ切換用、自作関数
    function changePage(){
        $("#main_slide img").fadeOut(1000);
        $("#main_slide img").eq(page).fadeIn(1000);
    };

    //～秒間隔でイメージ切換の発火設定
    var Timer;
    function startTimer(){
        Timer =setInterval(function(){
            if(page === lastPage){
                page = 0;
                changePage();
            }else{
                page ++;
                changePage();
            };
        },2500);
    }

    //タイマースタート
    startTimer();

    //オプションを足す場合はここへ記載

});

//=====================================================
//ナビゲーションhover
//=====================================================
$(function(){
    $(".navi .nav_top").hover(
        function() {
            $(".navi .nav_top a").animate({"color":"gray"},100);
        },
        function() {
            $(".navi .nav_top a").animate({"color":"black"},100);
        });
    
    $(".navi .nav_about").hover(
        function() {
            $(".navi .nav_about a").animate({"color":"gray"},100);
        },
        function() {
            $(".navi .nav_about a").animate({"color":"black"},100);
        });
    
    $(".navi .nav_menu").hover(
        function() {
            $(".navi .nav_menu a").animate({"color":"gray"},100);
        },
        function() {
            $(".navi .nav_menu a").animate({"color":"black"},100);
        });
    
    $(".navi .nav_toys").hover(
        function() {
            $(".navi .nav_toys a").animate({"color":"gray"},100);
        },
        function() {
            $(".navi .nav_toys a").animate({"color":"black"},100);
        });
    
    $(".navi .nav_access").hover(
        function() {
            $(".navi .nav_access a").animate({"color":"gray"},100);
        },
        function() {
            $(".navi .nav_access a").animate({"color":"black"},100);
        });
});

/*ロードイベント==================================================================================================================*/
$(function() {
    var h = $(window).height();

    $('.background').css('display','none');
    $('#loader-bg, #loader').height(h).css('display','block');
});

$(window).on('load', function (){
    $('#loader-bg').delay(900).fadeOut(800);
    $('#loader').delay(600).fadeOut(300);
    $('.background').css('display', 'block');
});

$(function(){
    setTimeout('stopload()',10000);
});

function stopload(){
    $('.background').css('display','block');
    $('#loader-bg').delay(900).fadeOut(800);
    $('#loader').delay(600).fadeOut(300);
}