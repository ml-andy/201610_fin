// ●城市陣列
arybCity2 = new Array("選擇縣市","台北市","基隆市","新北市","宜蘭縣","新竹市","新竹縣","桃園市","苗栗縣","台中市",
                    "彰化縣","南投縣","嘉義縣","嘉義市","雲林縣","台南市","高雄市","澎湖縣",
                    "屏東縣","台東縣","花蓮縣","金門縣","連江縣");
           
// ●區域名稱陣列         
arybZone = new Array(22);
//      "請選擇"
arybZone[0] = new Array("區/鄉/鎮/市");

//   "台北市"
arybZone[1] = new Array("中正區","大同區","中山區","松山區","大安區","萬華區","信義區","士林區","北投區",
                       "內湖區","南港區","文山區(木柵)","文山區(景美)");                       
//   "基隆市"
arybZone[2] = new Array("仁愛區","信義區","中正區","中山區","安樂區","暖暖區","七堵區");
//   "新北市"
arybZone[3] = new Array("萬里區","金山區","板橋區","汐止區","深坑區","石碇區","瑞芳區","平溪區","雙溪區",
                       "貢寮區","新店區","坪林區","烏來區","永和區","中和區","土城區","三峽區","樹林區",
                       "鶯歌區","三重區","新莊區","泰山區","林口區","蘆洲區","五股區","八里區","淡水區",
                       "三芝區","石門區");    
//   "宜蘭縣"
arybZone[4] = new Array("宜蘭市","頭城鎮","礁溪鄉","壯圍鄉","員山鄉","羅東鎮","三星鄉","大同鄉","五結鄉",
                       "冬山鄉","蘇澳鎮","南澳鄉");
//   "新竹市"
arybZone[5] = new Array("東區","北區","香山區");    
//   "新竹縣"
arybZone[6] = new Array("竹北市","湖口鄉","新豐鄉","新埔鄉","關西鎮","芎林鄉","寶山鄉","竹東鎮","五峰鄉",
                       "橫山鄉","尖石鄉","北埔鄉","峨嵋鄉");    
//   "桃園縣"
arybZone[7] = new Array("桃園區","中壢區","平鎮區","八德區","楊梅區","蘆竹區","大溪區","龍潭區","龜山區","大園鄉","觀音區","新屋區","復興鄉");    
//   "苗栗縣"
arybZone[8] = new Array("竹南鎮","頭份鎮","三灣鄉","南庄鄉","獅潭鄉","後龍鎮","通霄鎮","苑裡鎮","苗栗市",
                       "造橋鄉","頭屋鄉","公館鄉","大湖鄉","泰安鄉","鉰鑼鄉","三義鄉","西湖鄉","卓蘭鄉");
//   "台中市"
arybZone[9] = new Array("中區","東區","南區","西區","北區","北屯區","西屯區","南屯區",
                       "太平區","大里區","霧峰區","烏日區","豐原區","后里區","石岡區","東勢區","和平區",
                       "新社區","潭子區","大雅區","神岡區","大肚區","沙鹿區","龍井區","梧棲區","清水區",
                       "大甲區","外埔區","大安區");    
//   "彰化縣"
arybZone[10] = new Array("彰化市","芬園鄉","花壇鄉","秀水鄉","鹿港鎮","福興鄉","線西鄉","和美鎮","伸港鄉",
                        "員林鎮","社頭鄉","永靖鄉","埔心鄉","溪湖鎮","大村鄉","埔鹽鄉","田中鎮","北斗鎮",
                        "田尾鄉","埤頭鄉","溪州鄉","竹塘鄉","二林鎮","大城鄉","芳苑鄉","二水鄉");
                         
//   "南投縣"
arybZone[11] = new Array("南投市","中寮鄉","草屯鎮","國姓鄉","埔里鎮","仁愛鄉","名間鄉","集集鄉","水里鄉",
                        "魚池鄉","信義鄉","竹山鎮","鹿谷鄉");    
