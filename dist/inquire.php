<?
    //------------------------------------------------------------
    //include file, default value
    //------------------------------------------------------------
    include_once('../include/application.php');


    //------------------------------------------------------------
    //檢查是否已登入
    //------------------------------------------------------------
    if ($uid == "") msgReport("login_member.php?ref=inquire", "");


	//------------------------------------------------------------
	//設定資料庫連線
	//------------------------------------------------------------
	$db = new dbstuff;
	$db->connect(DB_HOST, DB_UID, DB_PWD, DB_NAME);


    //------------------------------------------------------------
    //計算可抽獎次數
    //------------------------------------------------------------
    $sql = "select count(id) from tbuser_sn_q4 where uid = $uid";
    $result_slt = $db->query($sql);

    list($mtimes) = $db->fetch_row($result_slt);


    $sql = "select count(id) from tbgame_record where uid = $uid";
    $result_slt = $db->query($sql);

    list($gtimes) = $db->fetch_row($result_slt);
?>
<!DOCTYPE html>
<html>
<head>
<title>FIN x GARMIN 全民運動會</title>
<meta charset="UTF-8">
<meta lang="tw">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
 <meta name="viewport" content="width=device-width,user-scalable=no"> 
<meta name="description" content="你也有機會成為奧運的潛力新星嗎？快參加FIN的《全民運動會》，完成遊戲就有機會得到最新iPhone7；登錄發票序號還有機會抽SONY PS4和PS VR，Let’s Play！"/>
<meta name="keywords" content="FIN x GARMIN 全民運動會"/>
<meta property="og:title" content="原來只要做點輕運動，就能獲得iPhone7？"/>
<meta property="og:type" content="website"/>    
<meta property="og:url" content="http://www.heysong-fin.com.tw/fin2016_q4"/>
 <meta property="og:image" content="http://fin2016-q4.homakimi-digital.com/images/fb.jpg"/> 
<meta property="og:site_name" content="FIN x GARMIN 全民運動會"/>
<meta property="og:description" content="你也有機會成為奧運的潛力新星嗎？快參加FIN的《全民運動會》，完成遊戲就有機會得到最新iPhone7；登錄發票序號還有機會抽SONY PS4和PS VR，Let’s Play！"/>
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
      <a href="javascript:;" class="menua m1 on">登入/出帳號</a>
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
     <div class="page inquire">
       <div class="com_title"></div>
       <div class="com_main">
           <div class="content">
               <div class="des"></div>
               <div class="box">
                   <div class="st1"></div>
                   <div class="prize1"></div>
                   <div class="word1">
                       共累積<span class="num"><?=$mtimes?></span>次抽獎機會
                   </div>
               </div>
               <div class="box">
                   <div class="st2"></div>
                   <div class="prize2"></div>
                   <div class="word2">
                       共累積<span class="num"><?=$gtimes?></span>次抽獎機會
                   </div>
               </div>
           </div>
       </div>
     </div>
  </div>
</body>
</html>