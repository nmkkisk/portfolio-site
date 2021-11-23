//=====================================================
//Googleマップ
//=====================================================
$(function() {
    function initMap() {

        var pos = {lat: 36.2507157, lng: 137.653071};
        var opts = {
            zoom: 15,

            center: new google.maps.LatLng(pos)
        };

        var map = new google.maps.Map(document.getElementById("Map"), opts);
        var marker = new google.maps.Marker({
            position: pos,
            map: map,
            icon: "access/image/map_icon.png"
        });

        //色変更
        var stylez = [
            { featureType: "all", elementType: "geometry", stylers: [ { hue: '#555045'}, { saturation: -30 }, { lightness: -5 } ] }
        ];

        var styledMapOptions = {
            map: map,
            name: "Map"
        }
        var styledMapType = new google.maps.StyledMapType(stylez,styledMapOptions);
        map.mapTypes.set('mono', styledMapType);
        map.setMapTypeId('mono');

    }

    initMap();
})

/*ロードイベント=================================*/
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


