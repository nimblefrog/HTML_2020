// 網頁的主程式寫在這裡
// 等待畫面元素載入完成後，在執行以下程式
$(document).ready(function () {
    // 設定Google Map API所需要的資料
    // 地圖的經緯度資訊
    var myPosition = {
        lat: 25.0164823,
        lng: 121.5366581
    };
    // HTML裡面要放置地圖的標籤
    var mapTag = $('#map')[0];
    //console.log(mapTag);
    //繪製地圖 .Map(要繪製地圖的HTML標籤, {})
    var googleMap = new google.maps.Map(mapTag, {
        // center 地圖中心
        center: myPosition,
        // zoom 縮放的大小
        zoom: 14,
        //styles 設定地圖的色彩配置
        styles: mapStyles
    });

    var marker = new google.maps.Marker({
        //地標的位置
        position: myPosition,
        //地標放在哪張地圖上
        map: googleMap
        //icon: './img/icon.png'
    });

    //綁定.navbar裡面的.nav-link的點擊事件
    $('.navbar .nav-link, #goBackBtn').click(function () {
        //console.log('nav-link被點擊了');

        // 1.取得移動的目標
        //  $('選擇目標').attr('屬性名稱') 取得屬性的值
        var target = $(this).attr('href');
        console.log(target);
        // 2.取得目標的座標
        //  $('選擇目標').offset() 取得到目標的座標(物件)
        var position = $(target).offset().top;
        console.log(position);
        // 3.(先停止動畫再)透過動畫移動到指定的座標
        var navbarHeight = 56;
        var animateDuration = 1500
        //              .stop()停止動畫
        // $('選擇目標').animate({}, 微秒數)
        // 用減的:不要捲那麼上去
        $('html, body').stop().animate({
            scrollTop: position - navbarHeight
        }, animateDuration);
    });
});