<?php
header('content-type:text/html;charset="utf-8"');
error_reporting(0);
$news=array(
  array("title"=>'习近平同代表委员共商国是两会细节 国平',"date"=>"2016-3-16"),
   array("title"=>'李克强答如何解决"工资8000元到手仅5000元"',"date"=>"2016-3-16"),
   array("title"=>'两会闭幕辽宁"老虎"落马曾3年3连跳升副部级',"date"=>"2016-3-16"),
   array("title"=>'宁波市长卢子跃严重违纪被查 被指行贿斯鑫良',"date"=>"2016-3-16"),
   array("title"=>'美女翻译六上总理记者会 外号樱桃小丸子',"date"=>"2016-3-16"),
   array("title"=>'外媒:印尼警方击毙两名中国籍极端分子',"date"=>"2016-3-16"),
   array("title"=>'复旦将抗肿瘤药物专利6500万美元售美国公司',"date"=>"2016-3-16"),
 );
echo json_encode($news);