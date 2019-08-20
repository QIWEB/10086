/*  $(function() {
	  
		$(".index_lo").append("<div class='new_user'  id='new_user'><div class='new_pic'><a target='_blank' href='https://m.jf.10010.com/r/3/mob/1.html'><img alt='' src='http://jf.10010.com/cms/game/3/qn/images/mobile_zp_1.png' id='img_end'></a></div><span class='new_close' onclick='hideNewUser()'></span></div><div class='overlay' id='overlay'></div><div class='draw-img'  id='draw-img'><div class='draw-list' onclick='showmy()'><img src='http://jf.10010.com/cms/game/3/qn/images/left_2.jpg' width='100%'><p style='position:absolute;top:58px;font-weight:600;width:100%;text-align:center;font-size:14px;color:#fada2f;' id='time_lo'></p></div><div class='draw-list2' onclick='showmy()'><img src='http://jf.10010.com/cms/game/3/qn/images/left_1.png' width='100%'></div></div></div><div id='petalbox' onclick='go()'></div><div style='width:20px;position: fixed;bottom: 65px;left: 70px; height:20px;z-index: 1000098;border-radius:50%;overflow:hidden;' id='hiddo'><img width='100%' src='http://jf.10010.com/cms/game/3/qn/images/close.png' onclick='hidethis()'></div><div style='width:80px;position: fixed;bottom: 0px;right: 0px; height:80px;z-index: 1000097;' id='500m_pic'><img width='100%' src='http://jf.10010.com/cms/game/3/qn/images/500m.jpg' onclick='gothere()'></div><div style='width:20px;position: fixed;bottom: 75px;right: 75px; height:20px;z-index: 1000098;border-radius:50%;overflow:hidden;' id='hid500m'><img width='100%' src='http://jf.10010.com/cms/game/3/qn/images/close.png' onclick='hide500m()'></div>");
		show_time();
		var time_500 = new Date();
		var year_500 = time_500.getFullYear();
		if(year_500 == 2018){
			 $("#500m_pic").css({"display": "none"})
		}
        var is_first = G_getCookie("is_first");
        if (is_first == 3) {
            showNewUser();
	$("#draw-img").css({"display":"none"});
            var time = getTodayOtherTime(); //姣�2澶╀竴娆�
            G_setCookie("is_first", 1, time);//3600 * 24 * 2 鏈夋晥鏈�2澶�
        } else {
            $("#draw-img").css({"display":"block"});
            hideNewUser();
        }
    })
	var time_500 = new Date();
	var year_500 = time_500.getFullYear();
	function gothere(){
	 
	 window.location.href='https://m.jf.10010.com/r/3/mob/15.html';
 }
	function hby(){
	  var is_hb = G_getCookie("is_hb");
	   if (is_hb != 1) {
            init();
            var time = getTodayOtherTime(); //姣�2澶╀竴娆�
           G_setCookie("is_hb", 1, time);//3600 * 24 * 2 鏈夋晥鏈�2澶�
        } else {
            
        }
	  
 }
    function showNewUser() {
		 $("#hiddo").fadeOut(1000);
		 $("#hid500m").fadeOut(200);
        var document_height = $(document).height();
        var window_height = $(window).height();
        var height = document_height > window_height ? document_height : window_height;
       // $("#overlay").css({"height": height, "display": "block"});
		 $("#500m_pic").css({"display": "none"});
      // $("#new_user").fadeIn(500);
	  window.location.href="https://m.jf.10010.com/r/3/mob/1.html";
	    setTimeout(function(){
		    $("#img_end").attr("src","http://jf.10010.com/cms/game/3/qn/images/mobile_zp_end.png");
	   },7000);
       // $("#new_user").show();
    }
    function hideNewUser() {
		 $("#hiddo").fadeIn(1000);
         $("#draw-img").fadeIn(1000);
        $("#new_user").animate({width:"0%",right:"91%",top:"91%"},600);
        $("#overlay").css({"display": "none"});
		if(year_500 == 2018){
			 $("#500m_pic").css({"display": "none"});
			  $("#hid500m").fadeOut(200);
		}else{
		 $("#500m_pic").css({"display": "block"});
		  $("#hid500m").fadeIn(200);
		}
    }
 function showmy(){
        $("#draw-img").fadeOut(1000);
        $("#new_user").animate({width:"100%",right:"0%",top:"4%"},1000);
        showNewUser(); 
}
function hidethis(){
	
	 $("#draw-img").fadeOut(1000);
	 $("#hiddo").fadeOut(1000);
}
function hide500m(){
	$("#500m_pic").css({"display": "none"});
	 $("#hid500m").fadeOut(200);
}

    //璁剧疆cookies鍑芥暟
    function G_setCookie(name, value, time) { //name:cookie閿悕锛寁alue:cookie閿€�,鍜屾椂闂碨
        var exp = new Date();
        exp.setTime(exp.getTime() + time * 1000);//鏈夋晥鏈�1灏忔椂 
        document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
    }

    //鍙朿ookies鍑芥暟 
    function G_getCookie(name) {
        var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
        if (arr != null)
            return unescape(arr[2]);
        return null;
    }

    //鍒犻櫎cookies
    function G_delCookie(name) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = getCookie(name);
        if (cval != null)
            document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    }

    //浠庡綋鍓嶆椂闂村埌鏄庢棩0鐐圭殑鏃堕棿鎴�
    function getTodayOtherTime() {
        var today = new Date();
        today.setHours(0);
        today.setMinutes(0);
        today.setSeconds(0);
        today.setMilliseconds(0);
        //鏄庢棩0鐐规椂闂存埑
        var tomorrow_0 = today.getTime() / 1000 + (24 * 3600 * 2);
        var current_time = Math.round(new Date().getTime() / 1000);
        var expire = tomorrow_0 - current_time;
        return expire;
    }
	function change(){
	$(".draw-img").addClass("hover");
	}
	function ret(){
	$(".draw-img").removeClass("hover");
	}
	//红包雨js
	var NUMBER_OF_LEAVES = 180;
        function init() {
            var container = document.getElementById('petalbox');
            try {
                for (var i = 0;
                     i < NUMBER_OF_LEAVES;

                     i++) {
                    container.appendChild(createALeaf());
                }
            }
            catch(e) {
            }
        }
        function randomInteger(low, high) {
            return low + Math.floor(Math.random() * (high - low));
        }
        function randomFloat(low, high) {
            return low + Math.random() * (high - low);
        }
        function pixelValue(value) {
            return value + 'px';
        }
        function durationValue(value) {
            return value + 's';
        }
        function createALeaf() {
            var leafDiv = document.createElement('div');
            var image = document.createElement('img');
            image.src ='http://jf.10010.com/cms/game/3/qn/images/petal'+ randomInteger(1, 10) + '.png';
			image.setAttribute("width", "50");
            leafDiv.style.top = pixelValue(randomInteger(-300, -80));
            leafDiv.style.left = pixelValue(randomInteger(0, 1080));
            var spinAnimationName = (Math.random() < 0.5) ? 'clockwiseSpin':'counterclockwiseSpinAndFlip'; 
            leafDiv.style.webkitAnimationName ='fade, drop';
            leafDiv.style.animationName ='fade, drop';
            image.style.webkitAnimationName = spinAnimationName;
            image.style.animationName = spinAnimationName;

            var fadeAndDropDuration = durationValue(randomFloat(12.2, 8.2));

            var spinDuration = durationValue(randomFloat(3, 4));

            leafDiv.style.webkitAnimationDuration = fadeAndDropDuration + ', ' + fadeAndDropDuration;
            leafDiv.style.animationDuration = fadeAndDropDuration + ', ' + fadeAndDropDuration;

            var leafDelay = durationValue(randomFloat(0, 2));

            leafDiv.style.webkitAnimationDelay = leafDelay + ', ' + leafDelay;
            leafDiv.style.animationDelay = leafDelay + ', ' + leafDelay;
            image.style.webkitAnimationDuration = spinDuration;
            image.style.animationDuration = spinDuration;
            leafDiv.appendChild(image);
            return leafDiv;
        }
		function go(){
		window.location.href="https://m.jf.10010.com/r/3/mob/2.html";
	}
	
	setInterval(function(){
	change();
	setTimeout(ret,3000);},6000);
	
		
	function show_time() {  
    var time_start = new Date().getTime(); //设定当前时间  
    var times = gettime();
    var time_end = new Date(times).getTime(); //设定目标时间  
    var time_distance = time_end - time_start;// 计算时间差  
    if (time_distance < 1000) {  
        hby(); 
        $('#time_index').html("点我抢红包");
        setTimeout("show_time()", 12000);   
        return false;  
    }   
  //天  

    var int_day = Math.floor(time_distance /86400000);  
    time_distance -= int_day * 86400000;  
    // 时  

    var int_hour = Math.floor(time_distance / 3600000);  
    time_distance -= int_hour * 3600000;  
    // 分  

    var int_minute = Math.floor(time_distance / 60000);  
    time_distance -= int_minute * 60000;  
    
    // 秒   

    var int_second = Math.floor(time_distance / 1000);  
    time_distance -= int_second * 1000;
    //时分秒为单数时、前面加零   
     if(int_minute==0){  
         int_minute = '';  
    } else if (int_minute < 10) {  
        int_minute = "0" + int_minute+'分';  
    }else{  
        int_minute =  int_minute+'分';  
    }  
     if(int_second==0){  
         int_second = '';  
    } else if (int_second < 10) {  
        int_second = "0" + int_second+'秒';  
    }else{  
         int_second = int_second+'秒';  
    }  
    if(int_minute==0 && int_second==0 ){  
    	var num = 1;
        //int_time="点我去抢红包雨";  
    }  
      
//显示时间  
	
    var int_time=int_minute+int_second;  
   	$('#time_lo').html(int_time);  
	 $('#time_index').html("距离下红包雨");
    
//设置定时器  
    setTimeout("show_time()", 1000);  
}  


//当计时器完成倒计时，执行  
function alterTimes() {  
    
}  
function gettime(){
	var time = new Date();
	//time = new Date(time);
	var year = time.getFullYear();//获取完整的年份(4位,1970)
	var month = time.getMonth()+1;//获取月份(0-11,0代表1月,用的时候记得加上1)
	var day = time.getDate();//获取日(1-31)
	var hours = time.getHours();//获取小时数(0-23)
	var minutes = time.getMinutes();//获取分钟数(0-59)
	var second = time.getSeconds();//获取秒数(0-59)
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
	var stringTime = year+"/"+month+"/"+day+" "+hours+":"+minutes+":00";
	var timestamp2 = Date.parse(new Date(stringTime));
	return timestamp2;
}
*/