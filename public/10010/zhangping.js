function ZP() {
  var $div = '';
  
  $div =
    '<div id="zpMask">' +
    '  <div class="zhaping" data-href="'+imghref+'">' +
    '    <img src=" '+ imgsrc + '">' +
    '    <div class="closeIcon"></div>' +
    '  </div>' +
    '</div>';

  $('body').append($div);

  var timeX = 10;
  var timer = setInterval(function () {
    timeX--;
    // document.querySelector('.ZP-second').innerHTML = timeX + 's';
    if (timeX === -1) {
      document.getElementById('zpMask').style = 'display:none';
      clearInterval(timer);
    }
  }, 1000);

  setTimeout(function () {
    document.getElementById('zpMask').style = 'display:none';
  }, 10000);

  document.querySelector('.closeIcon').addEventListener('click', function () {
    document.getElementById('zpMask').style = 'display:none';
  }, false);

  //点击跳页面
  $(document).on('click','.zhaping img',function(){
    var href = $('.zhaping').attr('data-href');
    location.href = href;
  });
};
var imghref = "https://m.jf.10010.com/jf-uative/active/#/active/ac358174162831114240.json";
var imgsrc = Esf.baseResPath + "/mobile/images/activity_june.jpg";
$(function(){
  var style = document.createElement("style");
  style.innerText = "#zpMask{z-index:9999;width:100%;height:100%;background-color:rgba(0,0,0,0.3);position:fixed;top:0;left:0;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}#zpMask .zhaping{cursor:pointer;width:4.8rem;height:6.1rem;position:relative}#zpMask .zhaping img{width:4.8rem;height:6.1rem;}#zpMask .zhaping .closeIcon{cursor:pointer;width:.6rem;height:.6rem;background-image:url(' "+Esf.baseResPath+"/mobile/images/fourth/zpIcon.png');background-size:100% 100%;background-repeat:no-repeat;position:absolute;top:6.5rem;left:0;right:0;margin:auto}";
  document.head.appendChild(style);
    if(mobile_zhaping=="1"){
        var mobile_is_first = getCookie("mobile_is_first");
        if(mobile_zhaping_min=="1") {
            if (mobile_is_first != "1") {
                    ZP();
                    var time = getTodayOtherTime();
                    setCookie("mobile_is_first", 1, time);
            }
        }
        // else {
        //         $.ajax({
        //             url: Esf.contextPath + "/jf-mall/checkProvince",
        //             type: "post",
        //             async: true,
        //             contentType: "application/json;charset=utf-8",
        //             success: function (result) {
        //                 if (result.resultcode = "0000" && "011" == result.result) {
        //                     imghref = "https://m.jf.10010.com/jf-mall/mclubTransfer";
        //                     imgsrc = Esf.baseResPath + "/mobile/images/fourth/beijingzhaping.png";
        //                 }
        //             },
        //             error: function (xml) {
        //             },
        //             beforeSend: function () {
        //             },
        //             complete: function () {
        //                 ZP();
        //                 var time = getTodayOtherTime();
        //                 setCookie("mobile_is_first", 1, time);
        //             }
        //         });
        //     }
    }
});