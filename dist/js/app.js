'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
	function App() {
		_classCallCheck(this, App);

		this.ready();
		this.loading = $('.loading');
		$(window).load(function () {
			this.windowLoad();
		}.bind(this));
	}

	_createClass(App, [{
		key: 'ready',
		value: function ready() {
            if(device.desktop()) window.location.href = window.location.href.replace('/m/','/');
            
			this.page = $('.page');

			switch (this.page.attr('class').split('page ')[1]) {
				case 'index':
                    setTrackPV('pv_m_index');
					this.index = new Index();
					break;
				case 'login_member':
                    setTrackPV('pv_m_data_1');
					this.login_member = new Login_member();
					break;
				case 'login_member_nodata':
                    setTrackPV('pv_m_data_2');
					this.login_member_nodata = new Login_member_nodata();
					break;
				case 'login_member_nodata_confirm':
                    setTrackPV('pv_m_confirm');
					this.login_member_nodata_confirm = new Login_member_nodata_confirm();
					break;
				case 'login_number':
                    setTrackPV('pv_m_number');
					this.login_number = new Login_number();
					break;
				case 'login_number_success':
                    setTrackPV('pv_m_remind');
					this.login_number_success = new Login_number_success();
					break;
				case 'inquire':
                    setTrackPV('pv_m_inquire');
					this.inquire = new Inquire();
					break;
				case 'award_list':
                    setTrackPV('pv_m_winner');
					this.award_list = new Award_list();
					break;
				case 'award_info':
                    setTrackPV('pv_m_prize');
					this.award_info = new Award_info();
					break;
				case 'about':
                    setTrackPV('pv_m_rule');
					this.about = new About();
					break;
                case 'gamePass':
                    setTrackPV('pv_m_gamePass');
					this.gamePass = new GamePass();
					break;
			}
		}
	}, {
		key: 'windowLoad',
		value: function windowLoad() {
			this.loading.fadeOut();
		}
	}]);

	return App;
}();

