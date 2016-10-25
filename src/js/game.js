﻿class HeaderModel {
    constructor() {
        this.header = $('.header');
        this.menu = $('.menu');

        this.menubtn = this.header.find('.menubtn');
        this.menubtn.on('click',function(){
            if(this.menubtn.hasClass('on')) this.openmenu(false);
            else this.openmenu(true);
        }.bind(this));

        this.menua = this.menu.find('.menua');
        this.menua.on('click',function(e){
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
                window.location.href="login_member.php";
                break;
            case 'm2':
                window.location.href="inquire.php";
                break;
            case 'm3':
                window.location.href="about.html";
                break;
            case 'm4':
                window.location.href="award_info.html";
                break;
            case 'm5':
                window.location.href="award_list.html";
                break;
            case 'm6':
                console.log('share fb');
                break;
            case 'm7':
                window.location.href="game_list.html";
                // alert('遊戲將於11/2正式上線');
                break;
            case 'm8':
                window.location.href="login_number.php";
                break;
            case 'm9':
                window.location.href="index.html";
                break;
        }
    }
}
class Game_list {
	constructor() {
		console.log('game LIST');
		this.page = $('.page.game_list');
		this.banner_swiper = new Swiper('.swiper-container', {
		  	speed:600,	  
		  	wrapperClass: 'swiper-wrapper',
		  	slideClass: 'swiper-slide',
			nextButton:$('.next'),
			prevButton:$('.prev'),
		    slidesPerView: 1,
		    spaceBetween: 0,
		    loop: true,
		    autoplay:6000,
		    autoplayDisableOnInteraction:false
		});	
		this.gobtn = this.page.find('.gobtn');
		this.gobtn.on('click',function(e){
            window.location.href="game"+ $(e.currentTarget).parent().attr('num') +'.html';
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
        
        
    }
}
class Game1 {
	constructor() {
		this.ready();
		this.page = $('.page.game1');
        this.info = this.page.find('.info');
        this.scoreboard = this.page.find('.scoreboard');
        this.score = this.scoreboard.find('.num');
        this.startbtn = this.info.find('.startbtn');
        this.startbtn.on('click',function(){
            this.Game1Start();
        }.bind(this));

        this.failPopup = $('.failPopup');
        this.again = this.failPopup.find('.again');
        this.back = this.failPopup.find('.back');
        this.again.on('click',function(){
            this.failPopup.fadeOut();
            this.Game1Start();
        }.bind(this));
        this.back.on('click',function(){
            window.location.href="game_list.html";
        }.bind(this));

        if (window.DeviceOrientationEvent) {
            window.addEventListener('deviceorientation', function(eventData) {
                this.windowDeviceEvent(eventData);
            }.bind(this));
        }
	}
    ready() {
        console.log('game1 init');
        this.fps = 60;
        this.endTimeout = 30000;
        this.carTime = 2000;
        this.bgspeed = -15;
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
        this.passCar = 0;
        this.info.fadeOut();
        this.scoreboard.fadeIn();
        this.setWaterchildPosition();
        this.GameCarIint();
        this.start = true;
        setTimeout(function(){
            this.GameRandomCar();
        }.bind(this),1500);

        setTimeout(function(){
            this.Game1End();
        }.bind(this),this.endTimeout);
    }
    Game1End() {
        clearTimeout(this.hitTimeout);
        this.start = false;

        if(this.passCar >= this.successCarNum) gamePasses();
        else{
            console.log('Game over');
            this.failPopup.fadeIn();
        }
    }
    
    GameRandomCar() {
        this.GameCarIint();
        this.random = Math.round(Math.random()*1);
        
        if(this.random>0) this.carLspeed = this.bgspeed * 9 / 10 * -1;
        else  this.carRspeed = this.bgspeed * 1.2 * -1;

        // setTimeout(function(){
        //     if(this.start) this.GameRandomCar();
        // }.bind(this),this.carTime);
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
                    console.log("I'm hit carL!");
                    this.boom.x=this.waterchildPointList[i]._x;
                    this.boom.y=this.waterchildPointList[i]._y;
                    this.afterHit();
                    return;
                }
                var pt2 = this.carR.globalToLocal(this.waterchildPointList[i]._x,this.waterchildPointList[i]._y);
                if(this.carR.hitTest(pt2.x,pt2.y)){
                    console.log("I'm hit carR!");
                    this.boom.x=this.waterchildPointList[i]._x;
                    this.boom.y=this.waterchildPointList[i]._y;
                    this.afterHit();
                    return;
                }
            }

            //score
            this.score.html(this.passCar);
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

$(function() {
	var game = new Game();
});

