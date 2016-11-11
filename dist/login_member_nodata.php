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
    $name = getFieldValue($_COOKIE, 'name');
    $ident = getFieldValue($_COOKIE, 'ident');
    $email = getFieldValue($_COOKIE, 'email');
    $phone = getFieldValue($_COOKIE, 'phone');
    $gender = getFieldValue($_COOKIE, 'gender');
    $age = getFieldValue($_COOKIE, 'age');
    $city = getFieldValue($_COOKIE, 'city');
    $state = getFieldValue($_COOKIE, 'state');
    $street = getFieldValue($_COOKIE, 'street');

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
<script src="/js/bAddress.js"></script>
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
     <div class="page login_member_nodata">
       <div class="com_title"></div>
       <div class="com_main">
           <form class="form-join">
           <input type="hidden" name="type" id="type" value="2">
           <input type="hidden" name="zip" id="zip">
           <div class="content">
               <div class="btn">
                   <div class="nodata_btn on">
                       <a href="javascript:;"></a>
                   </div>
                   <div class="hasdata_btn">
                       <a href="login_member.php"></a>
                   </div>
               </div>
               <ul class="data">
                   <li><input type="text" name="name" class="name" placeholder="請填寫正確中文姓名" value="<?=$name?>"></li>
                   <li><input type="text" name="ident" class="idcard" placeholder="請填寫身分證字號 (英文字母請大寫)" value="<?=$ident?>"></li>
                   <li><input type="text" name="email" class="email" placeholder="請輸入您的電子信箱" value="<?=$email?>"></li>
                   <li><input type="text" name="phone" class="phone" placeholder="請輸入您的聯絡手機號碼" value="<?=$phone?>"></li>
                   <li>
                       <select name="gender" class="male">
                           <option value="">請選擇性別</option>

                           <?
                           		foreach ($genderList as $key => $value)
                           			echo "<option value=\"$key\" " . ($gender == $key ? "selected" : "") . ">$value</option>";
                           ?>

                       </select>
                       <select name="age" class="age">
                           <option value="">請選擇年齡</option>

                           <?
                           		foreach ($ageList as $key => $value)
                           			echo "<option value=\"$key\" " . ($age != "" && $age == $key ? "selected" : "") . ">$value</option>";
                           ?>

                       </select>
                   </li>
                   <li>
                       <select name="city" class="city" id="city">
                           <option value="選擇縣市">選擇縣市</option>
                       </select>
                       <select name="state" class="area" id="state">
                           <option value="區/鄉/鎮/市">區/鄉/鎮/市</option>
                       </select>
	                    <script>
	                        initialbCity('city', 'state', 'zip');
	                        setbCity('city', 'state', 'zip', '<?=$city?>', '<?=$state?>');
	                    </script>
                   </li>
                   <li><input type="text" class="addr" name="street" placeholder="請輸入您的通訊地址" value="<?=$street?>"></li>
                   <li>
                       <div class="s">
                           1.沒有手機可填家人的手機號碼，以利中獎聯繫<br>
                           2.收件地址需填寫可連絡本人，以利中獎後聯繫
                       </div>
                   </li>
                   <li>
                       <div class="agree">
                           <div class="checkbox"></div>
                           <a href="about.html" target="_blank">
                               我已閱讀並同意活動內容與以上隱私權條款
                           </a>
                       </div>
                   </li>
                   <li>
                       <div class="submitbtn">確認送出</div>
                   </li>
               </ul>
           </div>
           </form>
       </div>
     </div>
  </div>
</body>
</html>