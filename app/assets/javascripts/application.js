// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery 
//= require rails-ujs
//= require materialize-sprockets
//= require activestorage
//= require turbolinks
//= require_tree .


$(document).on('ready turbolinks:load', function(){
  // parallax
  $('.parallax').parallax();

  // carousel(ポートフォリオの画像コレクション)
  $('.slider').slider({
    interval: 6000,
    height: 500
  });

  // フロートボタン
  $('.fixed-action-btn').floatingActionButton();

});

// モーダル
$(document).on('ready turbolinks:load', function() {
  M.Modal._count = 0;
  var elems = document.querySelectorAll('.modal');
  var options ={
    opacity: 0.6,
    inDuration: 500
  };
  M.Modal.init(elems, options);
});


// $(document).on('ready turbolink:load', function(){
$(function(){
// #で始まるアンカーをクリックした場合に処理
  $("a[href^='#']").click(function(){
    // スクロールのスピード
    var speed = 400; //ミリ秒
    // アンカーの値取得
    var href = $(this).attr("href");
    // 移動先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を数値で取得
    var position = target.offset().top;
    // スムーススクロール
    $("body,html").animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});




// googlemaps api
// 変数定義
var map;

// マーカーの場所を定義
var marker = [];
var infoWindow = [];
var markerData = [
  {
  // 三重県四日市
    name: "2008:三重県立四日市高等学校普通科卒業",
    lat: 35.007854,
    lng: 136.647375
  },{
  // 広島大学
    name:"2008~2012:広島大学工学部一類（機械科）</br>2012~2014:広島大学大学院工学研究科機械システム工学専攻",
    lat: 34.400103, 
    lng: 132.714026
  },{
    // 大阪府大阪市
    name:"2014:某家電メーカー就職",
    lat: 34.702667,
    lng: 135.495971
  },{
  // 奈良県奈良市
    name: "2014.05~09:奈良の家電修理部門で研修",
    lat: 34.681266,
    lng: 135.819509
  },{
    // 広島県広島市
    name: "2014.09~2019.06:広島の新規事業:機構開発部に所属",
    lat: 34.397977,
    lng: 132.475411
  },{
  // 福岡県福岡市
    name: "2019.07~:福岡のスクールで本格的にプログラミング勉強開始",
    lat: 33.590422,
    lng: 130.420863
  }
]



var infoWindow;

// 地図の中心（岡山駅）
var center = {
  lng: 133.917691,
  lat: 34.666280
};

// 関数定義
function initMap(){
  // 地図の作成
  let map = new google.maps.Map(document.getElementById('exp_map'),{
    center: center,
    zoom: 6.5,
    mapTypeControl: false,
    disableDefaultUI: true,
    styles:[

      {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "landscape",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "water",
        "stylers": [
          {
            "color": "#f97e00"
          }
        ]
      }
    ]
  });
// マーカー毎の処理
  for(var i = 0; i < markerData.length; i++){
    // 経緯度データ作成
    markerLatLng = new google.maps.LatLng({lat: markerData[i]['lat'], lng: markerData[i]['lng']});
    marker[i] = new google.maps.Marker({
      position: markerLatLng,
      map:map
    });
    // 吹き出しの追加
    infoWindow[i] = new google.maps.InfoWindow({
      // 吹き出しに表示する内容
      content: '<div class="experienced_place">' + markerData[i]['name'] + '</div>'
    });
    markerEvent(i);
  }
}

function markerEvent(i){
  marker[i].addListener('click', function(){
    infoWindow[i].open(map, marker[i]);
  });
}