//   "嘉義縣"
arybZone[12] = new Array("番路鄉","梅山鄉","竹崎鄉","阿里山鄉","中埔鄉","大埔鄉","水上鄉","鹿草鄉","太保市",
                        "朴子市","東石鄉","六腳鄉","新港鄉","民雄鄉","大林鎮","漢口鄉","義竹鄉","布袋鎮");

//   "嘉義市"
arybZone[13] = new Array("東區","西區");
                        
//   "雲林縣"
arybZone[14] = new Array("斗南鎮","大埤鄉","虎尾鎮","土庫鎮","褒忠鄉","東勢鄉","台西鄉","崙背鄉","麥寮鄉",
                        "斗六市","林內鄉","古坑鄉","莿桐鄉","西螺鎮","二崙鄉","北港鎮","水林鄉","口湖鄉",
                        "四湖鄉","元長鄉");    
//   "台南市"
arybZone[15] = new Array("中區","東區","南區","西區","北區","安平區","安南區",
                        "永康區","歸仁區","新化區","左鎮區","玉井區","楠西區","南化區","仁德區","關廟區",
                        "龍崎區","官田區","麻豆區","佳里區","西港區","七股區","將軍區","學甲區","北門區",
                        "新營區","後壁區","白河區","東山區","六甲區","下營區","柳營區","鹽水區","善化區",
                        "大內區","山上區","新市區","安定區");                       
//   "高雄市"
arybZone[16] = new Array("新興區","前金區","苓雅區","鹽埕區","鼓山區","旗津區","前鎮區","三民區","楠梓區","小港區",
                        "左營區","仁武區","大社區","岡山區","路竹區","阿蓮區","田寮區","燕巢區","橋頭區","梓官區",
                        "彌陀區","永安區","湖內區","鳳山區","大寮區","林園區","鳥松區","大樹區","旗山區",
                        "美濃區","六龜區","內門區","杉林區","甲仙區","桃源區","三民區","茂林區","茄萣區","那瑪夏區");
//   "澎湖縣"
arybZone[17] = new Array("馬公市","西嶼鄉","望安鄉","七美鄉","白沙鄉","湖西鄉");
//   "屏東縣"
arybZone[18] = new Array("屏東市","三地門鄉","霧台鄉","瑪家鄉","九如鄉","里港鄉","高樹鄉","鹽埔鄉","長治鄉",
                        "麟洛鄉","竹田鄉","內埔鄉","萬丹鄉","潮州鎮","泰武鄉","來義鄉","萬巒鄉","嵌頂鄉",
                        "新埤鄉","南州鄉","林邊鄉","東港鎮","琉球鄉","佳冬鄉","新園鄉","枋寮鄉", "枋山鄉",
                        "春日鄉","獅子鄉","車城鄉","牡丹鄉","恆春鎮","滿州鄉");
//   "台東縣"
arybZone[19] = new Array("台東市","綠島鄉","蘭嶼鄉","延平鄉","卑南鄉","鹿野鄉","關山鎮","海端鄉","池上鄉",
                        "東河鄉","成功鎮","長濱鄉","太麻里鄉","金峰鄉","大武鄉","達仁鄉");    
//   "花蓮縣"
arybZone[20] = new Array("花蓮市","新城鄉","秀林鄉","吉安鄉","壽豐鄉","鳳林鎮","光復鄉","豐濱鄉","瑞穗鄉",
                        "萬榮鄉","玉里鎮","卓溪鄉","富里鄉");                        
//   "金門縣"
arybZone[21] = new Array("金沙鎮","金湖鎮","金寧鄉","金城鎮","烈嶼鄉","烏坵鄉");
//   "連江縣"
arybZone[22] = new Array("南竿鄉","北竿鄉","莒光鄉","東引");


// ●區域號碼陣列
arybZipCode = new Array(22);
// 	 "請選擇"
arybZipCode[0] = new Array("")

//   "台北市"
arybZipCode[1] = new Array("100","103","104","105","106","108","110","111","112","114",
                          "115","116","117");
