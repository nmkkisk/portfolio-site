/*メニューボタンクリック==================================================================================================================*/
$(function(){
    var clickFlg = false;
    $("a").on('click', myHandler);

    $('.btnTrigger').on('click', function() {
        $(this).toggleClass('active');
        
        if (clickFlg===false){
            $('.naviBack').stop().animate({'opacity':'0.8'});
            $('.naviMenu').stop().animate({'opacity':'1'});
            $('.logo_copy').stop().animate({'opacity':'0'});
            $('.naviPic').stop().animate({'opacity':'1'});
            $("a").off('click', myHandler);
            clickFlg = true;
        }else{
            $('.naviBack').stop().animate({'opacity':'0'});
            $('.naviMenu').stop().animate({'opacity':'0'});
            $('.logo_copy').stop().animate({'opacity':'1'});
            $('.naviPic').stop().animate({'opacity':'0'});
            $("a").on('click', myHandler);
            clickFlg = false;
        }

        return false;
    });   
});

/*aタグ無効==================================================================================================================*/
function myHandler(e){
    e.preventDefault();
}

/*テキストアニメーション==================================================================================================================*/
$(function(){
    // アニメーションさせたいクラス
    var container = $(".copyMain");
    // アニメーションスピード
    var speed = 180;

    // テキストの間にスペースを入れます
    var content = container.html();
    var text = $.trim(content);
    var newHtml = "";

    // スペースで区切ったテキストを、テキストの数だけspanで囲む
    text.split("").forEach(function(v) {
        newHtml += '<span>' + v + '</span>';
    });

    // spanで囲んだテキスト群をHTMLに戻す
    container.html(newHtml);

    // 1文字ずつ表示
    var txtNum = 0;
    container.css({opacity: 1});
    setInterval(function() {
        container.find('span').eq(txtNum).css({opacity: 1});
        txtNum++
    }, speed);
    
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