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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIm1vZHVsZXMvSGVhZGVyTW9kZWwuanMiLCJtb2R1bGVzL0luZGV4LmpzIiwibW9kdWxlcy9Mb2dpbl9tZW1iZXIuanMiLCJtb2R1bGVzL0xvZ2luX21lbWJlcl9ub2RhdGEuanMiLCJtb2R1bGVzL0xvZ2luX21lbWJlcl9ub2RhdGFfY29uZmlybS5qcyIsIm1vZHVsZXMvTG9naW5fbnVtYmVyLmpzIiwibW9kdWxlcy9Mb2dpbl9udW1iZXJfc3VjY2Vzcy5qcyJdLCJuYW1lcyI6WyJBcHAiLCJyZWFkeSIsImxvYWRpbmciLCIkIiwid2luZG93IiwibG9hZCIsIndpbmRvd0xvYWQiLCJiaW5kIiwicGFnZSIsImF0dHIiLCJzcGxpdCIsImluZGV4IiwiSW5kZXgiLCJsb2dpbl9tZW1iZXIiLCJMb2dpbl9tZW1iZXIiLCJsb2dpbl9tZW1iZXJfbm9kYXRhIiwiTG9naW5fbWVtYmVyX25vZGF0YSIsImxvZ2luX21lbWJlcl9ub2RhdGFfY29uZmlybSIsIkxvZ2luX21lbWJlcl9ub2RhdGFfY29uZmlybSIsImxvZ2luX251bWJlciIsIkxvZ2luX251bWJlciIsImxvZ2luX251bWJlcl9zdWNjZXNzIiwiTG9naW5fbnVtYmVyX3N1Y2Nlc3MiLCJmYWRlT3V0IiwiYXBwIiwiSGVhZGVyTW9kZWwiLCJoZWFkZXIiLCJtZW51IiwibWVudWJ0biIsImZpbmQiLCJvbiIsImhhc0NsYXNzIiwib3Blbm1lbnUiLCJtZW51YSIsImUiLCJtZW51YUNsaWNrIiwiY3VycmVudFRhcmdldCIsIl90IiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsIm1lbnVsaW5rIiwibG9jYXRpb24iLCJocmVmIiwiY29uc29sZSIsImxvZyIsImJhbm5lcl9ib3giLCJlYWNoIiwiYmFubmVyQW5pIiwiYmFubmVyIiwiZ2FtZVBsYXlfYnRuIiwiX2JveCIsIm5vd1Nob3ciLCJzaG93YmFubmVyIiwiZXEiLCJzZXRUaW1lb3V0IiwibGVuZ3RoIiwiY2hlY2tib3giLCJ2ZXJQb3B1cCIsIlZlclBvcHVwIiwic3VibWl0Iiwic2hvd3ZlclBvcHVwIiwiZG9tIiwibWFpbiIsImJvdHRsZTEiLCJib3R0bGUyIiwiZHJhZ19sZWZ0Iiwib2dfbGVmdCIsIm9mZnNldCIsImxlZnQiLCJvZ19yaWdodCIsImJvdHRsZTFXIiwid2lkdGgiLCJib3R0bGUyVyIsImdvYWwiLCJib3R0bGUxdG91Y2htb3ZlIiwidW5iaW5kIiwib3JpZ2luYWxFdmVudCIsInRvdWNoZXMiLCJwYWdlWCIsImNzcyIsImZhZGVJbiIsIm1vcmUiLCJiYWNrIiwic2hhcmVmYiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQU1BO0FBQ0wsZ0JBQWM7QUFBQTs7QUFDYixPQUFLQyxLQUFMO0FBQ0EsT0FBS0MsT0FBTCxHQUFlQyxFQUFFLFVBQUYsQ0FBZjtBQUNBQSxJQUFFQyxNQUFGLEVBQVVDLElBQVYsQ0FBZSxZQUFVO0FBQ3hCLFFBQUtDLFVBQUw7QUFDQSxHQUZjLENBRWJDLElBRmEsQ0FFUixJQUZRLENBQWY7QUFHQTs7OzswQkFDTztBQUNQLFFBQUtDLElBQUwsR0FBWUwsRUFBRSxPQUFGLENBQVo7O0FBRUEsV0FBUSxLQUFLSyxJQUFMLENBQVVDLElBQVYsQ0FBZSxPQUFmLEVBQXdCQyxLQUF4QixDQUE4QixPQUE5QixFQUF1QyxDQUF2QyxDQUFSO0FBQ0MsU0FBSyxPQUFMO0FBQ0MsVUFBS0MsS0FBTCxHQUFhLElBQUlDLEtBQUosRUFBYjtBQUNBO0FBQ0QsU0FBSyxjQUFMO0FBQ0MsVUFBS0MsWUFBTCxHQUFvQixJQUFJQyxZQUFKLEVBQXBCO0FBQ0E7QUFDRCxTQUFLLHFCQUFMO0FBQ0MsVUFBS0MsbUJBQUwsR0FBMkIsSUFBSUMsbUJBQUosRUFBM0I7QUFDQTtBQUNELFNBQUssNkJBQUw7QUFDQyxVQUFLQywyQkFBTCxHQUFtQyxJQUFJQywyQkFBSixFQUFuQztBQUNBO0FBQ0QsU0FBSyxjQUFMO0FBQ0MsVUFBS0MsWUFBTCxHQUFvQixJQUFJQyxZQUFKLEVBQXBCO0FBQ0E7QUFDRCxTQUFLLHNCQUFMO0FBQ0MsVUFB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b3IoKSB7XHJcblx0XHR0aGlzLnJlYWR5KCk7XHJcblx0XHR0aGlzLmxvYWRpbmcgPSAkKCcubG9hZGluZycpO1xyXG5cdFx0JCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKXtcclxuXHRcdFx0dGhpcy53aW5kb3dMb2FkKCk7XHJcblx0XHR9LmJpbmQodGhpcykpO1xyXG5cdH1cclxuXHRyZWFkeSgpIHtcclxuXHRcdHRoaXMucGFnZSA9ICQoJy5wYWdlJyk7XHJcblxyXG5cdFx0c3dpdGNoICh0aGlzLnBhZ2UuYXR0cignY2xhc3MnKS5zcGxpdCgncGFnZSAnKVsxXSkge1xyXG5cdFx0XHRjYXNlICdpbmRleCc6XHJcblx0XHRcdFx0dGhpcy5pbmRleCA9IG5ldyBJbmRleCgpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlICdsb2dpbl9tZW1iZXInOlxyXG5cdFx0XHRcdHRoaXMubG9naW5fbWVtYmVyID0gbmV3IExvZ2luX21lbWJlcigpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlICdsb2dpbl9tZW1iZXJfbm9kYXRhJzpcclxuXHRcdFx0XHR0aGlzLmxvZ2luX21lbWJlcl9ub2RhdGEgPSBuZXcgTG9naW5fbWVtYmVyX25vZGF0YSgpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlICdsb2dpbl9tZW1iZXJfbm9kYXRhX2NvbmZpcm0nOlxyXG5cdFx0XHRcdHRoaXMubG9naW5fbWVtYmVyX25vZGF0YV9jb25maXJtID0gbmV3IExvZ2luX21lbWJlcl9ub2RhdGFfY29uZmlybSgpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlICdsb2dpbl9udW1iZXInOlxyXG5cdFx0XHRcdHRoaXMubG9naW5fbnVtYmVyID0gbmV3IExvZ2luX251bWJlcigpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlICdsb2dpbl9udW1iZXJfc3VjY2Vzcyc6XHJcblx0XHRcdFx0dGhpcy5sb2dpbl9udW1iZXJfc3VjY2VzcyA9IG5ldyBMb2dpbl9udW1iZXJfc3VjY2VzcygpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHR3aW5kb3dMb2FkKCl7XHJcblx0XHR0aGlzLmxvYWRpbmcuZmFkZU91dCgpO1xyXG5cdH1cclxufVxyXG5cclxuJChmdW5jdGlvbigpIHtcclxuXHR2YXIgYXBwID0gbmV3IEFwcCgpO1xyXG59KTtcclxuXHJcbiIsImNsYXNzIEhlYWRlck1vZGVsIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaGVhZGVyID0gJCgnLmhlYWRlcicpO1xyXG4gICAgICAgIHRoaXMubWVudSA9ICQoJy5tZW51Jyk7XHJcblxyXG4gICAgICAgIHRoaXMubWVudWJ0biA9IHRoaXMuaGVhZGVyLmZpbmQoJy5tZW51YnRuJyk7XHJcbiAgICAgICAgdGhpcy5tZW51YnRuLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgaWYodGhpcy5tZW51YnRuLmhhc0NsYXNzKCdvbicpKSB0aGlzLm9wZW5tZW51KGZhbHNlKTtcclxuICAgICAgICAgICAgZWxzZSB0aGlzLm9wZW5tZW51KHRydWUpO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIHRoaXMubWVudWEgPSB0aGlzLm1lbnUuZmluZCgnLm1lbnVhJyk7XHJcbiAgICAgICAgdGhpcy5tZW51YS5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICB0aGlzLm1lbnVhQ2xpY2soJChlLmN1cnJlbnRUYXJnZXQpLmF0dHIoJ2NsYXNzJykuc3BsaXQoJ21lbnVhICcpWzFdKTtcclxuICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG4gICAgb3Blbm1lbnUoX3QpIHtcclxuICAgICAgICBpZihfdCl7XHJcbiAgICAgICAgICAgIHRoaXMubWVudWJ0bi5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJCgnLm1lbnUnKS5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5tZW51YnRuLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkKCcubWVudScpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG1lbnVhQ2xpY2sobWVudWxpbmspe1xyXG4gICAgICAgIHN3aXRjaCAobWVudWxpbmspIHtcclxuICAgICAgICAgICAgY2FzZSAnbTEnOlxyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWY9XCJsb2dpbl9tZW1iZXIuaHRtbFwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ20yJzpcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmPVwiaW5xdWlyZS5odG1sXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbTMnOlxyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWY9XCJhYm91dC5odG1sXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbTQnOlxyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWY9XCJhd2FyZF9pbmZvLmh0bWxcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdtNSc6XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZj1cImF3YXJkX2xpc3QuaHRtbFwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ202JzpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzaGFyZSBmYicpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ203JzpcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmPVwiZ2FtZV9saXN0Lmh0bWxcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdtOCc6XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZj1cImxvZ2luX251bWJlci5odG1sXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbTknOlxyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWY9XCJpbmRleC5odG1sXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy8gbW9kdWxlLmV4cG9ydHMgPSBIZWFkZXJNb2RlbDsiLCJjbGFzcyBJbmRleCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLkhlYWRlck1vZGVsID0gbmV3IEhlYWRlck1vZGVsKCk7XHJcbiAgICAgICAgdGhpcy5wYWdlID0gJCgnLnBhZ2UuaW5kZXgnKTtcclxuXHJcbiAgICAgICAgdGhpcy5iYW5uZXJfYm94ID0gdGhpcy5wYWdlLmZpbmQoJy5iYW5uZXJfYm94Jyk7XHJcbiAgICAgICAgdGhpcy5iYW5uZXJfYm94LmVhY2godGhpcy5iYW5uZXJBbmkpO1xyXG4gICAgICAgIHRoaXMuYmFubmVyID0gdGhpcy5iYW5uZXJfYm94LmZpbmQoJy5iYW5uZXInKTtcclxuICAgICAgICB0aGlzLmJhbm5lci5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICBpZigkKGUuY3VycmVudFRhcmdldCkuaW5kZXgoKSA9PT0gMCkgdGhpcy5IZWFkZXJNb2RlbC5tZW51YUNsaWNrKCdtOCcpO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5nYW1lUGxheV9idG4gPSB0aGlzLnBhZ2UuZmluZCgnLmdhbWVQbGF5X2J0bicpO1xyXG4gICAgICAgIHRoaXMuZ2FtZVBsYXlfYnRuLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdGhpcy5IZWFkZXJNb2RlbC5tZW51YUNsaWNrKCdtNycpO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcbiAgICBiYW5uZXJBbmkoKXtcclxuICAgICAgICB2YXIgX2JveCA9ICQodGhpcyksXHJcbiAgICAgICAgICAgIGJhbm5lciA9IF9ib3guZmluZCgnLmJhbm5lcicpLFxyXG4gICAgICAgICAgICBub3dTaG93ID0gMDtcclxuICAgICAgICBcclxuICAgICAgICBzaG93YmFubmVyKCk7XHJcbiAgICAgICAgZnVuY3Rpb24gc2hvd2Jhbm5lcigpe1xyXG4gICAgICAgICAgICBiYW5uZXIucmVtb3ZlQ2xhc3MoJ29uJykuZXEobm93U2hvdykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIG5vd1Nob3cgKz0xO1xyXG4gICAgICAgICAgICAgICAgaWYobm93U2hvdz49YmFubmVyLmxlbmd0aCkgbm93U2hvdyA9IDA7XHJcbiAgICAgICAgICAgICAgICBzaG93YmFubmVyKCk7XHJcbiAgICAgICAgICAgIH0sNTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vIG1vZHVsZS5leHBvcnRzID0gSW5kZXg7IiwiY2xhc3MgTG9naW5fbWVtYmVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuSGVhZGVyTW9kZWwgPSBuZXcgSGVhZGVyTW9kZWwoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGJhbm5lckFuaSgpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbi8vIG1vZHVsZS5leHBvcnRzID0gSW5kZXg7IiwiY2xhc3MgTG9naW5fbWVtYmVyX25vZGF0YSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLkhlYWRlck1vZGVsID0gbmV3IEhlYWRlck1vZGVsKCk7XHJcbiAgICAgICAgdGhpcy5wYWdlID0gJCgnLnBhZ2UubG9naW5fbWVtYmVyX25vZGF0YScpO1xyXG4gICAgICAgIHRoaXMuY2hlY2tib3ggPSB0aGlzLnBhZ2UuZmluZCgnLmNoZWNrYm94Jyk7XHJcbiAgICAgICAgdGhpcy5jaGVja2JveC5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICBpZigkKGUuY3VycmVudFRhcmdldCkuaGFzQ2xhc3MoJ29uJykpICQoZS5jdXJyZW50VGFyZ2V0KS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgZWxzZSAkKGUuY3VycmVudFRhcmdldCkuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuLy8gbW9kdWxlLmV4cG9ydHMgPSBJbmRleDsiLCJjbGFzcyBMb2dpbl9tZW1iZXJfbm9kYXRhX2NvbmZpcm0ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5IZWFkZXJNb2RlbCA9IG5ldyBIZWFkZXJNb2RlbCgpO1xyXG4gICAgICAgIHRoaXMucGFnZSA9ICQoJy5wYWdlLmxvZ2luX21lbWJlcl9ub2RhdGFfY29uZmlybScpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbi8vIG1vZHVsZS5leHBvcnRzID0gSW5kZXg7IiwiY2xhc3MgTG9naW5fbnVtYmVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuSGVhZGVyTW9kZWwgPSBuZXcgSGVhZGVyTW9kZWwoKTtcclxuICAgICAgICB0aGlzLnZlclBvcHVwID0gbmV3IFZlclBvcHVwKCQoJy52ZXJQb3B1cCcpKTtcclxuICAgICAgICB0aGlzLnBhZ2UgPSAkKCcucGFnZS5sb2dpbl9udW1iZXInKTtcclxuICAgICAgICB0aGlzLnN1Ym1pdCA9IHRoaXMucGFnZS5maW5kKCcuc3VibWl0Jyk7XHJcbiAgICAgICAgdGhpcy5zdWJtaXQub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB0aGlzLnZlclBvcHVwLnNob3d2ZXJQb3B1cCh0cnVlKTtcclxuICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIFZlclBvcHVwIHtcclxuICAgIGNvbnN0cnVjdG9yKGRvbSkge1xyXG4gICAgICAgIHRoaXMudmVyUG9wdXAgPSBkb207XHJcbiAgICAgICAgdGhpcy5tYWluID0gdGhpcy52ZXJQb3B1cC5maW5kKCcubWFpbicpO1xyXG4gICAgICAgIHRoaXMuYm90dGxlMSA9IHRoaXMudmVyUG9wdXAuZmluZCgnLmJvdHRsZTEnKTtcclxuICAgICAgICB0aGlzLmJvdHRsZTIgPSB0aGlzLnZlclBvcHVwLmZpbmQoJy5ib3R0bGUyJyk7XHJcbiAgICAgICAgdGhpcy5kcmFnX2xlZnQgPSAwO1xyXG4gICAgICAgIHRoaXMub2dfbGVmdCA9IHRoaXMuYm90dGxlMS5vZmZzZXQoKS5sZWZ0O1xyXG4gICAgICAgIHRoaXMub2dfcmlnaHQgPSB0aGlzLmJvdHRsZTIub2Zmc2V0KCkubGVmdDtcclxuICAgICAgICB0aGlzLmJvdHRsZTFXID0gdGhpcy5ib3R0bGUxLndpZHRoKCk7XHJcbiAgICAgICAgdGhpcy5ib3R0bGUyVyA9IHRoaXMuYm90dGxlMi53aWR0aCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuYm90dGxlMS5vbigndG91Y2hzdGFydCcsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdGhpcy5vZ19sZWZ0ID0gdGhpcy5ib3R0bGUxLm9mZnNldCgpLmxlZnQ7XHJcbiAgICAgICAgICAgIHRoaXMub2dfcmlnaHQgPSB0aGlzLmJvdHRsZTIub2Zmc2V0KCkubGVmdDtcclxuICAgICAgICAgICAgdGhpcy5nb2FsID0gdGhpcy5vZ19yaWdodCAtIHRoaXMub2dfbGVmdCArIHRoaXMuYm90dGxlMlcvMiAtIHRoaXMuYm90dGxlMVcvMjtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5vZ19sZWZ0KTtcclxuICAgICAgICAgICAgdGhpcy5ib3R0bGUxLmJpbmQoJ3RvdWNobW92ZScsIHRoaXMuYm90dGxlMXRvdWNobW92ZS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubWFpbi5vbigndG91Y2hlbmQnLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHRoaXMuYm90dGxlMS51bmJpbmQoJ3RvdWNobW92ZScsIHRoaXMuYm90dGxlMXRvdWNobW92ZS5iaW5kKHRoaXMpKTtcclxuICAgICAgICAgICAgdGhpcy5ib3R0bGUxLmF0dHIoJ3N0eWxlJywnJyk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuICAgIGJvdHRsZTF0b3VjaG1vdmUoZSl7XHJcbiAgICAgICAgZSA9IGUub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdO1xyXG5cclxuICAgICAgICB0aGlzLmRyYWdfbGVmdCA9IGUucGFnZVggLSB0aGlzLm9nX2xlZnQgLSB0aGlzLmJvdHRsZTFXIC8gMjtcclxuICAgICAgICBpZih0aGlzLmRyYWdfbGVmdDwwKSB0aGlzLmRyYWdfbGVmdD0wO1xyXG4gICAgICAgIGVsc2UgaWYodGhpcy5kcmFnX2xlZnQgPj0gdGhpcy5nb2FsKXtcclxuICAgICAgICAgICAgdGhpcy5zaG93dmVyUG9wdXAoZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLmJvdHRsZTEudW5iaW5kKCd0b3VjaG1vdmUnLCB0aGlzLmJvdHRsZTF0b3VjaG1vdmUuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYm90dGxlMS5jc3MoJ21hcmdpbi1sZWZ0Jyx0aGlzLmRyYWdfbGVmdCk7XHJcbiAgICB9XHJcbiAgICBzaG93dmVyUG9wdXAoX3Qpe1xyXG4gICAgICAgIGlmKF90KSB0aGlzLnZlclBvcHVwLmZhZGVJbigpO1xyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICB0aGlzLnZlclBvcHVwLmZhZGVPdXQoKTtcclxuICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmPVwibG9naW5fbnVtYmVyX3N1Y2Nlc3MuaHRtbFwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vLyBtb2R1bGUuZXhwb3J0cyA9IEluZGV4OyIsImNsYXNzIExvZ2luX251bWJlcl9zdWNjZXNzIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuSGVhZGVyTW9kZWwgPSBuZXcgSGVhZGVyTW9kZWwoKTtcclxuICAgICAgICB0aGlzLnBhZ2UgPSAkKCcucGFnZS5sb2dpbl9udW1iZXJfc3VjY2VzcycpO1xyXG4gICAgICAgIHRoaXMubW9yZSA9IHRoaXMucGFnZS5maW5kKCcubW9yZScpO1xyXG4gICAgICAgIHRoaXMuYmFjayA9IHRoaXMucGFnZS5maW5kKCcuYmFjaycpO1xyXG4gICAgICAgIHRoaXMuc2hhcmVmYiA9IHRoaXMucGFnZS5maW5kKCcuc2hhcmVmYicpO1xyXG5cclxuICAgICAgICB0aGlzLm1vcmUub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB0aGlzLkhlYWRlck1vZGVsLm1lbnVhQ2xpY2soJ204Jyk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLmJhY2sub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB0aGlzLkhlYWRlck1vZGVsLm1lbnVhQ2xpY2soJ205Jyk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnNoYXJlZmIub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB0aGlzLkhlYWRlck1vZGVsLm1lbnVhQ2xpY2soJ202Jyk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxufSJdfQ==
