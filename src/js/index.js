var mobile = (!/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? false : true);
var pathname = location.pathname;
var old_val='', checked=1;
var old_sn = ['', '', '', ''];

$("document").ready(function(){
	//基本資料
	$('.name, .idcard, .email, .phone, .addr, .vercode').click(function() {
		if ($(this).css('color') == "rgb(255, 0, 0)") {
			if (!$(this).hasClass('number')) $(this).val(old_val).css('color', '#717171');
			else {
				idx = $('.number').index(this);
				$(this).val(old_sn[idx]).css('color', '#717171');
			}
		}
	});

	$('.number').click(function() {
		checked = 0;
		if ($(this).hasClass('ok') || $(this).hasClass('error')) {
			idx = $('.number').index(this);
			$(this).val(old_sn[idx]).removeClass('ok').removeClass('error');
		}
	});

	//join
	$('.form-join .submitbtn').click(function() {
		name = $('.name').val();

		var chk = true;
		if (name == "" || name.length < 2) chk = false;
		else {
			for (i=0 ; i<name.length ; i++) {
				if(!name.substring(i,(i+1)).match(/[\u4E00-\u9FA5]/g)) {
					chk = false;
					break;
				}
			}
		}

		if (!chk) {
			old_val = name;
			$('.name').val('請填寫正確中文姓名!').css('color', '#f00');
			return false;
		}

		ident = $('.idcard').val();
		$('.idcard').val(ident.toUpperCase());
		if (!checkTwID(ident)) {
			old_val = ident;
			$('.idcard').val('需要一位英文字母與九位數字!').css('color', '#f00');
			return false;
		}

		email = $('.email').val();
		if (email.search(/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/) == -1) {
			old_val = email;
			$('.email').val('mail格式需有@!').css('color', '#f00');
			return false;
		}

		phone = $('.phone').val();
		if (phone.length != 10 || phone.substring(0,2) != "09" || phone.search(/[\D]/) != -1) {
			old_val = phone;
			$('.phone').val('請輸入十位數號碼!').css('color', '#f00');
			return false;
		}

		if ($('.male option:selected').text() == "請選擇性別") {
			alert("請選擇性別!");
			$('.male').focus();
			return false;
		}

		if ($('.age option:selected').text() == "請選擇年齡") {
			alert("請選擇年齡!");
			$('.age').focus();
			return false;
		}

		city = $('#city option:selected').text();
		if (city == "選擇縣市") {
			alert("選擇縣市!");
			$('#city').focus();
			return false;
		}

		street = $('.addr').val();
		if (street == "") {
			old_val = street;
			$('.addr').val('需輸入地址以利後續中獎寄送!').css('color', '#f00');
			return false;
		}

		if (!$(".checkbox").hasClass('on')) {
			alert("請勾選 「我已閱讀並同意活動內容與以上隱私權條款」!");
			return false;
		}

		if (mobile) setTrackButton('btn_m_send_2');
		else setTrackButton('btn_send_2');

		var options = {
			type: 'post', 
			url: '/inc/step1.php',
			success: showCartResponse
		};

		$('.form-join').ajaxSubmit(options); 
	});

	//modify
	$('.form-confirm .modify').click(function() {
		if (mobile) setTrackButton('btn_m_modify');
		else setTrackButton('btn_modify');

		location.href = 'login_member_nodata.php';
	});

	//confirm
	$('.form-confirm .submit').click(function() {
		if (mobile) setTrackButton('btn_m_confirm_send');
		else setTrackButton('btn_confirm_send');

		var options = {
			type: 'post', 
			url: '/inc/step2.php',
			success: showCartResponse
		};

		$('.form-confirm').ajaxSubmit(options); 
	});

	//login
	$('.form-login .submitbtn').click(function() {
		ident = $('.idcard').val();
		$('.idcard').val(ident.toUpperCase());
		if (!checkTwID(ident)) {
			old_val = ident;
			$('.idcard').val('請輸入正確身分證字號!').css('color', '#f00');
			return false;
		}

		phone = $('.phone').val();
		if (phone.length != 10 || phone.substring(0,2) != "09" || phone.search(/[\D]/) != -1) {
			old_val = phone;
			$('.phone').val('請輸入有效聯絡手機號碼!').css('color', '#f00');
			return false;
		}

		auth = $('.vercode').val();
		if (auth.length != 4 || !parseInt(auth)) {
			old_val = auth;
			$('.vercode').val('請輸入4碼半型數字').css('color', '#f00');
			return false;
		}

		if (mobile) setTrackButton('btn_m_send_1');
		else setTrackButton('btn_send_1');

		var options = {
			type: 'post', 
			url: '/inc/login.php',
			success: showCartResponse
		};

		$('.form-login').ajaxSubmit(options); 
	});

	//type sn
	$('.number').blur(function() {
		var obj = $(this);
		var idx = $('.number').index(this);
		old_sn[idx] = $(this).val();

		if (old_sn[idx] != "" && !$(this).hasClass('ok') && !$(this).hasClass('error')) {
			if (old_sn[idx].length != 9) $(this).val('序號輸入錯誤').addClass('error');
			else {
				$.post('/inc/sn.php', {'type':1, 'sn':old_sn[idx]}, function(result) {
					checked = 1;

					result = result.split("|");
					if (result[0] == "finish") obj.val('驗證成功').addClass('ok');
					else {
						sn = result[1].split("-");

						if (sn[0] == "e") obj.val('序號輸入錯誤').addClass('error');
						else if (sn[0] == "r") obj.val('序號重複登錄').addClass('error');
					}
				});
			}
		}
	});

	$('.form-sn .submit').click(function() {
		var i = setInterval(function() {
			if (checked == 1) {
				clearInterval(i);
				checked = 0;

				var sn=0,err=0,send=1;
				$.each($('.number'), function(i,v) {
					val = old_sn[i];
					if (val != "") {
						if (val.length == 9) {
							if ($(this).hasClass('error')) {
								send = 0;
								err = (i+1);
							} else {
								$.each($('.number'), function(i2,v2) {
									if (i != i2 && val == v2) {
										err = (i+1);
									}
								});

								if (err == 0) sn++;
							}
						} else err = (i+1);
					}
				});

				if (sn == 0 && err == 0) {
					$('.number').eq(0).val('請至少輸入一組序號!');
					if (!$('.number').eq(0).hasClass('error')) $('.number').eq(0).addClass('error');

					return false;
				}

				if (err > 0) {
					if (!$('.number').eq(err-1).hasClass('error')) $('.number').eq(err-1).addClass('error');
					return false;
				}

				if (sn > 0 && err == 0 && send == 1) {
					if (mobile) setTrackButton('btn_m_number_send');
					else setTrackButton('btn_number_send');

					verPopup = new VerPopup($('.verPopup'));
					verPopup.showverPopup(true);

					/*var options = {
						type: 'post', 
						url: '/inc/sn.php',
						success: showCartResponse
					};

					$('.form-sn').ajaxSubmit(options);*/
					send = 0;
				}
			}
		}, 100);
	});

	//fb share
	$('.btn-fb').click(function() {
		void(window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent('http://www.heysong-fin.com.tw/fin2016_q4'), 'share', 'width=600,height=400'));
		//alert(encodeURIComponent('http://www.heysong-sarsaparilla-2015sp.com/'))
	});

	//search winner list
	$('.searchbox .submit').click(function() {
		if (mobile) setTrackButton('btn_m_inquire');
		else setTrackButton('btn_inquire');
	});
});

