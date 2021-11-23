/*メニューボタンホバー==================================================================================================================*/
$(function(){    
    /*プロフィール*/
    $("#profileMovie")[0].pause();
    $(".profileBtn").hover(function(){
        $('#profileMovie').stop().animate({'opacity':'1'});
        /*最初から再生&ループSTR*/
        $('#profileMovie').get(0).currentTime = 0;
        $('#profileMovie').get(0).play();
        $('#profileMovie').get(0).loop = true;
        /*最初から再生&ループEND*/
        $(".menuTitle").text("profile");
        $('.menuTitle').stop().animate({'opacity':'1'});
    }, function(){
        $('#profileMovie').stop().animate({'opacity':'0'});
        $("#profileMovie")[0].pause();
        $('.menuTitle').stop().animate({'opacity':'0'});
    });
    
    /*デモサイト*/
    $("#demoMovie")[0].pause();
    $(".demoBtn").hover(function(){
        $('#demoMovie').stop().animate({'opacity':'1'});
        /*最初から再生&ループSTR*/
        $('#demoMovie').get(0).currentTime = 0;
        $('#demoMovie').get(0).play();
        $('#demoMovie').get(0).loop = true;
        /*最初から再生&ループEND*/
        $(".menuTitle").text("demo site");
        $('.menuTitle').stop().animate({'opacity':'1'});
    }, function(){
        $('#demoMovie').stop().animate({'opacity':'0'});
        $("#demoMovie")[0].pause();
        $('.menuTitle').stop().animate({'opacity':'0'});
    });
});

/*プロフィール表示切り替え==================================================================================================================*/
$(function(){
    var clickFlg = false;
    
    $('.profileBtn').on('click', function() {
        $('.dummyBody').css('z-index', '1');
        $('.dummyBody').stop().animate({'opacity':'0.8'});
        $('.profileTitle').stop().animate({'opacity':'1'});
        $('.profileBack').css('z-index', '1');
        $('.profileBack').stop().animate({'opacity':'0.8'});
        $('#profileMovie').stop().animate({'opacity':'0'});
        $('.btnTrigger').css('z-index', '2');
        $('.btnTrigger').stop().animate({'opacity':'1'});
        $('.menu').stop().animate({'opacity':'0'});
    }); 
    
    /*閉じるボタンクリック=====*/
    $('.btnTrigger').on('click', function() {
        $('.dummyBody').css('z-index', '-1');
        $('.dummyBody').stop().animate({'opacity':'0'});
        $('.profileTitle').stop().animate({'opacity':'0'});
        $('.profileBack').css('z-index', '-1');
        $('.profileBack').stop().animate({'opacity':'0'});
        $('.btnTrigger').css('z-index', '2');
        $('.btnTrigger').stop().animate({'opacity':'0'});
        $('.menu').stop().animate({'opacity':'1'});
    }); 
    
});


/*デモサイト一覧表示切り替え==================================================================================================================*/
$(function(){
    var clickFlg = false;

    $('.demoBtn').on('click', function() {
        $('.dummyBody').css('z-index', '1');
        $('.dummyBody').stop().animate({'opacity':'0.8'});
        $('.demoTitle').stop().animate({'opacity':'1'});
        $('.dmeoBack').css('z-index', '1');
        $('.dmeoBack').stop().animate({'opacity':'0.8'});
        $('#demoMovie').stop().animate({'opacity':'0'});
        $('.btnTrigger').css('z-index', '2');
        $('.btnTrigger').stop().animate({'opacity':'1'});
        $('.menu').stop().animate({'opacity':'0'});
    }); 

    /*閉じるボタンクリック=====*/
    $('.btnTrigger').on('click', function() {
        $('.dummyBody').css('z-index', '-1');
        $('.dummyBody').stop().animate({'opacity':'0'});
        $('.demoTitle').stop().animate({'opacity':'0'});
        $('.dmeoBack').css('z-index', '-1');
        $('.dmeoBack').stop().animate({'opacity':'0'});
        $('.btnTrigger').css('z-index', '2');
        $('.btnTrigger').stop().animate({'opacity':'0'});
        $('.menu').stop().animate({'opacity':'1'});
    }); 

});


/*日付取得==================================================================================================================*/
$(function(){
    var now = new Date();
    
    var yy = now.getFullYear();
    // 月(月のデータは「０～１１」が格納されてるので１を足してます)
    var mm = new Date().toLocaleDateString('en-US', { month: 'long'})
    // 日付
    var dd = now.getDate();
    $(".date").text(mm + " " + dd + "th, " + yy);
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