$(function () {
	var app = new App();
});
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var About = function About() {
    _classCallCheck(this, About);

    this.HeaderModel = new HeaderModel();
    this.page = $('.page.about');
};
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Award_info = function Award_info() {
    _classCallCheck(this, Award_info);

    this.HeaderModel = new HeaderModel();
    this.page = $('.page.award_info');
};
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Award_list = function Award_list() {
    _classCallCheck(this, Award_list);

    this.HeaderModel = new HeaderModel();
    this.page = $('.page.award_list');
};
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HeaderModel = function () {
    function HeaderModel() {
        _classCallCheck(this, HeaderModel);

        FB.init({
            appId      : '1259657327430006',
            channelUrl : 'http://www.heysong-fin.com.tw/fin2016_q4/',
            status     : true,
            xfbml      : true,
            cookie     : true
        });

        this.header = $('.header');
        this.menu = $('.menu');

        this.menubtn = this.header.find('.menubtn');
        this.menubtn.on('click', function () {
            if (this.menubtn.hasClass('on')) this.openmenu(false);
            else {
                this.openmenu(true);
                setTrackPV('pv_m_menu');
            }
        }.bind(this));

        this.menua = this.menu.find('.menua');
        this.menua.on('click', function (e) {
            // this.menuaClick($(e.currentTarget).attr('class').split('menua ')[1]);
            this.menuaClick($(e.currentTarget).attr('class').replace('on','').split('menua ')[1].replace(' ',''),0);
        }.bind(this));
    }

    _createClass(HeaderModel, [{
        key: 'openmenu',
        value: function openmenu(_t) {
            if (_t) {
                this.menubtn.addClass('on');
                $('.menu').addClass('on');
            } else {
                this.menubtn.removeClass('on');
                $('.menu').removeClass('on');
            }
        }
    }, {
        key: 'menuaClick',
        value: function menuaClick(menulink) {
            switch (menulink) {
                case 'm1':
                    setTrackButton('btn_m_sign');
                    window.location.href = "login_member.php";
                    break;
                case 'm2':
                    setTrackButton('btn_m_inquire');
                    window.location.href = "inquire.php";
                    break;
                case 'm3':
                    setTrackButton('btn_m_rule');
                    window.location.href = "about.php";
                    break;
                case 'm4':
                    setTrackButton('btn_m_prize');
                    window.location.href = "award_info.php";
                    break;
                case 'm5':
                    setTrackButton('btn_m_winner');
                    alert('於105/11/16(三)公佈');
                    //window.location.href = "award_list.php";
                    break;
                case 'm6':
                    if (this.menubtn.hasClass('on')) setTrackButton('btn_m_share_fb');
                    else setTrackButton('btn_m_share_fb2');

                    //void(window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(location.href), 'share', 'width=600,height=400'));
                    FB.ui({             
                        method: 'feed',
                        display:"popup",
                        link: 'http://www.heysong-fin.com.tw/fin2016_q4'
                    }, function(response) {

                    });

                    break;
                case 'm7':
                    if (this.menubtn.hasClass('on')) setTrackButton('btn_m_game_menu');
                    else setTrackButton('btn_m_game');
                    window.location.href = "game_list.php";
                    //alert('遊戲將於11/2正式上線');
                    break;
                case 'm8':
                    if (this.menubtn.hasClass('on')) setTrackButton('btn_m_go_menu');
                    else {
                        if ($('.page').hasClass('index')) setTrackButton('btn_m_go');
                        else setTrackButton('btn_m_ticket');
                    }

                    window.location.href = "login_number.php";
                    break;
                case 'm9':
                    if (this.menubtn.hasClass('on')) setTrackButton('btn_m_index_menu');
                    else setTrackButton('btn_m_index');

                    window.location.href = "index.php";
                    break;
            }
        }
    }]);

    return HeaderModel;
}();
// module.exports = HeaderModel;
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Index = function () {
    function Index() {
        _classCallCheck(this, Index);

        this.HeaderModel = new HeaderModel();
        this.page = $('.page.index');

        this.banner_box = this.page.find('.banner_box');
        this.banner_box.each(this.bannerAni);
        this.banner = this.banner_box.find('.banner');
        this.banner.on('click', function (e) {
            if ($(e.currentTarget).index() === 0) {
                this.HeaderModel.menuaClick('m8');
            }
        }.bind(this));

        this.gamePlay_btn = this.page.find('.gamePlay_btn');
        this.gamePlay_btn.on('click', function () {
            this.HeaderModel.menuaClick('m7');
        }.bind(this));

        $(window).load(function(){
            console.log($('.page.index').height());
            var persent = $(window).height() / $('.page.index').height();
            $('.page.index').css('transform','scale('+ persent +')');
        });
    }

    _createClass(Index, [{
        key: 'bannerAni',
        value: function bannerAni() {
            var _box = $(this),
                banner = _box.find('.banner'),
                nowShow = 0,
                showtime = 3000;

            showbanner();
            function showbanner() {
                banner.removeClass('on').eq(nowShow).addClass('on');
                setTimeout(function () {
                    nowShow += 1;
                    if (nowShow >= banner.length) nowShow = 0;
                    if(nowShow==0) showtime=3000;
                    else showtime = 2000;
                    showbanner();
                }, showtime);
            }
        }
    }]);

    return Index;
}();
// module.exports = Index;
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Inquire = function Inquire() {
    _classCallCheck(this, Inquire);

    this.HeaderModel = new HeaderModel();
    this.page = $('.page.inquire');
};
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Login_member = function () {
    function Login_member() {
        _classCallCheck(this, Login_member);

        this.HeaderModel = new HeaderModel();
    }

    _createClass(Login_member, [{
        key: "bannerAni",
        value: function bannerAni() {}
    }]);

    return Login_member;
}();
// module.exports = Index;
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Login_member_nodata = function Login_member_nodata() {
    _classCallCheck(this, Login_member_nodata);

    this.HeaderModel = new HeaderModel();
    this.page = $('.page.login_member_nodata');
    this.checkbox = this.page.find('.checkbox');
    this.checkbox.on('click', function (e) {
        if ($(e.currentTarget).hasClass('on')) $(e.currentTarget).removeClass('on');else $(e.currentTarget).addClass('on');
    });
};
// module.exports = Index;
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Login_member_nodata_confirm = function Login_member_nodata_confirm() {
    _classCallCheck(this, Login_member_nodata_confirm);

    this.HeaderModel = new HeaderModel();
    this.page = $('.page.login_member_nodata_confirm');
};
// module.exports = Index;
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Login_number_sned = 0;
var Login_number = function Login_number() {
    _classCallCheck(this, Login_number);

    this.HeaderModel = new HeaderModel();
    this.verPopup = new VerPopup($('.verPopup'));
    this.page = $('.page.login_number');
    this.submit = this.page.find('.submit');
    /*this.submit.on('click', function () {
        this.verPopup.showverPopup(true);
    }.bind(this));*/
};

