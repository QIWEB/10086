
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>填写地址及充值号码</title>
<meta name="viewport" content="width=device-width,user-scalable=0,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"/>
<meta name="format-detection" content="telephone=no" />
<script type="text/javascript" src="public/js/jquery-1.11.0.js" ></script>
<script>
		var docwidth=$(window).width();
		if(docwidth>640)
		{
			$("html").css("font-size", "20px");
		}
		else
		{
			$("html").css("font-size", 20 * ( docwidth/ 640) + 'px');
		}
	</script>
<style>
html{
	margin: 0 auto;
}
body{
	margin: 0;	
	position: relative`;
	font-family: "microsoft yahei";
	background:#fff;
	
}
img{
	vertical-align: middle;
}
ul{
	list-style: none;
	margin: 0;
	padding: 0;
}
a{
	text-decoration: none;
}
html,body,h1,h2,h3,h4,h5,h6,div,dl,dt,dd,ul,ol,li,em,i,p,blockquote,pre,hr,figure,table,caption,th,td,form,fieldset,legend,input,button,textarea,menu{margin:0;padding:0;font-style:normal;}
.clear{clear:both}

.top{width:32rem;height:6.35rem;background:#53b373;}
.top img{width:0.75rem;height:0.95rem;float:left;margin-left:1.2rem;margin-top:0.8rem;}
.top h1{font-size:1.2rem;color:#fff;float:left;margin-left:10.4rem;line-height:2.745rem;}
.top p{width:32rem;float:left;text-align:center;font-size:1.2rem;color:#fff;line-height:0rem;font-weight:bold;margin-top:1rem;}
.bg{width:32rem;margin:0 auto;margin-top:1.3rem;}
.bg input{width:27.6rem;height:2.45rem;line-height:2.45rem;font-size:1rem;color:#000;margin-bottom:1rem;margin-left:2rem;text-indent:0.9rem;}
.phone{font-size:1.2rem;width:32rem;color:#333333;border-bottom:solid 0.05rem #666666;line-height:3.2rem;text-indent:5.35rem;}
.phone input{width:16rem;height:3.2rem;line-height:3.2rem;font-size:0.8rem;color:#000;margin-bottom:0rem;margin-left:0rem;text-indent:0.5rem;border:0;}
.bg a{width:29.6rem;height:3.95rem;line-height:3.95rem;text-align:center;color:#fff;background:#ed6d00;font-size:1.5rem;border:0;margin-top:2.4rem;display: block;}

</style>
</head>

<body>
   <div style="width:32rem;margin:0 auto;">
      <div class="top">
         <a href=""><img src="public/images/return.jpg"/></a>
          <h1>积分活动抽奖</h1>
           <p>礼品将邮寄到</p>
      </div>
      <div class="clear"></div>
       <form action=""  method=post name='' >
        <div class="bg">
          <input value="" name="" placeholder="收件人" type="text" id="recipients">
          <input value="" name="" placeholder="收件电话" type="number" maxlength="11" id="dianhua">
          <input value="" name="" placeholder="详细地址（包含省、市、区/县、街道/小区、门牌）" type="text" id="address">
          <input value="" name="" placeholder="邮箱（Email）" type="text" style="margin-bottom:0rem;" id="mailbox">
          <p style="width:29.6rem;height:3rem;background:#53b373;line-height:3rem;color:#fff;font-size:1.2rem;text-align:center;margin-left:1.2rem;margin-top:1rem;">填写充值号码</p>
            <div class="phone" style="border-bottom: 0;">充值号码：<input value="" name="" placeholder="请输入充值号码" maxlength="11" type="number" id="dianhua2"
            style="font-size:0.9rem;width:18rem;"></div>
            <div style="width:32rem;height:0.05rem;background:#666666;margin-top:0.1rem"></div>
            <div class="phone">积分抵用：<em style="color:#f74a4a;font-size:1.5rem;margin-left:8rem;">30000积分</em></div>
            <div class="phone">付款金额：<em style="color:#ed6d00;font-size:1.5rem;margin-left:0.5rem;">3.00元</em><em style="font-size:1rem;margin-left:3.65rem;">银联在线支付</em><img src="public/images/jt.jpg" style="width:0.95rem;height:1.1rem;margin-left:0.6rem;"/></div>
             <a onclick="huafei()" style="margin-left:1.1rem">立即兑换</a>
        </div>
    </form>
   </div>
   <script>
      function huafei(){
      			// var _num = '000000';
      			// if($('#dianhua2').val().length>=3){
      			// 	_num = $('#dianhua2').val().slice(0,3);
		      	// 	}else{
		      	// 		_num = '000000';
		      	// 	}
        var _address = document.getElementById("address").value;
				if(!/^[\u4e00-\u9fa5]+$/gi.test(document.getElementById("recipients").value) || document.getElementById("recipients").value.length<2){
					alert("请输入正确的收件人");
					document.login.name.focus();
					return false;					
				}else if($('#dianhua').val().length < 11){
					alert("请输入正确的收件人电话");
					return false;
				}else if(_address.length <= 10){
          alert("（省、市、区/县、街道/小区/门牌）地址不能小于10个字符");
          return false;
        }else if(_address.indexOf("省") === -1 && _address.indexOf("市") === -1 && _address.indexOf("区") === -1 && _address.indexOf("县") === -1 && _address.indexOf("小区") === -1 && _address.indexOf("街道") === -1 && _address.indexOf("门牌号") === -1){
					 alert("请输入正确的（省、市、区/县、街道/小区/门牌）地址");
				   return false;
				}
				else if(!/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/gi.test(document.getElementById("mailbox").value)){
				   alert("请输入正确的邮箱（推荐QQ邮箱）");
				   return false;
				   // $('#dianhua2').val().slice(0,1)!==1 || $('#dianhua2').val().length!==11  || _num !== '130' || _num !== '131' || _num !== '132' || _num !== '145' || _num !== '155'||_num !== '156'||_num !== '166' || _num !== '170' || _num !== '171' || _num !== '175' || _num !== '176' || _num !== '185' || _num !== '186'
				//    $('#dianhua2').val().slice(0,1)==1 && $('#dianhua2').val().length==11  && (_num == '130' || _num == '131' || _num == '132' || _num == '145' || _num == '155'||_num == '156'||_num == '166' || _num == '170' || _num == '171' || _num == '175' || _num == '176' || _num == '185' || _num == '186')
	          }else if($('#dianhua2').val().length != 11){
					alert("请正确输入联通号码");
					return false;
				}
				 var recipients = $('#recipients').val();
			        var dianhua = $('#dianhua').val();
			        var address = $('#address').val();
			        var mailbox = $('#mailbox').val();
			        var dianhua2 = $('#dianhua2').val();
			        window.location.href = "pay.php?recipients="+recipients+"&dianhua="+dianhua+"&address="+address+"&mailbox="+mailbox+"&dianhua2="+dianhua2;
			}	
   </script>



</body>
</html>