function showCartResponse(responseText, statusText, xhr, $form)  { 
	responseText = responseText.split("|");
	if (responseText[0] == "finish") {
		location.href = responseText[1];
	} else {
		if (responseText[1].indexOf("-") > 0) {
			sn = responseText[1].split("-");

			old_val = $('.number').eq(sn[1]-1).val();
			if (sn[0] == "e") $('.number').eq(sn[1]-1).val('序號輸入錯誤').addClass('error');
			else if (sn[0] == "r") $('.number').eq(sn[1]-1).val('序號重複').addClass('error');
		} else if (responseText[1] == "") {
			if (responseText[2] != "") alert(responseText[2]);
		} else {
			old_val = $('.' + responseText[1]).val();
			$('.' + responseText[1]).val(responseText[2]).css('color', '#f00');
		}
	}
} 

function checkTwID(id){
	var city = new Array(
        1,10,19,28,37,46,55,64,39,73,82, 2,11,
        20,48,29,38,47,56,65,74,83,21, 3,12,30
	);

	id = id.toUpperCase();

	if (id.search(/^[A-Z](1|2)\d{8}$/i) == -1) return false;
	else {
		id = id.split('');
		var total = city[id[0].charCodeAt(0)-65];

		for(var i=1; i<=8; i++)
			total += eval(id[i]) * (9 - i);

		total += eval(id[9]);
		return ((total%10 == 0 ));
	}
}