//   "基隆市"
arybZipCode[2] = new Array("200","201","202","203","204","205","206");
//   "新北市"
arybZipCode[3] = new Array("207","208","220","221","222","223","224","226","227","228",
                          "231","232","233","234","235","236","237","238","239","241",
                          "242","243","244","247","248","249","251","252","253");
//   "宜蘭縣"
arybZipCode[4] = new Array("260","261","262","263","264","265","266","267","268","269",
                          "270","272");
//   "新竹市"
arybZipCode[5] = new Array("300","300","300");
//   "新竹縣"
arybZipCode[6] = new Array("302","303","304","305","306","307","308","310",
	                      "311","312","313","314","315");
//   "桃園縣"
arybZipCode[7] = new Array("320","324","325","326","327","328","330","333","334","335",
                          "336","337","338");
//   "苗栗縣"
arybZipCode[8] = new Array("350","351","352","353","354","356","357","358","360","361",
                          "362","363","364","365","366","367","368","369");
//   "台中市"
arybZipCode[9] = new Array("400","401","402","403","404","406","407","408",
                          "411","412","413","414","420","421","422","423","424","426",
                          "427","428","429","432","433","434","435","436","437","438",
                          "439");
//   "彰化縣"
arybZipCode[10] = new Array("500","502","503","504","505","506","507","508","509","510",
                           "511","512","513","514","515","516","520","521","522","523",
                           "524","525","526","527","528","530");
//   "南投縣"
arybZipCode[11] = new Array("540","541","542","544","545","546","551","552","553","555",
                           "556","557","558");
//   "嘉義縣"
arybZipCode[12] = new Array("602","603","604","605","606","607","608","611","612","613",
                           "614","615","616","621","622","623","624","625");
//   "嘉義縣"
arybZipCode[13] = new Array("600","600");
//   "雲林縣"
arybZipCode[14] = new Array("630","631","632","633","634","635","636","637","638","640",
                           "643","646","647","648","649","651","652","653","654","655");
//   "台南市"
arybZipCode[15] = new Array("700","701","702","703","704","708","709",
                           "710","711","712","713","714","715","716","717","718","719",
                           "720","721","722","723","724","725","726","727","730","731",
                           "732","733","734","735","736","737","741","742","743","744","745");
//   "高雄市"
arybZipCode[16] = new Array("800","801","802","803","804","805","806","807","811","812","813",
                           "814","815","820","821","822","823","824","825","826","827","828",
                           "829","830","831","832","833","840","842","843","844","845","846",
                           "847","848","849","851","852","849");
//   "澎湖縣"
arybZipCode[17] = new Array("880","881","882","883","884","885");
//   "屏東縣"
arybZipCode[18] = new Array("900","901","902","903","904","905","906","907","908","909","911",
                           "912","913","920","921","922","923","924","925","926","927","928",
                           "929","931","932","940","941","942","943","944","945","946","947");
//   "台東縣"
arybZipCode[19] = new Array("950","951","952","953","954","955","956","957","958","959","961",
                           "962","963","964","965","966");
//   "花蓮縣"
arybZipCode[20] = new Array("970","971","972","973","974","975","976","977","978","979","981",
                           "982","983");
//   "金門縣"
arybZipCode[21] = new Array("890","891","892","893","894","896");
//   "連江縣"
arybZipCode[22] = new Array("209","210","211","212");

