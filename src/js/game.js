class HeaderModel {
    constructor() {
        // this.header = $('.header');
        // this.menu = $('.menu');

        // this.menubtn = this.header.find('.menubtn');
        // this.menubtn.on('click',function(){
        //     if(this.menubtn.hasClass('on')) this.openmenu(false);
        //     else this.openmenu(true);
        // }.bind(this));

        // this.menua = this.menu.find('.menua');
        // this.menua.on('click',function(e){
        //     this.menuaClick($(e.currentTarget).attr('class').replace('on','').split('menua ')[1].replace(' ',''),0);
        // }.bind(this));

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
    openmenu(_t) {
        if(_t){
            this.menubtn.addClass('on');
            $('.menu').addClass('on');
        }else{
            this.menubtn.removeClass('on');
            $('.menu').removeClass('on');
        }
    }
    menuaClick(menulink){
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
                // alert('遊戲將於11/2正式上線');
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
}
class Game_list {
	constructor() {
		console.log('game LIST');
        setTrackPV('pv_m_select_3');
		this.page = $('.page.game_list');
		var banner_swiper = new Swiper('.swiper-container', {
		  	speed:600,	  
		  	wrapperClass: 'swiper-wrapper',
		  	slideClass: 'swiper-slide',
			nextButton:$('.next'),
			prevButton:$('.prev'),
		    slidesPerView: 1,
		    spaceBetween: 0,
            slideActiveClass: 'nowShow',
		    loop: true,
		    autoplay:6000,
		    autoplayDisableOnInteraction:false,
            onSlideChangeEnd: function(){
                if(banner_swiper){
                    var _num = $('.nowShow').attr('num');
                    if(_num == 3) setTrackPV('pv_m_select_1');
                    else if(_num == 4) setTrackPV('pv_m_select_2');
                    else if(_num == 1) setTrackPV('pv_m_select_3');
                    else if(_num == 5) setTrackPV('pv_m_select_4');
                    else if(_num == 2) setTrackPV('pv_m_select_5');
                } 
            }
		});	
		this.gobtn = this.page.find('.gobtn');
		this.gobtn.on('click',function(e){
            var _num = $(e.currentTarget).parent().attr('num');

            if(_num == 3) setTrackButton('btn_m_game_go_1');
            else if(_num == 4) setTrackButton('btn_m_game_go_2');
            else if(_num == 1) setTrackButton('btn_m_game_go_3');
            else if(_num == 5) setTrackButton('btn_m_game_go_4');
            else if(_num == 2) setTrackButton('btn_m_game_go_5');

            window.location.href="game"+ _num +'.php';
		}.bind(this));
	}
}
class Game {
	constructor() {
		this.ready();
		this.HeaderModel = new HeaderModel();
		$(window).load(function(){
			this.window_load();
		}.bind(this));
	}
	ready() {
		this.page = $('.page');
        this.page.append('<div class="footer">使用手機瀏覽，建議使用ios8.4以上(含)，Android4.3以上(含)；Chrome及Safari以獲得最佳瀏覽效果</div>');
        if($('.info').length !=0){
            var _h = this.page.find('.info').find('.waterchild').offset().top + this.page.find('.info').find('.waterchild').height();
            $('.wrapper').css('height',_h);
            $('.info').css('height',_h);
        }
		switch (this.page.attr('class').split('page game ')[1]) {
			case 'game_list':
				this.game_list = new Game_list();
				break;
            case 'game1':
				this.game1 = new Game1();
				break;
            case 'game2':
				this.game2 = new Game2();
				break;
            case 'game3':
				this.game3 = new Game3();
				break;
            case 'game4':
				this.game4 = new Game4();
				break;
            case 'game5':
				this.game5 = new Game5();
				break;
		}
	}
	window_load(){
		$('.loading').fadeOut();
	}
}
class GameModel {
    constructor() {
        this.page = $('.page');
        this.info = this.page.find('.info');
        this.scoreboard = this.page.find('.scoreboard');
        this.clock = this.page.find('.clock');
        this.timer = this.clock.find('.timer'); 
        this.score = this.scoreboard.find('.num');
        this.startbtn = this.info.find('.startbtn');
        

        this.failPopup = $('.failPopup');
        this.again = this.failPopup.find('.again');
        this.back = this.failPopup.find('.back');
        
        this.back.on('click',function(){
            setTrackButton('btn_m_failure_game');
            window.location.href="game_list.php";
        }.bind(this));
        
    }
    AppierTrack(){
        console.log('AppierTrack');
        Appier.appierTrack('Kp61CrC93dhfN24',{unique_key:'true',convertrule:'true'},'1UGfQf0j71WmU68'); 
        window.APPIER_RETARGET.send({'t':'type_conversion','content':'submit'});
    }
}
class Game1 {
	constructor() {
        this.GameModel = new GameModel();
        this.GameModel.startbtn.on('click',function(){
            setTrackButton('btn_m_legend_go_3');
            this.Game1Start();
        }.bind(this));
        this.GameModel.again.on('click',function(){
            setTrackButton('btn_m_failure_go');
            this.GameModel.failPopup.fadeOut();
            this.Game1Start();
        }.bind(this));


        if (window.DeviceOrientationEvent) {
            window.addEventListener('deviceorientation', function(eventData) {
                this.windowDeviceEvent(eventData);
            }.bind(this));
        }

        this.ready();
	}
    ready() {
        console.log('game1 init');
        setTrackPV('pv_m_legend_3');
        this.fps = 30;
        this.endTimeout = 30;
        this.nowendTime = this.endTimeout;
        this.bgspeed = -30;
        this.waterchildspeed = 15;
        this.passCar = 0;
        this.successCarNum = 10;
        this.start = false;
        this.canvas = document.getElementById("game1");
        this.stage = new createjs.Stage(this.canvas);

        //bg
        this.gamebg = new createjs.Bitmap('images/game1_bg.jpg');
        this.gamebgMovieClip = new createjs.MovieClip();
        this.gamebgMovieClip.addChild(this.gamebg);
        this.stage.addChild(this.gamebgMovieClip);
        this.gamebg2 = this.gamebg.clone();
        this.gamebgMovieClip.addChild(this.gamebg2);
        $(window).load(function(){
            this.gamebg.x = ( this.gamebg.getTransformedBounds().width - 640 ) / 2 * -1;
            this.gamebg2.x = ( this.gamebg.getTransformedBounds().width - 640 ) / 2 * -1;
            this.gamebgH = this.gamebg.getTransformedBounds().height;
            this.gamebg2.y = this.gamebgH*-1;
        }.bind(this));

        //waterchild
        this.waterchild = new createjs.Bitmap('images/game1_bicycle.png');
        this.stage.addChild(this.waterchild);
        this.waterchild.y = 814;
        this.waterchild.x = 251;

        //car
        this.carL = new createjs.Bitmap('images/game1_car1.png');
        this.stage.addChild(this.carL);
        this.carL.x = 126;
        this.carL.y = -295;
        this.carLspeed = 0;

        this.carR = new createjs.Bitmap('images/game1_car2.png');
        this.stage.addChild(this.carR);
        this.carR.x = 353;
        this.carR.y = -295;
        this.carRspeed = 0;

        //boom
        this.boom = new createjs.Bitmap('images/game1_fire.png');
        this.stage.addChild(this.boom);
        this.boom.orgX = -1100;
        this.boom.orgY = -690;
        this.boomInit();

        createjs.Ticker.setFPS(this.fps);
		createjs.Ticker.addEventListener("tick", this.StageListenter.bind(this));

    }
    boomInit() {
        this.boom.x = this.boom.orgX;
        this.boom.y = this.boom.orgY;
    }
    GameCarIint() {
        this.boomInit();
        this.carRspeed = 0;
        this.carR.y= -295;
        this.carLspeed = 0;
        this.carL.y= -295;
    }
    Game1Start(){
        setTrackPV('pv_m_game_3');
        $('.wrapper').attr('style','');
        this.passCar = 0;
        this.nowendTime = this.endTimeout;
        this.GameModel.timer.html(this.nowendTime);
        this.GameModel.info.fadeOut();
        this.GameModel.scoreboard.fadeIn();
        this.GameModel.clock.fadeIn();
        this.setWaterchildPosition();
        this.GameCarIint();
        this.start = true;
        setTimeout(function(){
            this.GameRandomCar();
        }.bind(this),1500);

        this.countDown();
    }
    Game1End() {
        clearTimeout(this.hitTimeout);
        this.start = false;

        if(this.passCar >= this.successCarNum) gamePasses();
        else{
            console.log('Game over');
            setTrackPV('pv_m_failure');
            this.GameModel.AppierTrack();
            this.GameModel.failPopup.fadeIn();
        }
    }
    countDown() {
        setTimeout(function(){
            this.nowendTime -= 1;
            this.GameModel.timer.html(this.nowendTime);
            if(this.nowendTime >0) this.countDown();
            else this.Game1End();
        }.bind(this),1000);
    }
    GameRandomCar() {
        this.GameCarIint();
        this.random = Math.round(Math.random()*1);
        
        if(this.random>0) this.carLspeed = this.bgspeed * 9 / 10 * -1;
        else  this.carRspeed = this.bgspeed * 1.2 * -1;
    }
    StageListenter(){
        if(this.start){
            //BG
            if( this.gamebgMovieClip.y >=  this.gamebgH){
                this.gamebgMovieClip.y = this.gamebgMovieClip.y - this.gamebgH;
            }else this.gamebgMovieClip.y -= this.bgspeed;

            //waterchild
            this.waterchild.x += this.waterchildspeed;
            if(this.waterchild.x <= 100) this.waterchild.x = 100;
            else if(this.waterchild.x >= 410) this.waterchild.x = 410;

            //car
            this.carL.y += this.carLspeed;
            this.carR.y += this.carRspeed;
            if(this.carL.y >= 1095){
                this.passCar +=1;
                this.GameRandomCar();
            }
            if(this.carR.y >= 1095){
                this.passCar +=1;
                this.GameRandomCar();
            }
            
            //hitTest
            for(var i=0; i< this.waterchildPointList.length; i++){
                var pt = this.carL.globalToLocal(this.waterchildPointList[i]._x,this.waterchildPointList[i]._y);
                if(this.carL.hitTest(pt.x,pt.y)){
                    this.boom.x=this.waterchildPointList[i]._x;
                    this.boom.y=this.waterchildPointList[i]._y;
                    this.afterHit();
                    return;
                }
                var pt2 = this.carR.globalToLocal(this.waterchildPointList[i]._x,this.waterchildPointList[i]._y);
                if(this.carR.hitTest(pt2.x,pt2.y)){
                    this.boom.x=this.waterchildPointList[i]._x;
                    this.boom.y=this.waterchildPointList[i]._y;
                    this.afterHit();
                    return;
                }
            }

            //score
            this.GameModel.score.html(this.passCar);
        }
        
        this.stage.update();
    }
    afterHit(){
        this.start = false;
        this.hitTimeout = setTimeout(function(){
            this.GameRandomCar();
            this.start = true;
        }.bind(this),1000);

    }
    windowDeviceEvent(eventData){
        if(this.start){
            this.waterchildDirection = eventData.gamma;
            if(this.waterchildDirection <= -2) this.waterchildspeed = Math.abs(this.waterchildspeed) * -1;
            else if( this.waterchildDirection >= 2 ) this.waterchildspeed = Math.abs(this.waterchildspeed);
            
            this.setWaterchildPosition();
        }        
    }
    setWaterchildPosition() {
        this.waterchildPointList = [
            {
                _x:this.waterchild.x + 69,
                _y:this.waterchild.y
            },
            {
                _x:this.waterchild.x + 138,
                _y:this.waterchild.y + 133
            },
            {
                _x:this.waterchild.x + 69,
                _y:this.waterchild.y + 266
            },
            {
                _x:this.waterchild.x,
                _y:this.waterchild.y + 133
            },
            {
                _x:this.waterchild.x + 69,
                _y:this.waterchild.y + 133
            }
        ];
    }
}
class Game2 {
	constructor() {
        this.GameModel = new GameModel();
		this.GameModel.startbtn.on('click',function(){
            setTrackButton('btn_m_legend_go_5');
            this.GameStart();
        }.bind(this));
        this.GameModel.again.on('click',function(){
            setTrackButton('btn_m_failure_go');
            this.GameModel.failPopup.fadeOut();
            this.GameStart();
        }.bind(this));
        
        this.ready();
	}
    ready() {
        console.log('game2 init');
        setTrackPV('pv_m_legend_5');
        this.endTimeout = 30;
        this.nowendTime = this.endTimeout;
        this.passNum = 0;
        this.successCarNum = 10;
        this.start = false;
        
        this.wrp = $('.bg');
        this.ball = $('.ball');
        this.target = $('.gamebox');
        this.targetX1 = this.target.offset().left;
        this.targetX2 = this.target.offset().left + this.target.width()/2;
        this.targetY1 = this.target.offset().top - this.ball.height()*4/5;
        this.targetY2 = this.target.offset().top + this.ball.height()/2;        
        this.ballTime = '';
        this.t = 0;
        this.ctrl = false;
        this.y1 = 0;
        this.y2 = 0;
        this.x1 = 0;
        this.x2 = 0;

        var edown = 'touchstart',
            eup = 'touchend',
            emove = 'touchmove';

        this.r = 0.5; 
        this.del = 0.5;//阻力
        this.fps = 20; //fps
    
        // o.ball
        this.ball.on(edown,function(e){
            e = e.originalEvent.touches[0];
            $('.wrapper').on(emove,this.o_ball_move.bind(this));
            this.ctrl = true;
            this.t = 0;
            this.y1 = e.pageY;
            this.y2 = e.pageY;
            this.x1 = e.pageX;
            this.x2 = e.pageX;
            this.ballTime = setInterval(function(){
                this.t +=1;
            }.bind(this),1);
        }.bind(this));
        $('body').on(eup,function(){
            $('.wrapper').off(emove,this.o_ball_move.bind(this));
            if(this.ctrl) this.ballEnd();
        }.bind(this));
        $('body').on(edown,this.bodytouch.bind(this));
    }
     o_ball_move(e){
        e = e.originalEvent.touches[0];
        //y
        if(e.pageY< $(window).height()/2){
            // this.ballinit();
            $('.wrapper').off('touchmove',this.o_ball_move.bind(this));
            if(this.ctrl) this.ballEnd();
            return;
        }
        this.ballbottom = this.wrp.height() - e.pageY - this.ball.height() / 2;
        this.y2 = e.pageY;
        this.ball.css('bottom',this.ballbottom);

        //x
        this.ballmleft = this.wrp.width() - e.pageX - this.ball.width();
        this.x2 = e.pageX;
        this.ball.css('margin-left',this.ballmleft*-1);
    }
    ballEnd(){
        if(this.y2 == this.y1) return
        this.ctrl = false;
        clearInterval(this.ballTime);
        
        //y
        var s = this.y2 - this.y1;
        var a = 2 * s / this.t / this.t;
        var f = a;
        this.v0 = a * this.t;
        this.t2 = Math.abs(Math.floor(this.v0 * 1 / this.r));
        this.s2 = this.v0 * this.t2 * -1 * this.del;
        this.a2 = Math.sqrt(this.s2 * 2);
        var goal = this.ballbottom + this.s2;
        if(goal > this.wrp.height() + this.ball.height()) goal = this.wrp.height() + this.ball.height();
        else if(goal < 0) goal = 0;

        //x
        var ss = this.x2 - this.x1;
        var aa = 2 * ss / this.t / this.t;
        var ff = aa;
        this.v0x = aa * this.t;
        this.t2x = Math.floor(this.v0x * 1 / this.r);
        this.s2x = this.v0x * this.t2 * -1 * this.del;
        this.a2x = Math.sqrt(this.s2x * 2);
        var goalx = this.ballmleft + this.s2x;
        if(goalx > this.wrp.width()/2) goalx = this.wrp.width()/2;
        else if(goalx < this.wrp.width()/2*-1) goalx = this.wrp.width()/2*-1;
        this.ball.animate({'bottom':goal,'margin-left':goalx*-1,'width':'30vw'},this.t2 * this.fps,'easeOutQuart',function(){this.checkball();}.bind(this));
        
    }
    checkball(){
        if(
            this.ball.offset().left >= this.targetX1 && this.ball.offset().left <= this.targetX2 &&
            this.ball.offset().top >= this.targetY1 && this.ball.offset().top <= this.targetY2
        ){
            this.passNum+=1;
            this.GameModel.score.html(this.passNum);
        }
        setTimeout(function(){
            this.ballinit();
        }.bind(this),300);
    }
    ballinit(){
        var random = Math.round(Math.random()*2) +1;
        this.ball.attr('class','ball b'+random);
        this.ball.attr('style','');
    }
    bodytouch(e){
        if(this.start) e.preventDefault();
    }
    GameStart(){
        setTrackPV('pv_m_game_5');
        $('.wrapper').attr('style','');
        this.nowendTime = this.endTimeout;
        this.GameModel.timer.html(this.nowendTime);
        this.GameModel.info.fadeOut();
        this.GameModel.scoreboard.fadeIn();
        this.GameModel.clock.fadeIn();
        this.start = true;
        this.ballinit();
        this.passNum = 0;
        this.GameModel.score.html(this.passNum);
        this.countDown();
    }
    GameEnd() {
        this.start = false;

        if(this.passNum >= this.successCarNum) gamePasses();
        else{
            console.log('Game over');
            setTrackPV('pv_m_failure');
            this.GameModel.AppierTrack();
            this.GameModel.failPopup.fadeIn();
        }
    }
    countDown() {
        setTimeout(function(){
            this.nowendTime -= 1;
            this.GameModel.timer.html(this.nowendTime);
            if(this.nowendTime >0) this.countDown();
            else this.GameEnd();
        }.bind(this),1000);
    }
    
}
class Game3 {
	constructor() {
        this.GameModel = new GameModel();
		this.GameModel.startbtn.on('click',function(){
            setTrackButton('btn_m_legend_go_1');
            this.GameStart();
        }.bind(this));
        this.GameModel.again.on('click',function(){
            setTrackButton('btn_m_failure_go');
            this.GameModel.failPopup.fadeOut();
            this.GameStart();
        }.bind(this));
        
        this.ready();
	}
    ready() {
        console.log('game3 init');
        setTrackPV('pv_m_legend_1');
        this.endTimeout = 30;
        this.nowendTime = this.endTimeout;
        this.passNum = 0;
        this.successCarNum = 10;
        this.start = false;
        this.canshake = false;
        this.ball = $('.ball');

        this.SHAKE_THRESHOLD = 2000;
        this.last_update = new Date().getTime();
        this.x = this.y = this.z = this.last_x = this.last_y = this.last_z = 0;
        // this.media;

        if (window.DeviceOrientationEvent) {
            window.addEventListener('devicemotion', function(eventData) {
                this.windowDeviceEvent(eventData);
            }.bind(this));
        }
    }
    windowDeviceEvent(eventData) {
        if(this.start && this.canshake){
            var acceleration = eventData.accelerationIncludingGravity;
            var curTime = new Date().getTime();
            if ((curTime - this.last_update) > 100) {
                var diffTime = curTime - this.last_update;
                this.last_update = curTime;
                this.x = acceleration.x;
                this.y = acceleration.y;
                this.z = acceleration.z;
                var speed = Math.abs(this.x + this.y + this.z - this.last_x - this.last_y - this.last_z) / diffTime * 10000;

                if (speed > this.SHAKE_THRESHOLD) {
                    this.canshake = false;
                    this.passNum +=1;
                    this.GameModel.score.html(this.passNum);
                    this.ball.addClass('on');

                    setTimeout(function(){
                        this.canshake = true;
                        this.ball.removeClass('on');
                    }.bind(this),1000);
                }else if(speed >= this.SHAKE_THRESHOLD/2 && speed <= this.SHAKE_THRESHOLD){
                    this.canshake = false;
                    this.ball.addClass('off');

                    setTimeout(function(){
                        this.canshake = true;
                        this.ball.removeClass('off');
                    }.bind(this),500);
                }
                this.last_x = this.x;
                this.last_y = this.y;
                this.last_z = this.z;
            }
        }        
    }
    GameStart(){
        setTrackPV('pv_m_game_1');
        $('.wrapper').attr('style','');
        this.nowendTime = this.endTimeout;
        this.GameModel.timer.html(this.nowendTime);
        this.GameModel.info.fadeOut();
        this.GameModel.scoreboard.fadeIn();
        this.GameModel.clock.fadeIn();
        this.start = true;
        this.canshake = true;
        this.passNum = 0;
        this.GameModel.score.html(this.passNum);
        this.countDown();
    }
    GameEnd() {
        this.start = false;

        if(this.passNum >= this.successCarNum) gamePasses();
        else{
            console.log('Game over');
            setTrackPV('pv_m_failure');
            this.GameModel.AppierTrack();
            this.GameModel.failPopup.fadeIn();
        }
    }
    countDown() {
        setTimeout(function(){
            this.nowendTime -= 1;
            this.GameModel.timer.html(this.nowendTime);
            if(this.nowendTime >0) this.countDown();
            else this.GameEnd();
        }.bind(this),1000);
    }
    
}
class Game4 {
	constructor() {
        this.GameModel = new GameModel();
		this.GameModel.startbtn.on('click',function(){
            setTrackButton('btn_m_legend_go_2');
            this.GameStart();
        }.bind(this));
        this.GameModel.again.on('click',function(){
            setTrackButton('btn_m_failure_go');
            this.GameModel.failPopup.fadeOut();
            this.GameStart();
        }.bind(this));
        
        this.ready();
	}
    ready() {
        console.log('game4 init');
        setTrackPV('pv_m_legend_2');
        this.endTimeout = 30;
        this.nowendTime = this.endTimeout;
        this.passNum = 0;
        this.successCarNum = 10;
        this.start = false;

        this.page = $('.page');
        this.itembox = this.page.find('.itembox');
        this.item = this.itembox.find('.item');
        this.icon = this.page.find('.icon');
        this.itemboxX=0;
        this.itemboxMin=( $(window).width() + this.item.outerWidth(true)) * -1;
        this.itemboxOrg = $(window).width() * -1;
        this.speed = 1.5;
        this.iconTimeout='';

        this.item.on('touchstart',function(e){
            if($(e.currentTarget).hasClass('touch')) return;
            $(e.currentTarget).addClass('touch');
            if($(e.currentTarget).hasClass('goal_2')){
                this.passNum +=1;
                this.GameModel.score.html(this.passNum);
            }else{
                clearTimeout(this.iconTimeout);
                this.icon.addClass('on');
                this.iconTimeout = setTimeout(function(){
                    this.icon.removeClass('on');
                }.bind(this),1000);
            }
        }.bind(this));
    }
    GameStart(){
        setTrackPV('pv_m_game_2');
        $('.wrapper').attr('style','');
        this.nowendTime = this.endTimeout;
        this.GameModel.timer.html(this.nowendTime);
        this.GameModel.info.fadeOut();
        this.GameModel.scoreboard.fadeIn();
        this.GameModel.clock.fadeIn();
        this.start = true;
        this.canshake = true;
        this.passNum = 0;
        this.GameModel.score.html(this.passNum);
        this.countDown();
        
        this.itembox.attr('style','');
        for(var i=0; i<this.item.length;i++){
            var random = Math.round(Math.random()*2)+1;
            this.item.eq(i).attr('class','item goal_'+random);
        }

        this.SushiGo();
    }
    SushiGo() {
        this.itemboxX-=this.speed;
        if(this.itemboxX <= this.itemboxMin){
            var random = Math.round(Math.random()*7)+1;
            if(random==4 || random==6) random=1;
            else if(random==5) random=3;
            else if(random==7 || random==8) random=2;
            this.itembox.find('.item').first().attr('class','item goal_'+random);
            this.itembox.find('.item').last().after(this.itembox.find('.item').first());
            this.itemboxX = this.itemboxOrg;
        }
        this.itembox.css('transform','translateX('+this.itemboxX+'px)');
        if(this.start){
            setTimeout(function(){
                this.SushiGo();
            }.bind(this),1);
        }
    }
    GameEnd() {
        this.start = false;

        if(this.passNum >= this.successCarNum) gamePasses();
        else{
            console.log('Game over');
            setTrackPV('pv_m_failure');
            this.GameModel.AppierTrack();
            this.GameModel.failPopup.fadeIn();
        }
    }
    countDown() {
        setTimeout(function(){
            this.nowendTime -= 1;
            this.GameModel.timer.html(this.nowendTime);
            if(this.nowendTime >0) this.countDown();
            else this.GameEnd();
        }.bind(this),1000);
    }
    
}
class Game5 {
	constructor() {
        this.GameModel = new GameModel();
		this.GameModel.startbtn.on('click',function(){
            setTrackButton('btn_m_legend_go_4');
            this.GameStart();
        }.bind(this));
        this.GameModel.again.on('click',function(){
            setTrackButton('btn_m_failure_go');
            this.GameModel.failPopup.fadeOut();
            this.GameStart();
        }.bind(this));
        
        this.ready();
	}
    ready() {
        console.log('game5 init');
        setTrackPV('pv_m_legend_4');
        this.endTimeout = 30;
        this.nowendTime = this.endTimeout;
        this.passNum = 0;
        this.successCarNum = 10;
        this.start = false;
        
        this.wrp = $('.bg');
        this.ball = $('.ball');
        this.target = $('.gamebox');
        this.targetX1 = this.target.offset().left - this.target.width()/5;
        this.targetX2 = this.target.offset().left + this.target.width()*4/5;
        this.targetY1 = this.target.offset().top - this.ball.height()*4/5;
        this.targetY2 = this.target.offset().top + this.target.height()*2/3;        
        this.ballTime = '';
        this.t = 0;
        this.ctrl = false;
        this.y1 = 0;
        this.y2 = 0;
        this.x1 = 0;
        this.x2 = 0;

        var edown = 'touchstart',
            eup = 'touchend',
            emove = 'touchmove';

        this.r = 0.5; 
        this.del = 0.5;//阻力
        this.fps = 20; //fps
    
        // o.ball
        this.ball.on(edown,function(e){
            e = e.originalEvent.touches[0];
            $('.wrapper').on(emove,this.o_ball_move.bind(this));
            this.ctrl = true;
            this.t = 0;
            this.y1 = e.pageY;
            this.y2 = e.pageY;
            this.x1 = e.pageX;
            this.x2 = e.pageX;
            this.ballTime = setInterval(function(){
                this.t +=1;
            }.bind(this),1);
        }.bind(this));
        $('body').on(eup,function(){
            $('.wrapper').off(emove,this.o_ball_move.bind(this));
            if(this.ctrl) this.ballEnd();
        }.bind(this));
        $('body').on(edown,this.bodytouch.bind(this));
    }
     o_ball_move(e){
        e = e.originalEvent.touches[0];
        //y
        if(e.pageY< $(window).height()/2){
            // this.ballinit();
            $('.wrapper').off('touchmove',this.o_ball_move.bind(this));
            if(this.ctrl) this.ballEnd();
            return;
        }
        this.ballbottom = this.wrp.height() - e.pageY - this.ball.height() / 2;
        this.y2 = e.pageY;
        this.ball.css('bottom',this.ballbottom);

        //x
        this.ballmleft = this.wrp.width() - e.pageX - this.ball.width();
        this.x2 = e.pageX;
        this.ball.css('margin-left',this.ballmleft*-1);
    }
    ballEnd(){
        if(this.y2 == this.y1) return
        this.ctrl = false;
        clearInterval(this.ballTime);
        
        //y
        var s = this.y2 - this.y1;
        var a = 2 * s / this.t / this.t;
        var f = a;
        this.v0 = a * this.t;
        this.t2 = Math.abs(Math.floor(this.v0 * 1 / this.r));
        this.s2 = this.v0 * this.t2 * -1 * this.del;
        this.a2 = Math.sqrt(this.s2 * 2);
        var goal = this.ballbottom + this.s2;
        if(goal > this.wrp.height()) goal = this.wrp.height();
        else if(goal < 0) goal = 0;

        //x
        var ss = this.x2 - this.x1;
        var aa = 2 * ss / this.t / this.t;
        var ff = aa;
        this.v0x = aa * this.t;
        this.t2x = Math.floor(this.v0x * 1 / this.r);
        this.s2x = this.v0x * this.t2 * -1 * this.del;
        this.a2x = Math.sqrt(this.s2x * 2);
        var goalx = this.ballmleft + this.s2x;
        if(goalx > this.wrp.width()/2) goalx = this.wrp.width()/2;
        else if(goalx < this.wrp.width()/2*-1) goalx = this.wrp.width()/2*-1;
        this.ball.animate({'bottom':goal,'margin-left':goalx*-1,'width':'25vw'},this.t2 * this.fps,'easeOutQuart',function(){this.checkball();}.bind(this));
        
    }
    checkball(){
        if(
            this.ball.offset().left >= this.targetX1 && this.ball.offset().left <= this.targetX2 &&
            this.ball.offset().top >= this.targetY1 && this.ball.offset().top <= this.targetY2
        ){
            this.passNum+=1;
            this.GameModel.score.html(this.passNum);
        }
        setTimeout(function(){
            this.ballinit();
        }.bind(this),300);
    }
    ballinit(){
        var random = Math.round(Math.random()*2) +1;
        this.ball.attr('class','ball b'+random);
        this.ball.attr('style','');
    }
    bodytouch(e){
        if(this.start) e.preventDefault();
    }
    GameStart(){
        setTrackPV('pv_m_game_4');
        $('.wrapper').attr('style','');
        this.nowendTime = this.endTimeout;
        this.GameModel.timer.html(this.nowendTime);
        this.GameModel.info.fadeOut();
        this.GameModel.scoreboard.fadeIn();
        this.GameModel.clock.fadeIn();
        this.start = true;
        this.ballinit();
        this.passNum = 0;
        this.GameModel.score.html(this.passNum);
        this.countDown();
    }
    GameEnd() {
        this.start = false;

        if(this.passNum >= this.successCarNum) gamePasses();
        else{
            console.log('Game over');
            setTrackPV('pv_m_failure');
            this.GameModel.AppierTrack();
            this.GameModel.failPopup.fadeIn();
        }
    }
    countDown() {
        setTimeout(function(){
            this.nowendTime -= 1;
            this.GameModel.timer.html(this.nowendTime);
            if(this.nowendTime >0) this.countDown();
            else this.GameEnd();
        }.bind(this),1000);
    }
    
}

$(function() {
	var game = new Game();
});

