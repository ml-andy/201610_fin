'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
	function App() {
		_classCallCheck(this, App);

		this.ready();
	}

	_createClass(App, [{
		key: 'ready',
		value: function ready() {
			this.page = $('.page');

			switch (this.page.attr('class').split('page ')[1]) {
				case 'index':
					this.index = new Index();
					break;
				case 'login_member':
					this.login_member = new Login_member();
					break;
				case 'login_member_nodata':
					this.login_member_nodata = new Login_member_nodata();
					break;
				case 'login_member_nodata_confirm':
					this.login_member_nodata_confirm = new Login_member_nodata_confirm();
					break;
				case 'login_number':
					this.login_number = new Login_number();
					break;
				case 'login_number_success':
					this.login_number_success = new Login_number_success();
					break;
			}
		}
	}]);

	return App;
}();

$(function () {
	var app = new App();
});
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HeaderModel = function () {
    function HeaderModel() {
        _classCallCheck(this, HeaderModel);

        this.header = $('.header');
        this.menu = $('.menu');

        this.menubtn = this.header.find('.menubtn');
        this.menubtn.on('click', function () {
            if (this.menubtn.hasClass('on')) this.openmenu(false);else this.openmenu(true);
        }.bind(this));

        this.menua = this.menu.find('.menua');
        this.menua.on('click', function (e) {
            this.menuaClick($(e.currentTarget).attr('class').split('menua ')[1]);
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
                    window.location.href = "login_member.html";
                    break;
                case 'm2':
                    window.location.href = "inquire.html";
                    break;
                case 'm3':
                    window.location.href = "about.html";
                    break;
                case 'm4':
                    window.location.href = "award_info.html";
                    break;
                case 'm5':
                    window.location.href = "award_list.html";
                    break;
                case 'm6':
                    console.log('share fb');
                    break;
                case 'm7':
                    window.location.href = "game_list.html";
                    break;
                case 'm8':
                    window.location.href = "login_number.html";
                    break;
                case 'm9':
                    window.location.href = "index.html";
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
            if ($(e.currentTarget).index() === 0) this.HeaderModel.menuaClick('m8');
        }.bind(this));

        this.gamePlay_btn = this.page.find('.gamePlay_btn');
        this.gamePlay_btn.on('click', function () {
            this.HeaderModel.menuaClick('m7');
        }.bind(this));
    }

    _createClass(Index, [{
        key: 'bannerAni',
        value: function bannerAni() {
            var _box = $(this),
                banner = _box.find('.banner'),
                nowShow = 0;

            showbanner();
            function showbanner() {
                banner.removeClass('on').eq(nowShow).addClass('on');
                setTimeout(function () {
                    nowShow += 1;
                    if (nowShow >= banner.length) nowShow = 0;
                    showbanner();
                }, 5000);
            }
        }
    }]);

    return Index;
}();
// module.exports = Index;
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

