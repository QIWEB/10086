$(function() {

    $('.adImg').hide();
    if(mobile_zhaping=="1"){
        if(mobile_zhaping_max=="1") { // 炸屏大转盘开关
            var mobile_is_second = getCookie("mobile_is_second");
            if (mobile_is_second != 1) {
                $('.adImg').show();
                countDown();
                var time = getTodayOtherTime();
                setCookie("mobile_is_second", 1, time);
            }
        }
    }
    /*if(doubleAlertTip=="1"){
        var is_first;
        $.ajax({
            url: Esf.contextPath + "/jf-order/auth/checklogin/02",
            type: "get",
            dataType: 'json',
            success: function (result) {
                if (result.resultcode == "0000") {
                    var user = getCookie("jfuser").split("|")[3];
                    is_first = getCookie(user+"_is_first");
                    if (is_first == 1) {
                        $('.adImg').hide();
                    } else {
                        // countDown();

                        if(doubleAlert=="1"){
                            // 添加双节活动显示
                            Render.alert("立即领取");
                            var time = getTodayOtherTime();
                            setCookie(user+"_is_first", 1, time);
                        }

                    }
                } else {
                    if(doubleAlert=="1"){
                        Render.alert("立即领取");
                    }
                }
            }
        });
    }*/



  /*   // 顶部吸顶条
    topHeader();

    // swiper 插件调用
    swiperForBanner();
    swiperForList();
    swiperForNotice(); */

});
// function swiperForBanner() {
//     new Swiper('.bannerImg', {
//         autoplay: {
//             delay: 3000,
//             disableOnInteraction: false,
//         },
//         pagination: {
//             el: '.swiper-pagination',
//             type: 'bullets',
//         },
//         loop: true
//     });
// }

// function swiperForList() {
//     new Swiper('.recommendBanner', {
//         autoplay: {
//             delay: 4000,
//             disableOnInteraction: false,
//         },
//         slidesPerView: 3,
//         spaceBetween: 0,
//         slidesPerGroup: 3,
//         loop: true,
//         loopAdditionalSlides: 3
//     });
// }

// function swiperForNotice() {
//     new Swiper('.noticeWarp', {
//         autoplay: {
//             delay: 3000,
//             disableOnInteraction: false,
//         },
//         direction: 'vertical',
//         loop: true
//     });
// }

function topHeader() {
    $(window).on('scroll', function() {
        var sTop = $(window).scrollTop(),
            height = $('#banner').height(),
            ap = 'rgba(0,0,0,0)';

        if (sTop > height) {
            ap = 'rgba(0,0,0,.2)';
        }
        $('#topHeader').css('background-color', ap);
    });
}

//倒计时
function countDown(){
    $('.adImg').show();

    var time=5;
    // var allH=$(window).height();
    // $(".adImg img").css('height',allH);
    var timedown=setInterval(function(){
        if(time=="1"){
            clearInterval(timedown);
            $('.adImg').hide();
        }
        time--;
        $('.adImg p span').text(time);
    },1000);
}
function adImgClick() {
    $('.adImg').hide();
}
function gettime(){
    var time = new Date();
    //time = new Date(time);
    var year = time.getFullYear();
    var month = time.getMonth()+1;
    var day = time.getDate();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var second = time.getSeconds();
    if(minutes < 5 ){
        minutes = "05";
    }else if(minutes > 4 && minutes <10){
        minutes = "10";
    }else if(minutes > 9 && minutes <15){
        minutes = "15";
    }else if(minutes > 14 && minutes <20){
        minutes = "20";
    }else if(minutes > 19 && minutes <25){
        minutes = "25";
    }else if(minutes > 24 && minutes <30){
        minutes = "30";
    }else if(minutes > 29 && minutes <35){
        minutes = "35";
    }else if(minutes > 34 && minutes <40){
        minutes = "40";
    }else if(minutes > 39 && minutes <45){
        minutes = "45";
    }else if(minutes > 44 && minutes <50){
        minutes = "50";
    }else if(minutes > 49 && minutes <55){
        minutes = "55";
    }else if(minutes > 54){
        hours += 1;
        minutes = "0";
    }
    var stringTime = year+"-"+month+"-"+day+" "+hours+":"+minutes+":00";
    var timestamp2 = Date.parse(new Date(stringTime));
    return timestamp2;
}
function setCookie(name, value, time) {
    var exp = new Date();
    exp.setTime(exp.getTime() + time * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}


function getCookie(name) {
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null)
        return unescape(arr[2]);
    return null;
}


function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}
//从当前时间到明日0点的时间戳
function getTodayOtherTime() {
    var today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);
    //明日0点时间戳
    var tomorrow_0 = today.getTime() / 1000 + (24 * 3600);
    var current_time = Math.round(new Date().getTime() / 1000);
    var expire = tomorrow_0 - current_time;
    return expire;
}


function adActive() {
    // $.ajax({
    //     url: Esf.contextPath + "/jf-order/auth/checklogin/02",
    //     type: "get",
    //     dataType: 'json',
    //     success: function (result) {
    //         if (result.resultcode == "0000") {
    //             window.location.href = Esf.contextPath+"/jf-order/coupon/doubleFastival/detail";
    //         } else {
    //             window.location.href = Esf.loginUrl;
    //         }
    //     }
    // });

    window.location.href = Esf.contextPath + "/jf-mall/msearchKeyword?keyword=NBA";
}