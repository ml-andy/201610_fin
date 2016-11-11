<?
    //------------------------------------------------------------
    //include file, default value
    //------------------------------------------------------------
    include_once('../include/application.php');


    //------------------------------------------------------------
    //檢查是否已登入
    //------------------------------------------------------------
    if ($uid != "") msgReport("index.php", "");


    //------------------------------------------------------------
    //已填寫的資料
    //------------------------------------------------------------
	$name = $_COOKIE['name'];
	$ident = $_COOKIE['ident'];
	$email = $_COOKIE['email'];
	$phone = $_COOKIE['phone'];
	$gender = $_COOKIE['gender'];
	$age = $_COOKIE['age'];
	$zip = $_COOKIE['zip'];
	$city = $_COOKIE['city'];
	$state = $_COOKIE['state'];
	$street = $_COOKIE['street'];

    $genderList = array("m"=>"男", "f"=>"女");
    $ageList = array("14歲以下", "15-19歲", "20-24歲", "25-29歲", "30-34歲", "35-39歲", "40歲以上");
?>
<!DOCTYPE html>
<html>
<head>
<title>FIN x GARMIN 全民運動會</title>
<meta charset="UTF-8">
<meta lang="tw">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
 <meta name="viewport" content="width=device-width,user-scalable=no"> 
<meta name="description" content="你也有機會成為奧拚的潛力新星嗎？快參加FIN的《全民拚動會》，完成拙戲就有機會最新iPhone7；登錄發票序號還有機會抽SONY PS4和PS VR，Let’s Play！"/>
<meta name="keywords" content="FIN x GARMIN 全民運動會"/>
<meta property="og:title" content="原來只要做點輕拚動，就能獲得iPhone7？"/>
<meta property="og:type" content="website"/>    
<meta property="og:url" content="http://www.heysong-fin.com.tw/fin2016_q4"/>
 <meta property="og:image" content="http://fin2016-q4.homakimi-digital.com/images/fb.jpg"/> 
<meta property="og:site_name" content="FIN x GARMIN 全民運動會"/>
<meta property="og:description" content="你也有機會成為奧拚的潛力新星嗎？快參加FIN的《全民拚動會》，完成拙戲就有機會最新iPhone7；登錄發票序號還有機會抽SONY PS4和PS VR，Let’s Play！"/>
<link rel="shortcut icon" type="image/x-icon" href="favicon.ico"/>
<!---->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<!--css-->
<link rel="stylesheet" href="css/common.css"/>
<!--js-->
<script type="text/javascript" src="//connect.facebook.net/zh_TW/all.js"></script>
<script src="lib/device.min.js"></script>
<script src="/js/google_ga.js"></script>
<script src="js/app.js"></script>
<script src="/js/jquery.ajaxform.js"></script>
<script src="/js/index.js"></script>
<script src="//d17m68fovwmgxj.cloudfront.net/js/appier-track-v1.7.js"></script>
<script>Appier.appierPVTrack("Km0z0x46tdS3hxS",0,"false","1UGfQf0j71WmU68");</script>
<script>
(function(){
if (typeof window.APPIER_RETARGET == 'undefined') {
    (function(w, d, s, m) {
        var f = d.getElementsByTagName('script')[0],
            j = d.createElement('script'),
            ns = 'APPIER_RETARGET';
        w._appierSendQueue = w._appierSendQueue || [];
        w['appierRetargetJson'] = { id: s, site: m};
        j.async = true;
        j.src = '//jscdn.appier.net/aa.js?id='+m;
        f.parentNode.insertBefore(j, f);
        !w[ns] && (w[ns] = {});
        (!w[ns].send) && (w[ns].send = function(j){
            w._appierSendQueue.push(j);
        });
     })(window, document, 'JiOf', 'heysong-fin.com.tw');
}
})();
</script>

</head>
<body>
  <div class="loading">
    <div class="main">
      Loading...
    </div>
  </div>
  <div class="header">
    <div class="logo"></div>
    <div class="menubtn"></div>
  </div>
  <div class="menu">
    <div class="menua_box">
      <a href="javascript:;" class="menua m1">登入/出帳號</a>
      <a href="javascript:;" class="menua m2">查詢紀錄</a>
      <a href="javascript:;" class="menua m3">活動辦法</a>
      <a href="javascript:;" class="menua m4">獎項介紹</a>
      <a href="javascript:;" class="menua m5">得獎名單</a>
      <a href="javascript:;" class="menua m6">FB分享</a>
      <a href="javascript:;" class="menua m7">玩遊戲</a>
      <a href="javascript:;" class="menua m8">登錄序號</a>
      <a href="javascript:;" class="menua m9">回首頁</a>
    </div>
    <div class="cover"></div>
  </div>
  <div class="wrapper">
     <div class="page login_member_nodata_confirm">
       <div class="com_title"></div>
       <div class="com_main">
           <form class="form-confirm">
           <div class="content">
               <div class="des"></div>
               <ul class="data">
                 <li>
                   <div class="left">姓名 :</div>
                   <div class="right"><?=$name?></div>
                 </li>
                 <li>
                   <div class="left">身分證字號 :</div>
                   <div class="right"><?=$ident?></div>
                 </li>
                 <li>
                   <div class="left">手機 :</div>
                   <div class="right"><?=$phone?></div>
                 </li>
                 <li>
                   <div class="left">E-mail :</div>
                   <div class="right"><?=$email?></div>
                 </li>
                 <li>
                   <div class="left">性別 :</div>
                   <div class="right"><?=$genderList[$gender]?></div>
                 </li>
                 <li>
                   <div class="left">年齡 :</div>
                   <div class="right"><?=$ageList[$age]?></div>
                 </li>
                 <li>
                   <div class="left">地址 :</div>
                   <div class="right"><?=$city . $state . $street?></div>
                 </li>
               </ul>
               <div class="btn">
                 <div class="modify"></div>
                 <div class="submit"></div>
               </div>
           </div>
           </form>
       </div>
     </div>
  </div>
</body>
</html>