var VerPopup = function () {
    function VerPopup(dom) {
        _classCallCheck(this, VerPopup);

        this.verPopup = dom;
        this.main = this.verPopup.find('.main');
        this.bottle1 = this.verPopup.find('.bottle1');
        this.bottle2 = this.verPopup.find('.bottle2');
        this.drag_left = 0;
        this.og_left = this.bottle1.offset().left;
        this.og_right = this.bottle2.offset().left;
        this.bottle1W = this.bottle1.width();
        this.bottle2W = this.bottle2.width();

        this.bottle1.on('touchstart', function () {
            this.og_left = this.bottle1.offset().left;
            this.og_right = this.bottle2.offset().left;
            this.goal = this.og_right - this.og_left + this.bottle2W / 2 - this.bottle1W / 2;
            console.log(this.og_left);
            this.bottle1.bind('touchmove', this.bottle1touchmove.bind(this));
        }.bind(this));

        this.main.on('touchend', function () {
            this.bottle1.unbind('touchmove', this.bottle1touchmove.bind(this));
            this.bottle1.attr('style', '');
        }.bind(this));
    }

    _createClass(VerPopup, [{
        key: 'bottle1touchmove',
        value: function bottle1touchmove(e) {
            e = e.originalEvent.touches[0];

            this.drag_left = e.pageX - this.og_left - this.bottle1W / 2;
            if (this.drag_left < 0) this.drag_left = 0;else if (this.drag_left >= this.goal) {
                this.showverPopup(false);
                this.bottle1.unbind('touchmove', this.bottle1touchmove.bind(this));
                return;
            }

            this.bottle1.css('margin-left', this.drag_left);
        }
    }, {
        key: 'showverPopup',
        value: function showverPopup(_t) {
            if (_t) {
                setTrackPV('pv_m_country');
                this.verPopup.fadeIn(function() {
                    $.each($('.number'), function(i,v) {
                        $(this).val(old_sn[i]).removeClass('error').removeClass('ok');
                    });
                });
            } else {
                this.verPopup.fadeOut();
                //window.location.href = "login_number_success.php";

				if (Login_number_sned == 0) {
					var options = {
						type: 'post', 
						url: '/inc/sn.php',
						success: showCartResponse
					};

					$('.form-sn').ajaxSubmit(options);
					Login_number_sned = 1;
				}
            }
        }
    }]);

    return VerPopup;
}();
// module.exports = Index;
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Login_number_success = function Login_number_success() {
    _classCallCheck(this, Login_number_success);

    this.HeaderModel = new HeaderModel();
    this.page = $('.page.login_number_success');
    this.more = this.page.find('.more');
    this.back = this.page.find('.back');
    this.sharefb = this.page.find('.sharefb');

    this.more.on('click', function () {
        this.HeaderModel.menuaClick('m8');
    }.bind(this));
    this.back.on('click', function () {
        this.HeaderModel.menuaClick('m9');
    }.bind(this));
    this.sharefb.on('click', function () {
        this.HeaderModel.menuaClick('m6');
    }.bind(this));
};
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GamePass = function GamePass() {
    _classCallCheck(this, GamePass);

    this.HeaderModel = new HeaderModel();
    this.page = $('.page.gamePass');

    this.word = this.page.find('.gameword');
    this.gameNum = getUrlVars()['game'];
    if(this.gameNum==1) this.gameWord = '研究指出在口渴時，大腦處理口渴訊息佔用了大部分資源，在補水後就能得到釋放，上班族進而加快工作效率唷！';
    else if(this.gameNum==2) this.gameWord = '1小時的洗衣、曬衣過程，能幫助身體消耗78大卡，也等於作了100下仰臥起坐，做家事讓身體動一動，也要記得隨時補水喔！';
    else if(this.gameNum==3) this.gameWord = '乒乓球其實比你想像的累！除了可鍛鍊全身肌肉，還能提高反應力。運動別忘了適當休息，更要記得時補充流失的水份唷！';
    else if(this.gameNum==4) this.gameWord = '運動或戶外活動前兩小時，分階段補充500至800毫升的水，能讓身體有足夠的水份應付之後的消耗唷！';
    else if(this.gameNum==5) this.gameWord = '補水的目的不只是解渴，還能透過水循環讓代謝活絡，適時補充水份能幫助身體將廢物排出體外！';
    else this.gameWord = '研究指出在口渴時，大腦處理口渴訊息佔用了大部分資源，在補水後就能得到釋放，上班族進而加快工作效率唷！';
    this.word.html(this.gameWord);

    //ga
    var _num = this.gameNum;
    if(_num == 3) setTrackPV('pv_m_success_1');
    else if(_num == 4) setTrackPV('pv_m_success_2');
    else if(_num == 1) setTrackPV('pv_m_success_3');
    else if(_num == 5) setTrackPV('pv_m_success_4');
    else if(_num == 2) setTrackPV('pv_m_success_5');

    this.backindex = this.page.find('.backindex');
    this.backgamelist = this.page.find('.backgamelist');
    this.backindex.on('click',function(){
        var _num = this.gameNum;
        if(_num == 3) setTrackButton('pv_m_index_success_1');
        else if(_num == 4) setTrackButton('pv_m_index_success_2');
        else if(_num == 1) setTrackButton('pv_m_index_success_3');
        else if(_num == 5) setTrackButton('pv_m_index_success_4');
        else if(_num == 2) setTrackButton('pv_m_index_success_5');
        this.HeaderModel.menuaClick('m9');
    }.bind(this));

    this.backgamelist.on('click',function(){
        var _num = this.gameNum;
        if(_num == 3) setTrackButton('pv_m_game_success_1');
        else if(_num == 4) setTrackButton('pv_m_game_success_2');
        else if(_num == 1) setTrackButton('pv_m_game_success_3');
        else if(_num == 5) setTrackButton('pv_m_game_success_4');
        else if(_num == 2) setTrackButton('pv_m_game_success_5');
        this.HeaderModel.menuaClick('m7');
    }.bind(this));
    
};
function getUrlVars(){
  var vars=[],hash;var hashes=window.location.href.slice(window.location.href.indexOf('?')+1).split('&');
  for(var i=0;i<hashes.length;i++){hash=hashes[i].split('=');vars.push(hash[0]);vars[hash[0]]=hash[1]}
  return vars
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIm1vZHVsZXMvQWJvdXQuanMiLCJtb2R1bGVzL0F3YXJkX2luZm8uanMiLCJtb2R1bGVzL2F3YXJkX2xpc3QuanMiLCJtb2R1bGVzL0hlYWRlck1vZGVsLmpzIiwibW9kdWxlcy9JbmRleC5qcyIsIm1vZHVsZXMvSW5xdWlyZS5qcyIsIm1vZHVsZXMvTG9naW5fbWVtYmVyLmpzIiwibW9kdWxlcy9Mb2dpbl9tZW1iZXJfbm9kYXRhLmpzIiwibW9kdWxlcy9Mb2dpbl9tZW1iZXJfbm9kYXRhX2NvbmZpcm0uanMiLCJtb2R1bGVzL0xvZ2luX251bWJlci5qcyIsIm1vZHVsZXMvTG9naW5fbnVtYmVyX3N1Y2Nlc3MuanMiXSwibmFtZXMiOlsiQXBwIiwicmVhZHkiLCJsb2FkaW5nIiwiJCIsIndpbmRvdyIsImxvYWQiLCJ3aW5kb3dMb2FkIiwiYmluZCIsInBhZ2UiLCJhdHRyIiwic3BsaXQiLCJpbmRleCIsIkluZGV4IiwibG9naW5fbWVtYmVyIiwiTG9naW5fbWVtYmVyIiwibG9naW5fbWVtYmVyX25vZGF0YSIsIkxvZ2luX21lbWJlcl9ub2RhdGEiLCJsb2dpbl9tZW1iZXJfbm9kYXRhX2NvbmZpcm0iLCJMb2dpbl9tZW1iZXJfbm9kYXRhX2NvbmZpcm0iLCJsb2dpbl9udW1iZXIiLCJMb2dpbl9udW1iZXIiLCJsb2dpbl9udW1iZXJfc3VjY2VzcyIsIkxvZ2luX251bWJlcl9zdWNjZXNzIiwiaW5xdWlyZSIsIklucXVpcmUiLCJhd2FyZF9saXN0IiwiQXdhcmRfbGlzdCIsImF3YXJkX2luZm8iLCJBd2FyZF9pbmZvIiwiYWJvdXQiLCJBYm91dCIsImZhZGVPdXQiLCJhcHAiLCJIZWFkZXJNb2RlbCIsImhlYWRlciIsIm1lbnUiLCJtZW51YnRuIiwiZmluZCIsIm9uIiwiaGFzQ2xhc3MiLCJvcGVubWVudSIsIm1lbnVhIiwiZSIsIm1lbnVhQ2xpY2siLCJjdXJyZW50VGFyZ2V0IiwiX3QiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwibWVudWxpbmsiLCJsb2NhdGlvbiIsImhyZWYiLCJjb25zb2xlIiwibG9nIiwiYmFubmVyX2JveCIsImVhY2giLCJiYW5uZXJBbmkiLCJiYW5uZXIiLCJnYW1lUGxheV9idG4iLCJfYm94Iiwibm93U2hvdyIsInNob3diYW5uZXIiLCJlcSIsInNldFRpbWVvdXQiLCJsZW5ndGgiLCJjaGVja2JveCIsInZlclBvcHVwIiwiVmVyUG9wdXAiLCJzdWJtaXQiLCJzaG93dmVyUG9wdXAiLCJkb20iLCJtYWluIiwiYm90dGxlMSIsImJvdHRsZTIiLCJkcmFnX2xlZnQiLCJvZ19sZWZ0Iiwib2Zmc2V0IiwibGVmdCIsIm9nX3JpZ2h0IiwiYm90dGxlMVciLCJ3aWR0aCIsImJvdHRsZTJXIiwiZ29hbCIsImJvdHRsZTF0b3VjaG1vdmUiLCJ1bmJpbmQiLCJvcmlnaW5hbEV2ZW50IiwidG91Y2hlcyIsInBhZ2VYIiwiY3NzIiwiZmFkZUluIiwibW9yZSIsImJhY2siLCJzaGFyZWZiIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBTUE7QUFDTCxnQkFBYztBQUFBOztBQUNiLE9BQUtDLEtBQUw7QUFDQSxPQUFLQyxPQUFMLEdBQWVDLEVBQUUsVUFBRixDQUFmO0FBQ0FBLElBQUVDLE1BQUYsRUFBVUMsSUFBVixDQUFlLFlBQVU7QUFDeEIsUUFBS0MsVUFBTDtBQUNBLEdBRmMsQ0FFYkMsSUFGYSxDQUVSLElBRlEsQ0FBZjtBQUdBOzs7OzBCQUNPO0FBQ1AsUUFBS0MsSUFBTCxHQUFZTCxFQUFFLE9BQUYsQ0FBWjs7QUFFQSxXQUFRLEtBQUtLLElBQUwsQ0FBVUMsSUFBVixDQUFlLE9BQWYsRUFBd0JDLEtBQXhCLENBQThCLE9BQTlCLEVBQXVDLENBQXZDLENBQVI7QUFDQyxTQUFLLE9BQUw7QUFDQyxVQUFLQyxLQUFMLEdBQWEsSUFBSUMsS0FBSixFQUFiO0FBQ0E7QUFDRCxTQUFLLGNBQUw7QUFDQyxVQUFLQyxZQUFMLEdBQW9CLElBQUlDLFlBQUosRUFBcEI7QUFDQTtBQUNELFNBQUsscUJBQUw7QUFDQyxVQUFLQyxtQkFB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QyxxQkFBS3ZCLFFBQUwsQ0FBY2xDLE9BQWQ7QUFDQTNCLHVCQUFPNkMsUUFBUCxDQUFnQkMsSUFBaEIsR0FBcUIsMkJBQXJCO0FBQ0o7QUFDSjs7Ozs7QUFFTDs7Ozs7SUN6RE01Qix1QkFDRixnQ0FBYztBQUFBOztBQUNWLFNBQUtXLFdBQUwsR0FBbUIsSUFBSUEsV0FBSixFQUFuQjtBQUNBLFNBQUt6QixJQUFMLEdBQVlMLEVBQUUsNEJBQUYsQ0FBWjtBQUNBLFNBQUtzRixJQUFMLEdBQVksS0FBS2pGLElBQUwsQ0FBVTZCLElBQVYsQ0FBZSxPQUFmLENBQVo7QUFDQSxTQUFLcUQsSUFBTCxHQUFZLEtBQUtsRixJQUFMLENBQVU2QixJQUFWLENBQWUsT0FBZixDQUFaO0FBQ0EsU0FBS3NELE9BQUwsR0FBZSxLQUFLbkYsSUFBTCxDQUFVNkIsSUFBVixDQUFlLFVBQWYsQ0FBZjs7QUFFQSxTQUFLb0QsSUFBTCxDQUFVbkQsRUFBVixDQUFhLE9BQWIsRUFBcUIsWUFBVTtBQUMzQixhQUFLTCxXQUFMLENBQWlCVSxVQUFqQixDQUE0QixJQUE1QjtBQUNILEtBRm9CLENBRW5CcEMsSUFGbUIsQ0FFZCxJQUZjLENBQXJCO0FBR0EsU0FBS21GLElBQUwsQ0FBVXBELEVBQVYsQ0FBYSxPQUFiLEVBQXFCLFlBQVU7QUFDM0IsYUFBS0wsV0FBTCxDQUFpQlUsVUFBakIsQ0FBNEIsSUFBNUI7QUFDSCxLQUZvQixDQUVuQnBDLElBRm1CLENBRWQsSUFGYyxDQUFyQjtBQUdBLFNBQUtvRixPQUFMLENBQWFyRCxFQUFiLENBQWdCLE9BQWhCLEVBQXdCLFlBQVU7QUFDOUIsYUFBS0wsV0FBTCxDQUFpQlUsVUFBakIsQ0FBNEIsSUFBNUI7QUFDSCxLQUZ1QixDQUV0QnBDLElBRnNCLENBRWpCLElBRmlCLENBQXhCO0FBR0giLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMucmVhZHkoKTtcclxuXHRcdHRoaXMubG9hZGluZyA9ICQoJy5sb2FkaW5nJyk7XHJcblx0XHQkKHdpbmRvdykubG9hZChmdW5jdGlvbigpe1xyXG5cdFx0XHR0aGlzLndpbmRvd0xvYWQoKTtcclxuXHRcdH0uYmluZCh0aGlzKSk7XHJcblx0fVxyXG5cdHJlYWR5KCkge1xyXG5cdFx0dGhpcy5wYWdlID0gJCgnLnBhZ2UnKTtcclxuXHJcblx0XHRzd2l0Y2ggKHRoaXMucGFnZS5hdHRyKCdjbGFzcycpLnNwbGl0KCdwYWdlICcpWzFdKSB7XHJcblx0XHRcdGNhc2UgJ2luZGV4JzpcclxuXHRcdFx0XHR0aGlzLmluZGV4ID0gbmV3IEluZGV4KCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJ2xvZ2luX21lbWJlcic6XHJcblx0XHRcdFx0dGhpcy5sb2dpbl9tZW1iZXIgPSBuZXcgTG9naW5fbWVtYmVyKCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJ2xvZ2luX21lbWJlcl9ub2RhdGEnOlxyXG5cdFx0XHRcdHRoaXMubG9naW5fbWVtYmVyX25vZGF0YSA9IG5ldyBMb2dpbl9tZW1iZXJfbm9kYXRhKCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJ2xvZ2luX21lbWJlcl9ub2RhdGFfY29uZmlybSc6XHJcblx0XHRcdFx0dGhpcy5sb2dpbl9tZW1iZXJfbm9kYXRhX2NvbmZpcm0gPSBuZXcgTG9naW5fbWVtYmVyX25vZGF0YV9jb25maXJtKCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJ2xvZ2luX251bWJlcic6XHJcblx0XHRcdFx0dGhpcy5sb2dpbl9udW1iZXIgPSBuZXcgTG9naW5fbnVtYmVyKCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJ2xvZ2luX251bWJlcl9zdWNjZXNzJzpcclxuXHRcdFx0XHR0aGlzLmxvZ2luX251bWJlcl9zdWNjZXNzID0gbmV3IExvZ2luX251bWJlcl9zdWNjZXNzKCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJ2lucXVpcmUnOlxyXG5cdFx0XHRcdHRoaXMuaW5xdWlyZSA9IG5ldyBJbnF1aXJlKCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJ2F3YXJkX2xpc3QnOlxyXG5cdFx0XHRcdHRoaXMuYXdhcmRfbGlzdCA9IG5ldyBBd2FyZF9saXN0KCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJ2F3YXJkX2luZm8nOlxyXG5cdFx0XHRcdHRoaXMuYXdhcmRfaW5mbyA9IG5ldyBBd2FyZF9pbmZvKCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJ2Fib3V0JzpcclxuXHRcdFx0XHR0aGlzLmFib3V0ID0gbmV3IEFib3V0KCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG5cdHdpbmRvd0xvYWQoKXtcclxuXHRcdHRoaXMubG9hZGluZy5mYWRlT3V0KCk7XHJcblx0fVxyXG59XHJcblxyXG4kKGZ1bmN0aW9uKCkge1xyXG5cdHZhciBhcHAgPSBuZXcgQXBwKCk7XHJcbn0pO1xyXG5cclxuIiwiY2xhc3MgQWJvdXQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5IZWFkZXJNb2RlbCA9IG5ldyBIZWFkZXJNb2RlbCgpO1xyXG4gICAgICAgIHRoaXMucGFnZSA9ICQoJy5wYWdlLmFib3V0Jyk7XHJcbiAgICB9XHJcbn0iLCJjbGFzcyBBd2FyZF9pbmZvIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuSGVhZGVyTW9kZWwgPSBuZXcgSGVhZGVyTW9kZWwoKTtcclxuICAgICAgICB0aGlzLnBhZ2UgPSAkKCcucGFnZS5hd2FyZF9pbmZvJyk7XHJcbiAgICB9XHJcbn0iLCJjbGFzcyBBd2FyZF9saXN0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuSGVhZGVyTW9kZWwgPSBuZXcgSGVhZGVyTW9kZWwoKTtcclxuICAgICAgICB0aGlzLnBhZ2UgPSAkKCcucGFnZS5hd2FyZF9saXN0Jyk7XHJcbiAgICB9XHJcbn0iLCJjbGFzcyBIZWFkZXJNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmhlYWRlciA9ICQoJy5oZWFkZXInKTtcclxuICAgICAgICB0aGlzLm1lbnUgPSAkKCcubWVudScpO1xyXG5cclxuICAgICAgICB0aGlzLm1lbnVidG4gPSB0aGlzLmhlYWRlci5maW5kKCcubWVudWJ0bicpO1xyXG4gICAgICAgIHRoaXMubWVudWJ0bi5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMubWVudWJ0bi5oYXNDbGFzcygnb24nKSkgdGhpcy5vcGVubWVudShmYWxzZSk7XHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5vcGVubWVudSh0cnVlKTtcclxuICAgICAgICB9LmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICB0aGlzLm1lbnVhID0gdGhpcy5tZW51LmZpbmQoJy5tZW51YScpO1xyXG4gICAgICAgIHRoaXMubWVudWEub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgdGhpcy5tZW51YUNsaWNrKCQoZS5jdXJyZW50VGFyZ2V0KS5hdHRyKCdjbGFzcycpLnNwbGl0KCdtZW51YSAnKVsxXSk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuICAgIG9wZW5tZW51KF90KSB7XHJcbiAgICAgICAgaWYoX3Qpe1xyXG4gICAgICAgICAgICB0aGlzLm1lbnVidG4uYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICQoJy5tZW51JykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMubWVudWJ0bi5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJCgnLm1lbnUnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBtZW51YUNsaWNrKG1lbnVsaW5rKXtcclxuICAgICAgICBzd2l0Y2ggKG1lbnVsaW5rKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ20xJzpcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmPVwibG9naW5fbWVtYmVyLmh0bWxcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdtMic6XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZj1cImlucXVpcmUuaHRtbFwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ20zJzpcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmPVwiYWJvdXQuaHRtbFwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ200JzpcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmPVwiYXdhcmRfaW5mby5odG1sXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbTUnOlxyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWY9XCJhd2FyZF9saXN0Lmh0bWxcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdtNic6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2hhcmUgZmInKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdtNyc6XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZj1cImdhbWVfbGlzdC5odG1sXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbTgnOlxyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWY9XCJsb2dpbl9udW1iZXIuaHRtbFwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ205JzpcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmPVwiaW5kZXguaHRtbFwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vIG1vZHVsZS5leHBvcnRzID0gSGVhZGVyTW9kZWw7IiwiY2xhc3MgSW5kZXgge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5IZWFkZXJNb2RlbCA9IG5ldyBIZWFkZXJNb2RlbCgpO1xyXG4gICAgICAgIHRoaXMucGFnZSA9ICQoJy5wYWdlLmluZGV4Jyk7XHJcblxyXG4gICAgICAgIHRoaXMuYmFubmVyX2JveCA9IHRoaXMucGFnZS5maW5kKCcuYmFubmVyX2JveCcpO1xyXG4gICAgICAgIHRoaXMuYmFubmVyX2JveC5lYWNoKHRoaXMuYmFubmVyQW5pKTtcclxuICAgICAgICB0aGlzLmJhbm5lciA9IHRoaXMuYmFubmVyX2JveC5maW5kKCcuYmFubmVyJyk7XHJcbiAgICAgICAgdGhpcy5iYW5uZXIub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgaWYoJChlLmN1cnJlbnRUYXJnZXQpLmluZGV4KCkgPT09IDApIHRoaXMuSGVhZGVyTW9kZWwubWVudWFDbGljaygnbTgnKTtcclxuICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXlfYnRuID0gdGhpcy5wYWdlLmZpbmQoJy5nYW1lUGxheV9idG4nKTtcclxuICAgICAgICB0aGlzLmdhbWVQbGF5X2J0bi5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHRoaXMuSGVhZGVyTW9kZWwubWVudWFDbGljaygnbTcnKTtcclxuICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG4gICAgYmFubmVyQW5pKCl7XHJcbiAgICAgICAgdmFyIF9ib3ggPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICBiYW5uZXIgPSBfYm94LmZpbmQoJy5iYW5uZXInKSxcclxuICAgICAgICAgICAgbm93U2hvdyA9IDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2hvd2Jhbm5lcigpO1xyXG4gICAgICAgIGZ1bmN0aW9uIHNob3diYW5uZXIoKXtcclxuICAgICAgICAgICAgYmFubmVyLnJlbW92ZUNsYXNzKCdvbicpLmVxKG5vd1Nob3cpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBub3dTaG93ICs9MTtcclxuICAgICAgICAgICAgICAgIGlmKG5vd1Nob3c+PWJhbm5lci5sZW5ndGgpIG5vd1Nob3cgPSAwO1xyXG4gICAgICAgICAgICAgICAgc2hvd2Jhbm5lcigpO1xyXG4gICAgICAgICAgICB9LDUwMDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vLyBtb2R1bGUuZXhwb3J0cyA9IEluZGV4OyIsImNsYXNzIElucXVpcmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5IZWFkZXJNb2RlbCA9IG5ldyBIZWFkZXJNb2RlbCgpO1xyXG4gICAgICAgIHRoaXMucGFnZSA9ICQoJy5wYWdlLmlucXVpcmUnKTtcclxuICAgIH1cclxufSIsImNsYXNzIExvZ2luX21lbWJlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLkhlYWRlck1vZGVsID0gbmV3IEhlYWRlck1vZGVsKCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBiYW5uZXJBbmkoKXtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG4vLyBtb2R1bGUuZXhwb3J0cyA9IEluZGV4OyIsImNsYXNzIExvZ2luX21lbWJlcl9ub2RhdGEge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5IZWFkZXJNb2RlbCA9IG5ldyBIZWFkZXJNb2RlbCgpO1xyXG4gICAgICAgIHRoaXMucGFnZSA9ICQoJy5wYWdlLmxvZ2luX21lbWJlcl9ub2RhdGEnKTtcclxuICAgICAgICB0aGlzLmNoZWNrYm94ID0gdGhpcy5wYWdlLmZpbmQoJy5jaGVja2JveCcpO1xyXG4gICAgICAgIHRoaXMuY2hlY2tib3gub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgaWYoJChlLmN1cnJlbnRUYXJnZXQpLmhhc0NsYXNzKCdvbicpKSAkKGUuY3VycmVudFRhcmdldCkucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgIGVsc2UgJChlLmN1cnJlbnRUYXJnZXQpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbi8vIG1vZHVsZS5leHBvcnRzID0gSW5kZXg7IiwiY2xhc3MgTG9naW5fbWVtYmVyX25vZGF0YV9jb25maXJtIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuSGVhZGVyTW9kZWwgPSBuZXcgSGVhZGVyTW9kZWwoKTtcclxuICAgICAgICB0aGlzLnBhZ2UgPSAkKCcucGFnZS5sb2dpbl9tZW1iZXJfbm9kYXRhX2NvbmZpcm0nKTtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG4vLyBtb2R1bGUuZXhwb3J0cyA9IEluZGV4OyIsImNsYXNzIExvZ2luX251bWJlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLkhlYWRlck1vZGVsID0gbmV3IEhlYWRlck1vZGVsKCk7XHJcbiAgICAgICAgdGhpcy52ZXJQb3B1cCA9IG5ldyBWZXJQb3B1cCgkKCcudmVyUG9wdXAnKSk7XHJcbiAgICAgICAgdGhpcy5wYWdlID0gJCgnLnBhZ2UubG9naW5fbnVtYmVyJyk7XHJcbiAgICAgICAgdGhpcy5zdWJtaXQgPSB0aGlzLnBhZ2UuZmluZCgnLnN1Ym1pdCcpO1xyXG4gICAgICAgIHRoaXMuc3VibWl0Lm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdGhpcy52ZXJQb3B1cC5zaG93dmVyUG9wdXAodHJ1ZSk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxufVxyXG5jbGFzcyBWZXJQb3B1cCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihkb20pIHtcclxuICAgICAgICB0aGlzLnZlclBvcHVwID0gZG9tO1xyXG4gICAgICAgIHRoaXMubWFpbiA9IHRoaXMudmVyUG9wdXAuZmluZCgnLm1haW4nKTtcclxuICAgICAgICB0aGlzLmJvdHRsZTEgPSB0aGlzLnZlclBvcHVwLmZpbmQoJy5ib3R0bGUxJyk7XHJcbiAgICAgICAgdGhpcy5ib3R0bGUyID0gdGhpcy52ZXJQb3B1cC5maW5kKCcuYm90dGxlMicpO1xyXG4gICAgICAgIHRoaXMuZHJhZ19sZWZ0ID0gMDtcclxuICAgICAgICB0aGlzLm9nX2xlZnQgPSB0aGlzLmJvdHRsZTEub2Zmc2V0KCkubGVmdDtcclxuICAgICAgICB0aGlzLm9nX3JpZ2h0ID0gdGhpcy5ib3R0bGUyLm9mZnNldCgpLmxlZnQ7XHJcbiAgICAgICAgdGhpcy5ib3R0bGUxVyA9IHRoaXMuYm90dGxlMS53aWR0aCgpO1xyXG4gICAgICAgIHRoaXMuYm90dGxlMlcgPSB0aGlzLmJvdHRsZTIud2lkdGgoKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmJvdHRsZTEub24oJ3RvdWNoc3RhcnQnLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHRoaXMub2dfbGVmdCA9IHRoaXMuYm90dGxlMS5vZmZzZXQoKS5sZWZ0O1xyXG4gICAgICAgICAgICB0aGlzLm9nX3JpZ2h0ID0gdGhpcy5ib3R0bGUyLm9mZnNldCgpLmxlZnQ7XHJcbiAgICAgICAgICAgIHRoaXMuZ29hbCA9IHRoaXMub2dfcmlnaHQgLSB0aGlzLm9nX2xlZnQgKyB0aGlzLmJvdHRsZTJXLzIgLSB0aGlzLmJvdHRsZTFXLzI7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMub2dfbGVmdCk7XHJcbiAgICAgICAgICAgIHRoaXMuYm90dGxlMS5iaW5kKCd0b3VjaG1vdmUnLCB0aGlzLmJvdHRsZTF0b3VjaG1vdmUuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm1haW4ub24oJ3RvdWNoZW5kJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB0aGlzLmJvdHRsZTEudW5iaW5kKCd0b3VjaG1vdmUnLCB0aGlzLmJvdHRsZTF0b3VjaG1vdmUuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIHRoaXMuYm90dGxlMS5hdHRyKCdzdHlsZScsJycpO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcbiAgICBib3R0bGUxdG91Y2htb3ZlKGUpe1xyXG4gICAgICAgIGUgPSBlLm9yaWdpbmFsRXZlbnQudG91Y2hlc1swXTtcclxuXHJcbiAgICAgICAgdGhpcy5kcmFnX2xlZnQgPSBlLnBhZ2VYIC0gdGhpcy5vZ19sZWZ0IC0gdGhpcy5ib3R0bGUxVyAvIDI7XHJcbiAgICAgICAgaWYodGhpcy5kcmFnX2xlZnQ8MCkgdGhpcy5kcmFnX2xlZnQ9MDtcclxuICAgICAgICBlbHNlIGlmKHRoaXMuZHJhZ19sZWZ0ID49IHRoaXMuZ29hbCl7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd3ZlclBvcHVwKGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5ib3R0bGUxLnVuYmluZCgndG91Y2htb3ZlJywgdGhpcy5ib3R0bGUxdG91Y2htb3ZlLmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmJvdHRsZTEuY3NzKCdtYXJnaW4tbGVmdCcsdGhpcy5kcmFnX2xlZnQpO1xyXG4gICAgfVxyXG4gICAgc2hvd3ZlclBvcHVwKF90KXtcclxuICAgICAgICBpZihfdCkgdGhpcy52ZXJQb3B1cC5mYWRlSW4oKTtcclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgdGhpcy52ZXJQb3B1cC5mYWRlT3V0KCk7XHJcbiAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZj1cImxvZ2luX251bWJlcl9zdWNjZXNzLmh0bWxcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy8gbW9kdWxlLmV4cG9ydHMgPSBJbmRleDsiLCJjbGFzcyBMb2dpbl9udW1iZXJfc3VjY2VzcyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLkhlYWRlck1vZGVsID0gbmV3IEhlYWRlck1vZGVsKCk7XHJcbiAgICAgICAgdGhpcy5wYWdlID0gJCgnLnBhZ2UubG9naW5fbnVtYmVyX3N1Y2Nlc3MnKTtcclxuICAgICAgICB0aGlzLm1vcmUgPSB0aGlzLnBhZ2UuZmluZCgnLm1vcmUnKTtcclxuICAgICAgICB0aGlzLmJhY2sgPSB0aGlzLnBhZ2UuZmluZCgnLmJhY2snKTtcclxuICAgICAgICB0aGlzLnNoYXJlZmIgPSB0aGlzLnBhZ2UuZmluZCgnLnNoYXJlZmInKTtcclxuXHJcbiAgICAgICAgdGhpcy5tb3JlLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdGhpcy5IZWFkZXJNb2RlbC5tZW51YUNsaWNrKCdtOCcpO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5iYWNrLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdGhpcy5IZWFkZXJNb2RlbC5tZW51YUNsaWNrKCdtOScpO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5zaGFyZWZiLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdGhpcy5IZWFkZXJNb2RlbC5tZW51YUNsaWNrKCdtNicpO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcbn0iXX0=
