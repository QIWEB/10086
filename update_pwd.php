<?php 
    include_once "db.php";
    $post = $_POST;
    session_start();
    if (!isset($_SESSION['user']) || $_SESSION['user'] != 'admin') {
        echo "<script>alert('回话已失效，请重新登录')</script>";
        header('Location: /login.php');
    }
    if(!empty($post)){

        $mysql = new Mysql();
        if ($post['password'] == $post['r_password']) {
            $userInfo = $mysql -> select('admin');
            if ($userInfo[0]['passwd'] === $post['password'] ) {
                echo "<script>alert('新密码不能和原密码相同，请重新输入')</script>";
            } else {
                $res = $mysql->update('admin',"where account='admin'",['passwd'=>$post['password']]);
                if ($res) {
                    echo "<script>alert('密码修改成功，请重新登录');location.href='/out.php'</script>";
                }else{
                    echo "<script>alert('密码修改失败')</script>";
                }
            }
        }else{
            echo "<script>alert('两次密码不一致，请检查。')</script>";
        }
    }
   
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>登录</title>
</head>
<style>
    body{
        margin: 0;
        padding: 0;
        font-family: "microsoft yahei";

    }
    .bjs{background:#BBBB00;width:100%;height:900px;}
    .zs{width:200px;height:30px;}
    #ehong-code-input{
        width:42px;
        letter-spacing:2px;
        margin:0px 8px 0px 0px;
    }
    .ehong-idcode-val{
        position:relative;
        padding:1px 4px 1px 4px;
        top:0px;
        *top:-3px;
        letter-spacing:4px;
        display:inline;
        cursor:pointer;
        font-size:16px;
        font-family:"Courier New", Courier, monospace;
        text-decoration:none;
        font-weight:bold;
    }
    .ehong-idcode-val0{
        border:solid 1px #A4CDED;
        background-color:#ECFAFB;
    }

    .ehong-idcode-val1{
        border:solid 1px #A4CDED;
        background-color:#FCEFCF;
    }
    .ehong-idcode-val2{
        border:solid 1px #6C9;
        background-color:#D0F0DF;
    }
    .ehong-idcode-val3{
        border:solid 1px #6C9;
        background-color:#DCDDD8;
    }
    .ehong-idcode-val4{
        border:solid 1px #6C9;
        background-color:#F1DEFF;
    }
    .ehong-idcode-val5{
        border:solid 1px #6C9;
        background-color:#ACE1F1;
    }
    .ehong-code-val-tip{
        font-size:12px;
        color:#1098EC;
        top:0px;
        *top:-3px;
        position:relative;
        margin:0px 0px 0px 4px;
        cursor:pointer;

    }
    .txtVerification{width: 200px;height:30px;margin-top:10px;float:left;margin-left:60px;}
    #idcode{float:left;margin-top:19px;}
    #butn{float:left;
        width: 100px;
        height: 40px;
        background: #f1f1f1;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin: 10px 0 0 90px;
        display: block;
        font-size: 1.2rem;
        color: #e22e1c;
        cursor: pointer;}
    input{background:#fff;border:none}
</style>
<body>
<div class="bjs">
    <form style="width:380px;margin:0 auto;position: relative;top: 50%;transform: translateY(-50%);" id= 'frm' name="fsa" method="post" action="">
        <label for="" style="font-size:25px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;新密码:</label>
        <input id="zs" class="zs" name="password" placeholder="" type="password" value=""></br>
        <label for="" style="font-size:25px;">确认新密码:</label>
        <input id="xs" class="zs" name="r_password" placeholder="" type="password" value="">
        <center>
            <div style="clear:both"></div>
            <input type="submit" id="butn" value="提交"></center>
    </form>
</div>

<script type="text/javascript" src="public/script/jquery-1.11.0.js" ></script>

</div>
</body>
</html>