var Login_number = function Login_number() {
    _classCallCheck(this, Login_number);

    this.HeaderModel = new HeaderModel();
    this.verPopup = new VerPopup($('.verPopup'));
    this.page = $('.page.login_number');
    this.submit = this.page.find('.submit');
    this.submit.on('click', function () {
        this.verPopup.showverPopup(true);
    }.bind(this));
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
            if (_t) this.verPopup.fadeIn();else {
                this.verPopup.fadeOut();
                window.location.href = "login_number_success.html";
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIm1vZHVsZXMvSGVhZGVyTW9kZWwuanMiLCJtb2R1bGVzL0luZGV4LmpzIiwibW9kdWxlcy9Mb2dpbl9tZW1iZXIuanMiLCJtb2R1bGVzL0xvZ2luX21lbWJlcl9ub2RhdGEuanMiLCJtb2R1bGVzL0xvZ2luX21lbWJlcl9ub2RhdGFfY29uZmlybS5qcyIsIm1vZHVsZXMvTG9naW5fbnVtYmVyLmpzIiwibW9kdWxlcy9Mb2dpbl9udW1iZXJfc3VjY2Vzcy5qcyJdLCJuYW1lcyI6WyJBcHAiLCJyZWFkeSIsInBhZ2UiLCIkIiwiYXR0ciIsInNwbGl0IiwiaW5kZXgiLCJJbmRleCIsImxvZ2luX21lbWJlciIsIkxvZ2luX21lbWJlciIsImxvZ2luX21lbWJlcl9ub2RhdGEiLCJMb2dpbl9tZW1iZXJfbm9kYXRhIiwibG9naW5fbWVtYmVyX25vZGF0YV9jb25maXJtIiwiTG9naW5fbWVtYmVyX25vZGF0YV9jb25maXJtIiwibG9naW5fbnVtYmVyIiwiTG9naW5fbnVtYmVyIiwibG9naW5fbnVtYmVyX3N1Y2Nlc3MiLCJMb2dpbl9udW1iZXJfc3VjY2VzcyIsImFwcCIsIkhlYWRlck1vZGVsIiwiaGVhZGVyIiwibWVudSIsIm1lbnVidG4iLCJmaW5kIiwib24iLCJoYXNDbGFzcyIsIm9wZW5tZW51IiwiYmluZCIsIm1lbnVhIiwiZSIsIm1lbnVhQ2xpY2siLCJjdXJyZW50VGFyZ2V0IiwiX3QiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwibWVudWxpbmsiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJjb25zb2xlIiwibG9nIiwiYmFubmVyX2JveCIsImVhY2giLCJiYW5uZXJBbmkiLCJiYW5uZXIiLCJnYW1lUGxheV9idG4iLCJfYm94Iiwibm93U2hvdyIsInNob3diYW5uZXIiLCJlcSIsInNldFRpbWVvdXQiLCJsZW5ndGgiLCJjaGVja2JveCIsInZlclBvcHVwIiwiVmVyUG9wdXAiLCJzdWJtaXQiLCJzaG93dmVyUG9wdXAiLCJkb20iLCJtYWluIiwiYm90dGxlMSIsImJvdHRsZTIiLCJkcmFnX2xlZnQiLCJvZ19sZWZ0Iiwib2Zmc2V0IiwibGVmdCIsIm9nX3JpZ2h0IiwiYm90dGxlMVciLCJ3aWR0aCIsImJvdHRsZTJXIiwiZ29hbCIsImJvdHRsZTF0b3VjaG1vdmUiLCJ1bmJpbmQiLCJvcmlnaW5hbEV2ZW50IiwidG91Y2hlcyIsInBhZ2VYIiwiY3NzIiwiZmFkZUluIiwiZmFkZU91dCIsIm1vcmUiLCJiYWNrIiwic2hhcmVmYiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQU1BO0FBQ0wsZ0JBQWM7QUFBQTs7QUFDYixPQUFLQyxLQUFMO0FBQ0E7Ozs7MEJBQ087QUFDUCxRQUFLQyxJQUFMLEdBQVlDLEVBQUUsT0FBRixDQUFaOztBQUVBLFdBQVEsS0FBS0QsSUFBTCxDQUFVRSxJQUFWLENBQWUsT0FBZixFQUF3QkMsS0FBeEIsQ0FBOEIsT0FBOUIsRUFBdUMsQ0FBdkMsQ0FBUjtBQUNDLFNBQUssT0FBTDtBQUNDLFVBQUtDLEtBQUwsR0FBYSxJQUFJQyxLQUFKLEVBQWI7QUFDQTtBQUNELFNBQUssY0FBTDtBQUNDLFVBQUtDLFlBQUwsR0FBb0IsSUFBSUMsWUFBSixFQUFwQjtBQUNBO0FBQ0QsU0FBSyxxQkFBTDtBQUNDLFVBQUtDLG1CQUFMLEdBQTJCLElBQUlDLG1CQUFKLEVBQTNCO0FBQ0E7QUFDRCxTQUFLLDZCQUFMO0FBQ0MsVUFBS0MsMkJBQUwsR0FBbUMsSUFBSUMsMkJBQUosRUFBbkM7QUFDQTtBQUNELFNBQUssY0FBTDtBQUNDLFVBQUtDLFlBQUwsR0FBb0IsSUFBSUMsWUFBSixFQUFwQjtBQUNBO0FBQ0QsU0FBSyxzQkFBTDtBQUNDLFVBQUtDLG9CQUFMLEdBQTRCLElBQUlDLG9CQUFKLEVBQTVCO0FBQ0E7QUFsQkY7QUFvQkE7Ozs7OztBQUdGZCxFQUFFLFlBQVc7QUFDWixLQUFJZSxNQUFNLElBQUlsQixHQUFKLEVBQVY7QUFDQSxDQUZEOzs7Ozs7O0lDOUJNbUI7QUFDRiwyQkFBYztBQUFBOztBQUNWLGFBQUtDLE1B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R0FBWUMsRUFBRSw0QkFBRixDQUFaO0FBQ0EsU0FBSzJFLElBQUwsR0FBWSxLQUFLNUUsSUFBTCxDQUFVcUIsSUFBVixDQUFlLE9BQWYsQ0FBWjtBQUNBLFNBQUt3RCxJQUFMLEdBQVksS0FBSzdFLElBQUwsQ0FBVXFCLElBQVYsQ0FBZSxPQUFmLENBQVo7QUFDQSxTQUFLeUQsT0FBTCxHQUFlLEtBQUs5RSxJQUFMLENBQVVxQixJQUFWLENBQWUsVUFBZixDQUFmOztBQUVBLFNBQUt1RCxJQUFMLENBQVV0RCxFQUFWLENBQWEsT0FBYixFQUFxQixZQUFVO0FBQzNCLGFBQUtMLFdBQUwsQ0FBaUJXLFVBQWpCLENBQTRCLElBQTVCO0FBQ0gsS0FGb0IsQ0FFbkJILElBRm1CLENBRWQsSUFGYyxDQUFyQjtBQUdBLFNBQUtvRCxJQUFMLENBQVV2RCxFQUFWLENBQWEsT0FBYixFQUFxQixZQUFVO0FBQzNCLGFBQUtMLFdBQUwsQ0FBaUJXLFVBQWpCLENBQTRCLElBQTVCO0FBQ0gsS0FGb0IsQ0FFbkJILElBRm1CLENBRWQsSUFGYyxDQUFyQjtBQUdBLFNBQUtxRCxPQUFMLENBQWF4RCxFQUFiLENBQWdCLE9BQWhCLEVBQXdCLFlBQVU7QUFDOUIsYUFBS0wsV0FBTCxDQUFpQlcsVUFBakIsQ0FBNEIsSUFBNUI7QUFDSCxLQUZ1QixDQUV0QkgsSUFGc0IsQ0FFakIsSUFGaUIsQ0FBeEI7QUFHSCIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5yZWFkeSgpO1xyXG5cdH1cclxuXHRyZWFkeSgpIHtcclxuXHRcdHRoaXMucGFnZSA9ICQoJy5wYWdlJyk7XHJcblxyXG5cdFx0c3dpdGNoICh0aGlzLnBhZ2UuYXR0cignY2xhc3MnKS5zcGxpdCgncGFnZSAnKVsxXSkge1xyXG5cdFx0XHRjYXNlICdpbmRleCc6XHJcblx0XHRcdFx0dGhpcy5pbmRleCA9IG5ldyBJbmRleCgpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlICdsb2dpbl9tZW1iZXInOlxyXG5cdFx0XHRcdHRoaXMubG9naW5fbWVtYmVyID0gbmV3IExvZ2luX21lbWJlcigpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlICdsb2dpbl9tZW1iZXJfbm9kYXRhJzpcclxuXHRcdFx0XHR0aGlzLmxvZ2luX21lbWJlcl9ub2RhdGEgPSBuZXcgTG9naW5fbWVtYmVyX25vZGF0YSgpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlICdsb2dpbl9tZW1iZXJfbm9kYXRhX2NvbmZpcm0nOlxyXG5cdFx0XHRcdHRoaXMubG9naW5fbWVtYmVyX25vZGF0YV9jb25maXJtID0gbmV3IExvZ2luX21lbWJlcl9ub2RhdGFfY29uZmlybSgpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlICdsb2dpbl9udW1iZXInOlxyXG5cdFx0XHRcdHRoaXMubG9naW5fbnVtYmVyID0gbmV3IExvZ2luX251bWJlcigpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlICdsb2dpbl9udW1iZXJfc3VjY2Vzcyc6XHJcblx0XHRcdFx0dGhpcy5sb2dpbl9udW1iZXJfc3VjY2VzcyA9IG5ldyBMb2dpbl9udW1iZXJfc3VjY2VzcygpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuJChmdW5jdGlvbigpIHtcclxuXHR2YXIgYXBwID0gbmV3IEFwcCgpO1xyXG59KTtcclxuXHJcbiIsImNsYXNzIEhlYWRlck1vZGVsIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaGVhZGVyID0gJCgnLmhlYWRlcicpO1xyXG4gICAgICAgIHRoaXMubWVudSA9ICQoJy5tZW51Jyk7XHJcblxyXG4gICAgICAgIHRoaXMubWVudWJ0biA9IHRoaXMuaGVhZGVyLmZpbmQoJy5tZW51YnRuJyk7XHJcbiAgICAgICAgdGhpcy5tZW51YnRuLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgaWYodGhpcy5tZW51YnRuLmhhc0NsYXNzKCdvbicpKSB0aGlzLm9wZW5tZW51KGZhbHNlKTtcclxuICAgICAgICAgICAgZWxzZSB0aGlzLm9wZW5tZW51KHRydWUpO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIHRoaXMubWVudWEgPSB0aGlzLm1lbnUuZmluZCgnLm1lbnVhJyk7XHJcbiAgICAgICAgdGhpcy5tZW51YS5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICB0aGlzLm1lbnVhQ2xpY2soJChlLmN1cnJlbnRUYXJnZXQpLmF0dHIoJ2NsYXNzJykuc3BsaXQoJ21lbnVhICcpWzFdKTtcclxuICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG4gICAgb3Blbm1lbnUoX3QpIHtcclxuICAgICAgICBpZihfdCl7XHJcbiAgICAgICAgICAgIHRoaXMubWVudWJ0bi5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJCgnLm1lbnUnKS5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5tZW51YnRuLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkKCcubWVudScpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG1lbnVhQ2xpY2sobWVudWxpbmspe1xyXG4gICAgICAgIHN3aXRjaCAobWVudWxpbmspIHtcclxuICAgICAgICAgICAgY2FzZSAnbTEnOlxyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWY9XCJsb2dpbl9tZW1iZXIuaHRtbFwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ20yJzpcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmPVwiaW5xdWlyZS5odG1sXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbTMnOlxyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWY9XCJhYm91dC5odG1sXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbTQnOlxyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWY9XCJhd2FyZF9pbmZvLmh0bWxcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdtNSc6XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZj1cImF3YXJkX2xpc3QuaHRtbFwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ202JzpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzaGFyZSBmYicpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ203JzpcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmPVwiZ2FtZV9saXN0Lmh0bWxcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdtOCc6XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZj1cImxvZ2luX251bWJlci5odG1sXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbTknOlxyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWY9XCJpbmRleC5odG1sXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy8gbW9kdWxlLmV4cG9ydHMgPSBIZWFkZXJNb2RlbDsiLCJjbGFzcyBJbmRleCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLkhlYWRlck1vZGVsID0gbmV3IEhlYWRlck1vZGVsKCk7XHJcbiAgICAgICAgdGhpcy5wYWdlID0gJCgnLnBhZ2UuaW5kZXgnKTtcclxuXHJcbiAgICAgICAgdGhpcy5iYW5uZXJfYm94ID0gdGhpcy5wYWdlLmZpbmQoJy5iYW5uZXJfYm94Jyk7XHJcbiAgICAgICAgdGhpcy5iYW5uZXJfYm94LmVhY2godGhpcy5iYW5uZXJBbmkpO1xyXG4gICAgICAgIHRoaXMuYmFubmVyID0gdGhpcy5iYW5uZXJfYm94LmZpbmQoJy5iYW5uZXInKTtcclxuICAgICAgICB0aGlzLmJhbm5lci5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICBpZigkKGUuY3VycmVudFRhcmdldCkuaW5kZXgoKSA9PT0gMCkgdGhpcy5IZWFkZXJNb2RlbC5tZW51YUNsaWNrKCdtOCcpO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5nYW1lUGxheV9idG4gPSB0aGlzLnBhZ2UuZmluZCgnLmdhbWVQbGF5X2J0bicpO1xyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXlfYnRuLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdGhpcy5IZWFkZXJNb2RlbC5tZW51YUNsaWNrKCdtNycpO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcbiAgICBiYW5uZXJBbmkoKXtcclxuICAgICAgICB2YXIgX2JveCA9ICQodGhpcyksXHJcbiAgICAgICAgICAgIGJhbm5lciA9IF9ib3guZmluZCgnLmJhbm5lcicpLFxyXG4gICAgICAgICAgICBub3dTaG93ID0gMDtcclxuICAgICAgICBcclxuICAgICAgICBzaG93YmFubmVyKCk7XHJcbiAgICAgICAgZnVuY3Rpb24gc2hvd2Jhbm5lcigpe1xyXG4gICAgICAgICAgICBiYW5uZXIucmVtb3ZlQ2xhc3MoJ29uJykuZXEobm93U2hvdykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIG5vd1Nob3cgKz0xO1xyXG4gICAgICAgICAgICAgICAgaWYobm93U2hvdz49YmFubmVyLmxlbmd0aCkgbm93U2hvdyA9IDA7XHJcbiAgICAgICAgICAgICAgICBzaG93YmFubmVyKCk7XHJcbiAgICAgICAgICAgIH0sNTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vIG1vZHVsZS5leHBvcnRzID0gSW5kZXg7IiwiY2xhc3MgTG9naW5fbWVtYmVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuSGVhZGVyTW9kZWwgPSBuZXcgSGVhZGVyTW9kZWwoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGJhbm5lckFuaSgpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbi8vIG1vZHVsZS5leHBvcnRzID0gSW5kZXg7IiwiY2xhc3MgTG9naW5fbWVtYmVyX25vZGF0YSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLkhlYWRlck1vZGVsID0gbmV3IEhlYWRlck1vZGVsKCk7XHJcbiAgICAgICAgdGhpcy5wYWdlID0gJCgnLnBhZ2UubG9naW5fbWVtYmVyX25vZGF0YScpO1xyXG4gICAgICAgIHRoaXMuY2hlY2tib3ggPSB0aGlzLnBhZ2UuZmluZCgnLmNoZWNrYm94Jyk7XHJcbiAgICAgICAgdGhpcy5jaGVja2JveC5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICBpZigkKGUuY3VycmVudFRhcmdldCkuaGFzQ2xhc3MoJ29uJykpICQoZS5jdXJyZW50VGFyZ2V0KS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgZWxzZSAkKGUuY3VycmVudFRhcmdldCkuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuLy8gbW9kdWxlLmV4cG9ydHMgPSBJbmRleDsiLCJjbGFzcyBMb2dpbl9tZW1iZXJfbm9kYXRhX2NvbmZpcm0ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5IZWFkZXJNb2RlbCA9IG5ldyBIZWFkZXJNb2RlbCgpO1xyXG4gICAgICAgIHRoaXMucGFnZSA9ICQoJy5wYWdlLmxvZ2luX21lbWJlcl9ub2RhdGFfY29uZmlybScpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbi8vIG1vZHVsZS5leHBvcnRzID0gSW5kZXg7IiwiY2xhc3MgTG9naW5fbnVtYmVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuSGVhZGVyTW9kZWwgPSBuZXcgSGVhZGVyTW9kZWwoKTtcclxuICAgICAgICB0aGlzLnZlclBvcHVwID0gbmV3IFZlclBvcHVwKCQoJy52ZXJQb3B1cCcpKTtcclxuICAgICAgICB0aGlzLnBhZ2UgPSAkKCcucGFnZS5sb2dpbl9udW1iZXInKTtcclxuICAgICAgICB0aGlzLnN1Ym1pdCA9IHRoaXMucGFnZS5maW5kKCcuc3VibWl0Jyk7XHJcbiAgICAgICAgdGhpcy5zdWJtaXQub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB0aGlzLnZlclBvcHVwLnNob3d2ZXJQb3B1cCh0cnVlKTtcclxuICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIFZlclBvcHVwIHtcclxuICAgIGNvbnN0cnVjdG9yKGRvbSkge1xyXG4gICAgICAgIHRoaXMudmVyUG9wdXAgPSBkb207XHJcbiAgICAgICAgdGhpcy5tYWluID0gdGhpcy52ZXJQb3B1cC5maW5kKCcubWFpbicpO1xyXG4gICAgICAgIHRoaXMuYm90dGxlMSA9IHRoaXMudmVyUG9wdXAuZmluZCgnLmJvdHRsZTEnKTtcclxuICAgICAgICB0aGlzLmJvdHRsZTIgPSB0aGlzLnZlclBvcHVwLmZpbmQoJy5ib3R0bGUyJyk7XHJcbiAgICAgICAgdGhpcy5kcmFnX2xlZnQgPSAwO1xyXG4gICAgICAgIHRoaXMub2dfbGVmdCA9IHRoaXMuYm90dGxlMS5vZmZzZXQoKS5sZWZ0O1xyXG4gICAgICAgIHRoaXMub2dfcmlnaHQgPSB0aGlzLmJvdHRsZTIub2Zmc2V0KCkubGVmdDtcclxuICAgICAgICB0aGlzLmJvdHRsZTFXID0gdGhpcy5ib3R0bGUxLndpZHRoKCk7XHJcbiAgICAgICAgdGhpcy5ib3R0bGUyVyA9IHRoaXMuYm90dGxlMi53aWR0aCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuYm90dGxlMS5vbigndG91Y2hzdGFydCcsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdGhpcy5vZ19sZWZ0ID0gdGhpcy5ib3R0bGUxLm9mZnNldCgpLmxlZnQ7XHJcbiAgICAgICAgICAgIHRoaXMub2dfcmlnaHQgPSB0aGlzLmJvdHRsZTIub2Zmc2V0KCkubGVmdDtcclxuICAgICAgICAgICAgdGhpcy5nb2FsID0gdGhpcy5vZ19yaWdodCAtIHRoaXMub2dfbGVmdCArIHRoaXMuYm90dGxlMlcvMiAtIHRoaXMuYm90dGxlMVcvMjtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5vZ19sZWZ0KTtcclxuICAgICAgICAgICAgdGhpcy5ib3R0bGUxLmJpbmQoJ3RvdWNobW92ZScsIHRoaXMuYm90dGxlMXRvdWNobW92ZS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubWFpbi5vbigndG91Y2hlbmQnLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHRoaXMuYm90dGxlMS51bmJpbmQoJ3RvdWNobW92ZScsIHRoaXMuYm90dGxlMXRvdWNobW92ZS5iaW5kKHRoaXMpKTtcclxuICAgICAgICAgICAgdGhpcy5ib3R0bGUxLmF0dHIoJ3N0eWxlJywnJyk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuICAgIGJvdHRsZTF0b3VjaG1vdmUoZSl7XHJcbiAgICAgICAgZSA9IGUub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdO1xyXG5cclxuICAgICAgICB0aGlzLmRyYWdfbGVmdCA9IGUucGFnZVggLSB0aGlzLm9nX2xlZnQgLSB0aGlzLmJvdHRsZTFXIC8gMjtcclxuICAgICAgICBpZih0aGlzLmRyYWdfbGVmdDwwKSB0aGlzLmRyYWdfbGVmdD0wO1xyXG4gICAgICAgIGVsc2UgaWYodGhpcy5kcmFnX2xlZnQgPj0gdGhpcy5nb2FsKXtcclxuICAgICAgICAgICAgdGhpcy5zaG93dmVyUG9wdXAoZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLmJvdHRsZTEudW5iaW5kKCd0b3VjaG1vdmUnLCB0aGlzLmJvdHRsZTF0b3VjaG1vdmUuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYm90dGxlMS5jc3MoJ21hcmdpbi1sZWZ0Jyx0aGlzLmRyYWdfbGVmdCk7XHJcbiAgICB9XHJcbiAgICBzaG93dmVyUG9wdXAoX3Qpe1xyXG4gICAgICAgIGlmKF90KSB0aGlzLnZlclBvcHVwLmZhZGVJbigpO1xyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICB0aGlzLnZlclBvcHVwLmZhZGVPdXQoKTtcclxuICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmPVwibG9naW5fbnVtYmVyX3N1Y2Nlc3MuaHRtbFwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vLyBtb2R1bGUuZXhwb3J0cyA9IEluZGV4OyIsImNsYXNzIExvZ2luX251bWJlcl9zdWNjZXNzIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuSGVhZGVyTW9kZWwgPSBuZXcgSGVhZGVyTW9kZWwoKTtcclxuICAgICAgICB0aGlzLnBhZ2UgPSAkKCcucGFnZS5sb2dpbl9udW1iZXJfc3VjY2VzcycpO1xyXG4gICAgICAgIHRoaXMubW9yZSA9IHRoaXMucGFnZS5maW5kKCcubW9yZScpO1xyXG4gICAgICAgIHRoaXMuYmFjayA9IHRoaXMucGFnZS5maW5kKCcuYmFjaycpO1xyXG4gICAgICAgIHRoaXMuc2hhcmVmYiA9IHRoaXMucGFnZS5maW5kKCcuc2hhcmVmYicpO1xyXG5cclxuICAgICAgICB0aGlzLm1vcmUub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB0aGlzLkhlYWRlck1vZGVsLm1lbnVhQ2xpY2soJ204Jyk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLmJhY2sub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB0aGlzLkhlYWRlck1vZGVsLm1lbnVhQ2xpY2soJ205Jyk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnNoYXJlZmIub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB0aGlzLkhlYWRlck1vZGVsLm1lbnVhQ2xpY2soJ202Jyk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxufSJdfQ==