function setbCity(objLstCity, objLstZone, objZip, strCity, strZone)
{
	if ((strCity != "") && (strZone != ""))	{
		var html = "";
		var cityIndex = 0;
		$.each(arybCity2, function(i,v) {
			slt = "";
			if (v == strCity) {
				slt = "selected";
				cityIndex = i;
			}

			html += '<option value="' + v + '" ' + slt + '>' + v + '</option>';
		});

		$('#' + objLstCity).html(html);



		html = "";
		$.each(arybZone[cityIndex], function(i,v) {
			slt = "";
			if (v == strZone) {
				slt = "selected";
				$('#' + objZip).val(arybZipCode[cityIndex][i]);
			}

			html += '<option value="' + v + '" ' + slt + '>' + v + '</option>';
		});

		$('#' + objLstZone).html(html);


		/*for (intCount = 0; intCount < arybCity2.length; intCount++) 
		{
			if (objLstCity.options[intCount].value == strCity)
			{
				objLstCity.options[intCount].selected = true;
				var intLstCityIndex = intCount;
			}
		}

			bZone(objLstCity,objLstZone,objTxtZoneCode);
		
		for (intCount = 0; intCount < arybZone[intLstCityIndex].length; intCount++) 
		{
			if (objLstZone.options[intCount].value == strZone)
			{
				objLstZone.options[intCount].selected = true;
			}
		}

        changebZoneCode(objLstCity,objLstZone,objTxtZoneCode)*/

	}
}

function initialbCity(objLstCity, objLstState, objZip)
{
	var html = "";
	$.each(arybCity2, function(i,v) {
		html += '<option value="' + v + '">' + v + '</option>';
	});

	$('#' + objLstCity).html(html).change(function() {
		html = "";
		var cityIndex = $(this).prop('selectedIndex');

		$.each(arybZone[cityIndex], function(i,v) {
			html += '<option value="' + v + '">' + v + '</option>';
			if (i == 0) $('#' + objZip).val(arybZipCode[cityIndex][i]);
		});

		$('#' + objLstState).html(html).change(function() {
			var stateIndex = $(this).prop('selectedIndex');

			$.each(arybZipCode[cityIndex], function(i,v) {
				if (i == stateIndex) $('#' + objZip).val(v);
			});
		});
	});

	$('#' + objLstState).html('<option value="">區/鄉/鎮/市</option>');




	/*objLstCity.length = arybCity2.length;
	for (var intCount = 0; intCount < arybCity2.length; intCount++) 
	{
		objLstCity.options[intCount].value = arybCity2[intCount];
		objLstCity.options[intCount].text = arybCity2[intCount];
		
	}
	objLstCity.selectedIndex = 0;*/
	//alert(aryCity[5]);
}

function initialbZone(objLstCity,objLstZone,objTxtZoneCode)
{
	changebZone(objLstCity,objLstZone,objTxtZoneCode);
}

function changebZone(objLstCity,objLstZone,objTxtZoneCode)
{
	intLstCityIndex = objLstCity.selectedIndex;
	intLstZoneIndex = objLstZone.selectedIndex;
	objLstZone.length = arybZone[intLstCityIndex].length;
	
	for (intCount = 0; intCount < arybZone[intLstCityIndex].length; intCount++) 
	{
		objLstZone.options[intCount].value = arybZone[intLstCityIndex][intCount];
		objLstZone.options[intCount].text = arybZone[intLstCityIndex][intCount];
	}

	objLstZone.selectedIndex = 0;	
	//if (objTxtZoneCode.value == ""){objTxtZoneCode.value = arybZipCode[intLstCityIndex][0];}
	objTxtZoneCode.value = arybZipCode[intLstCityIndex][0];
}

function changebZoneCode(objLstCity,objLstZone,objTxtZoneCode)
{
	intLstCityIndex = objLstCity.selectedIndex;
	intLstZoneIndex = objLstZone.selectedIndex;
	objTxtZoneCode.value = arybZipCode[intLstCityIndex][intLstZoneIndex];
}

function fromZipCode(zip, addr) {
	var city = "";
	var state = "";
	for (i=1 ; i<arybZipCode.length ; i++) {
		for (j=0 ; j<arybZipCode[i].length ; j++) {
			if (arybZipCode[i][j] == zip) {
				city = arybCity2[i];
				state = arybZone[i][j];
			}
		}
	}

	initialbCity(document.form1.city);
	initialbZone(document.form1.city, document.form1.state, document.form1.zip);
	setbCity(document.form1.city, document.form1.state, document.form1.zip, city, state);

	addr = addr.replace(city, "");
	addr = addr.replace(state, "");
	document.form1.street.value = addr;
}