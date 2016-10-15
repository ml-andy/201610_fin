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
                    window.location.href = "/";
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIm1vZHVsZXMvSGVhZGVyTW9kZWwuanMiLCJtb2R1bGVzL0luZGV4LmpzIiwibW9kdWxlcy9Mb2dpbl9tZW1iZXIuanMiLCJtb2R1bGVzL0xvZ2luX21lbWJlcl9ub2RhdGEuanMiLCJtb2R1bGVzL0xvZ2luX21lbWJlcl9ub2RhdGFfY29uZmlybS5qcyIsIm1vZHVsZXMvTG9naW5fbnVtYmVyLmpzIiwibW9kdWxlcy9Mb2dpbl9udW1iZXJfc3VjY2Vzcy5qcyJdLCJuYW1lcyI6WyJBcHAiLCJyZWFkeSIsInBhZ2UiLCIkIiwiYXR0ciIsInNwbGl0IiwiaW5kZXgiLCJJbmRleCIsImxvZ2luX21lbWJlciIsIkxvZ2luX21lbWJlciIsImxvZ2luX21lbWJlcl9ub2RhdGEiLCJMb2dpbl9tZW1iZXJfbm9kYXRhIiwibG9naW5fbWVtYmVyX25vZGF0YV9jb25maXJtIiwiTG9naW5fbWVtYmVyX25vZGF0YV9jb25maXJtIiwibG9naW5fbnVtYmVyIiwiTG9naW5fbnVtYmVyIiwibG9naW5fbnVtYmVyX3N1Y2Nlc3MiLCJMb2dpbl9udW1iZXJfc3VjY2VzcyIsImFwcCIsIkhlYWRlck1vZGVsIiwiaGVhZGVyIiwibWVudSIsIm1lbnVidG4iLCJmaW5kIiwib24iLCJoYXNDbGFzcyIsIm9wZW5tZW51IiwiYmluZCIsIm1lbnVhIiwiZSIsIm1lbnVhQ2xpY2siLCJjdXJyZW50VGFyZ2V0IiwiX3QiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwibWVudWxpbmsiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJjb25zb2xlIiwibG9nIiwiYmFubmVyX2JveCIsImVhY2giLCJiYW5uZXJBbmkiLCJiYW5uZXIiLCJnYW1lUGxheV9idG4iLCJfYm94Iiwibm93U2hvdyIsInNob3diYW5uZXIiLCJlcSIsInNldFRpbWVvdXQiLCJsZW5ndGgiLCJjaGVja2JveCIsInZlclBvcHVwIiwiVmVyUG9wdXAiLCJzdWJtaXQiLCJzaG93dmVyUG9wdXAiLCJkb20iLCJtYWluIiwiYm90dGxlMSIsImJvdHRsZTIiLCJkcmFnX2xlZnQiLCJvZ19sZWZ0Iiwib2Zmc2V0IiwibGVmdCIsIm9nX3JpZ2h0IiwiYm90dGxlMVciLCJ3aWR0aCIsImJvdHRsZTJXIiwiZ29hbCIsImJvdHRsZTF0b3VjaG1vdmUiLCJ1bmJpbmQiLCJvcmlnaW5hbEV2ZW50IiwidG91Y2hlcyIsInBhZ2VYIiwiY3NzIiwiZmFkZUluIiwiZmFkZU91dCIsIm1vcmUiLCJiYWNrIiwic2hhcmVmYiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQU1BO0FBQ0wsZ0JBQWM7QUFBQTs7QUFDYixPQUFLQyxLQUFMO0FBQ0E7Ozs7MEJBQ087QUFDUCxRQUFLQyxJQUFMLEdBQVlDLEVBQUUsT0FBRixDQUFaOztBQUVBLFdBQVEsS0FBS0QsSUFBTCxDQUFVRSxJQUFWLENBQWUsT0FBZixFQUF3QkMsS0FBeEIsQ0FBOEIsT0FBOUIsRUFBdUMsQ0FBdkMsQ0FBUjtBQUNDLFNBQUssT0FBTDtBQUNDLFVBQUtDLEtBQUwsR0FBYSxJQUFJQyxLQUFKLEVBQWI7QUFDQTtBQUNELFNBQUssY0FBTDtBQUNDLFVBQUtDLFlBQUwsR0FBb0IsSUFBSUMsWUFBSixFQUFwQjtBQUNBO0FBQ0QsU0FBSyxxQkFBTDtBQUNDLFVBQUtDLG1CQUFMLEdBQTJCLElBQUlDLG1CQUFKLEVBQTNCO0FBQ0E7QUFDRCxTQUFLLDZCQUFMO0FBQ0MsVUFBS0MsMkJBQUwsR0FBbUMsSUFBSUMsMkJBQUosRUFBbkM7QUFDQTtBQUNELFNBQUssY0FBTDtBQUNDLFVBQUtDLFlBQUwsR0FBb0IsSUFBSUMsWUFBSixFQUFwQjtBQUNBO0FBQ0QsU0FBSyxzQkFBTDtBQUNDLFVBQUtDLG9CQUFMLEdBQTRCLElBQUlDLG9CQUFKLEVBQTVCO0FBQ0E7QUFsQkY7QUFvQkE7Ozs7OztBQUdGZCxFQUFFLFlBQVc7QUFDWixLQUFJZSxNQUFNLElBQUlsQixHQUFKLEVBQVY7QUFDQSxDQUZEOzs7Ozs7O0lDOUJNbUI7QUFDRiwyQkFBYztBQUFBOztBQUNWLGFBQUtDLE1B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S3dELElBQUwsR0FBWSxLQUFLN0UsSUFBTCxDQUFVcUIsSUFBVixDQUFlLE9BQWYsQ0FBWjtBQUNBLFNBQUt5RCxPQUFMLEdBQWUsS0FBSzlFLElBQUwsQ0FBVXFCLElBQVYsQ0FBZSxVQUFmLENBQWY7O0FBRUEsU0FBS3VELElBQUwsQ0FBVXRELEVBQVYsQ0FBYSxPQUFiLEVBQXFCLFlBQVU7QUFDM0IsYUFBS0wsV0FBTCxDQUFpQlcsVUFBakIsQ0FBNEIsSUFBNUI7QUFDSCxLQUZvQixDQUVuQkgsSUFGbUIsQ0FFZCxJQUZjLENBQXJCO0FBR0EsU0FBS29ELElBQUwsQ0FBVXZELEVBQVYsQ0FBYSxPQUFiLEVBQXFCLFlBQVU7QUFDM0IsYUFBS0wsV0FBTCxDQUFpQlcsVUFBakIsQ0FBNEIsSUFBNUI7QUFDSCxLQUZvQixDQUVuQkgsSUFGbUIsQ0FFZCxJQUZjLENBQXJCO0FBR0EsU0FBS3FELE9BQUwsQ0FBYXhELEVBQWIsQ0FBZ0IsT0FBaEIsRUFBd0IsWUFBVTtBQUM5QixhQUFLTCxXQUFMLENBQWlCVyxVQUFqQixDQUE0QixJQUE1QjtBQUNILEtBRnVCLENBRXRCSCxJQUZzQixDQUVqQixJQUZpQixDQUF4QjtBQUdIIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLnJlYWR5KCk7XHJcblx0fVxyXG5cdHJlYWR5KCkge1xyXG5cdFx0dGhpcy5wYWdlID0gJCgnLnBhZ2UnKTtcclxuXHJcblx0XHRzd2l0Y2ggKHRoaXMucGFnZS5hdHRyKCdjbGFzcycpLnNwbGl0KCdwYWdlICcpWzFdKSB7XHJcblx0XHRcdGNhc2UgJ2luZGV4JzpcclxuXHRcdFx0XHR0aGlzLmluZGV4ID0gbmV3IEluZGV4KCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJ2xvZ2luX21lbWJlcic6XHJcblx0XHRcdFx0dGhpcy5sb2dpbl9tZW1iZXIgPSBuZXcgTG9naW5fbWVtYmVyKCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJ2xvZ2luX21lbWJlcl9ub2RhdGEnOlxyXG5cdFx0XHRcdHRoaXMubG9naW5fbWVtYmVyX25vZGF0YSA9IG5ldyBMb2dpbl9tZW1iZXJfbm9kYXRhKCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJ2xvZ2luX21lbWJlcl9ub2RhdGFfY29uZmlybSc6XHJcblx0XHRcdFx0dGhpcy5sb2dpbl9tZW1iZXJfbm9kYXRhX2NvbmZpcm0gPSBuZXcgTG9naW5fbWVtYmVyX25vZGF0YV9jb25maXJtKCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJ2xvZ2luX251bWJlcic6XHJcblx0XHRcdFx0dGhpcy5sb2dpbl9udW1iZXIgPSBuZXcgTG9naW5fbnVtYmVyKCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJ2xvZ2luX251bWJlcl9zdWNjZXNzJzpcclxuXHRcdFx0XHR0aGlzLmxvZ2luX251bWJlcl9zdWNjZXNzID0gbmV3IExvZ2luX251bWJlcl9zdWNjZXNzKCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4kKGZ1bmN0aW9uKCkge1xyXG5cdHZhciBhcHAgPSBuZXcgQXBwKCk7XHJcbn0pO1xyXG5cclxuIiwiY2xhc3MgSGVhZGVyTW9kZWwge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5oZWFkZXIgPSAkKCcuaGVhZGVyJyk7XHJcbiAgICAgICAgdGhpcy5tZW51ID0gJCgnLm1lbnUnKTtcclxuXHJcbiAgICAgICAgdGhpcy5tZW51YnRuID0gdGhpcy5oZWFkZXIuZmluZCgnLm1lbnVidG4nKTtcclxuICAgICAgICB0aGlzLm1lbnVidG4ub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBpZih0aGlzLm1lbnVidG4uaGFzQ2xhc3MoJ29uJykpIHRoaXMub3Blbm1lbnUoZmFsc2UpO1xyXG4gICAgICAgICAgICBlbHNlIHRoaXMub3Blbm1lbnUodHJ1ZSk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgdGhpcy5tZW51YSA9IHRoaXMubWVudS5maW5kKCcubWVudWEnKTtcclxuICAgICAgICB0aGlzLm1lbnVhLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIHRoaXMubWVudWFDbGljaygkKGUuY3VycmVudFRhcmdldCkuYXR0cignY2xhc3MnKS5zcGxpdCgnbWVudWEgJylbMV0pO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcbiAgICBvcGVubWVudShfdCkge1xyXG4gICAgICAgIGlmKF90KXtcclxuICAgICAgICAgICAgdGhpcy5tZW51YnRuLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkKCcubWVudScpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLm1lbnVidG4ucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICQoJy5tZW51JykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbWVudWFDbGljayhtZW51bGluayl7XHJcbiAgICAgICAgc3dpdGNoIChtZW51bGluaykge1xyXG4gICAgICAgICAgICBjYXNlICdtMSc6XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZj1cImxvZ2luX21lbWJlci5odG1sXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbTInOlxyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWY9XCJpbnF1aXJlLmh0bWxcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdtMyc6XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZj1cImFib3V0Lmh0bWxcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdtNCc6XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZj1cImF3YXJkX2luZm8uaHRtbFwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ201JzpcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmPVwiYXdhcmRfbGlzdC5odG1sXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbTYnOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NoYXJlIGZiJyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbTcnOlxyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWY9XCJnYW1lX2xpc3QuaHRtbFwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ204JzpcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmPVwibG9naW5fbnVtYmVyLmh0bWxcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdtOSc6XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZj1cIi9cIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vLyBtb2R1bGUuZXhwb3J0cyA9IEhlYWRlck1vZGVsOyIsImNsYXNzIEluZGV4IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuSGVhZGVyTW9kZWwgPSBuZXcgSGVhZGVyTW9kZWwoKTtcclxuICAgICAgICB0aGlzLnBhZ2UgPSAkKCcucGFnZS5pbmRleCcpO1xyXG5cclxuICAgICAgICB0aGlzLmJhbm5lcl9ib3ggPSB0aGlzLnBhZ2UuZmluZCgnLmJhbm5lcl9ib3gnKTtcclxuICAgICAgICB0aGlzLmJhbm5lcl9ib3guZWFjaCh0aGlzLmJhbm5lckFuaSk7XHJcbiAgICAgICAgdGhpcy5iYW5uZXIgPSB0aGlzLmJhbm5lcl9ib3guZmluZCgnLmJhbm5lcicpO1xyXG4gICAgICAgIHRoaXMuYmFubmVyLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIGlmKCQoZS5jdXJyZW50VGFyZ2V0KS5pbmRleCgpID09PSAwKSB0aGlzLkhlYWRlck1vZGVsLm1lbnVhQ2xpY2soJ204Jyk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmdhbWVQbGF5X2J0biA9IHRoaXMucGFnZS5maW5kKCcuZ2FtZVBsYXlfYnRuJyk7XHJcbiAgICAgICAgdGhpcy5nYW1lUGxheV9idG4ub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB0aGlzLkhlYWRlck1vZGVsLm1lbnVhQ2xpY2soJ203Jyk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuICAgIGJhbm5lckFuaSgpe1xyXG4gICAgICAgIHZhciBfYm94ID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgYmFubmVyID0gX2JveC5maW5kKCcuYmFubmVyJyksXHJcbiAgICAgICAgICAgIG5vd1Nob3cgPSAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNob3diYW5uZXIoKTtcclxuICAgICAgICBmdW5jdGlvbiBzaG93YmFubmVyKCl7XHJcbiAgICAgICAgICAgIGJhbm5lci5yZW1vdmVDbGFzcygnb24nKS5lcShub3dTaG93KS5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgbm93U2hvdyArPTE7XHJcbiAgICAgICAgICAgICAgICBpZihub3dTaG93Pj1iYW5uZXIubGVuZ3RoKSBub3dTaG93ID0gMDtcclxuICAgICAgICAgICAgICAgIHNob3diYW5uZXIoKTtcclxuICAgICAgICAgICAgfSw1MDAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy8gbW9kdWxlLmV4cG9ydHMgPSBJbmRleDsiLCJjbGFzcyBMb2dpbl9tZW1iZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5IZWFkZXJNb2RlbCA9IG5ldyBIZWFkZXJNb2RlbCgpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgYmFubmVyQW5pKCl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuLy8gbW9kdWxlLmV4cG9ydHMgPSBJbmRleDsiLCJjbGFzcyBMb2dpbl9tZW1iZXJfbm9kYXRhIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuSGVhZGVyTW9kZWwgPSBuZXcgSGVhZGVyTW9kZWwoKTtcclxuICAgICAgICB0aGlzLnBhZ2UgPSAkKCcucGFnZS5sb2dpbl9tZW1iZXJfbm9kYXRhJyk7XHJcbiAgICAgICAgdGhpcy5jaGVja2JveCA9IHRoaXMucGFnZS5maW5kKCcuY2hlY2tib3gnKTtcclxuICAgICAgICB0aGlzLmNoZWNrYm94Lm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIGlmKCQoZS5jdXJyZW50VGFyZ2V0KS5oYXNDbGFzcygnb24nKSkgJChlLmN1cnJlbnRUYXJnZXQpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICBlbHNlICQoZS5jdXJyZW50VGFyZ2V0KS5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4vLyBtb2R1bGUuZXhwb3J0cyA9IEluZGV4OyIsImNsYXNzIExvZ2luX21lbWJlcl9ub2RhdGFfY29uZmlybSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLkhlYWRlck1vZGVsID0gbmV3IEhlYWRlck1vZGVsKCk7XHJcbiAgICAgICAgdGhpcy5wYWdlID0gJCgnLnBhZ2UubG9naW5fbWVtYmVyX25vZGF0YV9jb25maXJtJyk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuLy8gbW9kdWxlLmV4cG9ydHMgPSBJbmRleDsiLCJjbGFzcyBMb2dpbl9udW1iZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5IZWFkZXJNb2RlbCA9IG5ldyBIZWFkZXJNb2RlbCgpO1xyXG4gICAgICAgIHRoaXMudmVyUG9wdXAgPSBuZXcgVmVyUG9wdXAoJCgnLnZlclBvcHVwJykpO1xyXG4gICAgICAgIHRoaXMucGFnZSA9ICQoJy5wYWdlLmxvZ2luX251bWJlcicpO1xyXG4gICAgICAgIHRoaXMuc3VibWl0ID0gdGhpcy5wYWdlLmZpbmQoJy5zdWJtaXQnKTtcclxuICAgICAgICB0aGlzLnN1Ym1pdC5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHRoaXMudmVyUG9wdXAuc2hvd3ZlclBvcHVwKHRydWUpO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgVmVyUG9wdXAge1xyXG4gICAgY29uc3RydWN0b3IoZG9tKSB7XHJcbiAgICAgICAgdGhpcy52ZXJQb3B1cCA9IGRvbTtcclxuICAgICAgICB0aGlzLm1haW4gPSB0aGlzLnZlclBvcHVwLmZpbmQoJy5tYWluJyk7XHJcbiAgICAgICAgdGhpcy5ib3R0bGUxID0gdGhpcy52ZXJQb3B1cC5maW5kKCcuYm90dGxlMScpO1xyXG4gICAgICAgIHRoaXMuYm90dGxlMiA9IHRoaXMudmVyUG9wdXAuZmluZCgnLmJvdHRsZTInKTtcclxuICAgICAgICB0aGlzLmRyYWdfbGVmdCA9IDA7XHJcbiAgICAgICAgdGhpcy5vZ19sZWZ0ID0gdGhpcy5ib3R0bGUxLm9mZnNldCgpLmxlZnQ7XHJcbiAgICAgICAgdGhpcy5vZ19yaWdodCA9IHRoaXMuYm90dGxlMi5vZmZzZXQoKS5sZWZ0O1xyXG4gICAgICAgIHRoaXMuYm90dGxlMVcgPSB0aGlzLmJvdHRsZTEud2lkdGgoKTtcclxuICAgICAgICB0aGlzLmJvdHRsZTJXID0gdGhpcy5ib3R0bGUyLndpZHRoKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5ib3R0bGUxLm9uKCd0b3VjaHN0YXJ0JyxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB0aGlzLm9nX2xlZnQgPSB0aGlzLmJvdHRsZTEub2Zmc2V0KCkubGVmdDtcclxuICAgICAgICAgICAgdGhpcy5vZ19yaWdodCA9IHRoaXMuYm90dGxlMi5vZmZzZXQoKS5sZWZ0O1xyXG4gICAgICAgICAgICB0aGlzLmdvYWwgPSB0aGlzLm9nX3JpZ2h0IC0gdGhpcy5vZ19sZWZ0ICsgdGhpcy5ib3R0bGUyVy8yIC0gdGhpcy5ib3R0bGUxVy8yO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm9nX2xlZnQpO1xyXG4gICAgICAgICAgICB0aGlzLmJvdHRsZTEuYmluZCgndG91Y2htb3ZlJywgdGhpcy5ib3R0bGUxdG91Y2htb3ZlLmJpbmQodGhpcykpO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5tYWluLm9uKCd0b3VjaGVuZCcsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdGhpcy5ib3R0bGUxLnVuYmluZCgndG91Y2htb3ZlJywgdGhpcy5ib3R0bGUxdG91Y2htb3ZlLmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICB0aGlzLmJvdHRsZTEuYXR0cignc3R5bGUnLCcnKTtcclxuICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG4gICAgYm90dGxlMXRvdWNobW92ZShlKXtcclxuICAgICAgICBlID0gZS5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbMF07XHJcblxyXG4gICAgICAgIHRoaXMuZHJhZ19sZWZ0ID0gZS5wYWdlWCAtIHRoaXMub2dfbGVmdCAtIHRoaXMuYm90dGxlMVcgLyAyO1xyXG4gICAgICAgIGlmKHRoaXMuZHJhZ19sZWZ0PDApIHRoaXMuZHJhZ19sZWZ0PTA7XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLmRyYWdfbGVmdCA+PSB0aGlzLmdvYWwpe1xyXG4gICAgICAgICAgICB0aGlzLnNob3d2ZXJQb3B1cChmYWxzZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYm90dGxlMS5jc3MoJ21hcmdpbi1sZWZ0Jyx0aGlzLmRyYWdfbGVmdCk7XHJcbiAgICB9XHJcbiAgICBzaG93dmVyUG9wdXAoX3Qpe1xyXG4gICAgICAgIGlmKF90KSB0aGlzLnZlclBvcHVwLmZhZGVJbigpO1xyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICB0aGlzLnZlclBvcHVwLmZhZGVPdXQoKTtcclxuICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmPVwibG9naW5fbnVtYmVyX3N1Y2Nlc3MuaHRtbFwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vLyBtb2R1bGUuZXhwb3J0cyA9IEluZGV4OyIsImNsYXNzIExvZ2luX251bWJlcl9zdWNjZXNzIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuSGVhZGVyTW9kZWwgPSBuZXcgSGVhZGVyTW9kZWwoKTtcclxuICAgICAgICB0aGlzLnBhZ2UgPSAkKCcucGFnZS5sb2dpbl9udW1iZXJfc3VjY2VzcycpO1xyXG4gICAgICAgIHRoaXMubW9yZSA9IHRoaXMucGFnZS5maW5kKCcubW9yZScpO1xyXG4gICAgICAgIHRoaXMuYmFjayA9IHRoaXMucGFnZS5maW5kKCcuYmFjaycpO1xyXG4gICAgICAgIHRoaXMuc2hhcmVmYiA9IHRoaXMucGFnZS5maW5kKCcuc2hhcmVmYicpO1xyXG5cclxuICAgICAgICB0aGlzLm1vcmUub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB0aGlzLkhlYWRlck1vZGVsLm1lbnVhQ2xpY2soJ204Jyk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLmJhY2sub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB0aGlzLkhlYWRlck1vZGVsLm1lbnVhQ2xpY2soJ205Jyk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnNoYXJlZmIub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB0aGlzLkhlYWRlck1vZGVsLm1lbnVhQ2xpY2soJ202Jyk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxufSJdfQ==
