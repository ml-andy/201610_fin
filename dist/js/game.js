"use strict";function _classCallCheck(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function t(t,i){for(var e=0;e<i.length;e++){var a=i[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(i,e,a){return e&&t(i.prototype,e),a&&t(i,a),i}}(),HeaderModel=function(){function t(){_classCallCheck(this,t),this.header=$(".header"),this.menu=$(".menu"),this.menubtn=this.header.find(".menubtn"),this.menubtn.on("click",function(){this.menubtn.hasClass("on")?this.openmenu(!1):this.openmenu(!0)}.bind(this)),this.menua=this.menu.find(".menua"),this.menua.on("click",function(t){this.menuaClick($(t.currentTarget).attr("class").replace("on","").split("menua ")[1].replace(" ",""),0)}.bind(this))}return _createClass(t,[{key:"openmenu",value:function(t){t?(this.menubtn.addClass("on"),$(".menu").addClass("on")):(this.menubtn.removeClass("on"),$(".menu").removeClass("on"))}},{key:"menuaClick",value:function(t){switch(t){case"m1":window.location.href="login_member.php";break;case"m2":window.location.href="inquire.php";break;case"m3":window.location.href="about.html";break;case"m4":window.location.href="award_info.html";break;case"m5":window.location.href="award_list.html";break;case"m6":console.log("share fb");break;case"m7":window.location.href="game_list.html";break;case"m8":window.location.href="login_number.php";break;case"m9":window.location.href="index.html"}}}]),t}(),Game_list=function t(){_classCallCheck(this,t),console.log("game LIST"),this.page=$(".page.game_list"),this.banner_swiper=new Swiper(".swiper-container",{speed:600,wrapperClass:"swiper-wrapper",slideClass:"swiper-slide",nextButton:$(".next"),prevButton:$(".prev"),slidesPerView:1,spaceBetween:0,loop:!0,autoplay:6e3,autoplayDisableOnInteraction:!1}),this.gobtn=this.page.find(".gobtn"),this.gobtn.on("click",function(t){window.location.href="game"+$(t.currentTarget).parent().attr("num")+".html"}.bind(this))},Game=function(){function t(){_classCallCheck(this,t),this.ready(),this.HeaderModel=new HeaderModel,$(window).load(function(){this.window_load()}.bind(this))}return _createClass(t,[{key:"ready",value:function(){switch(this.page=$(".page"),this.page.attr("class").split("page game ")[1]){case"game_list":this.game_list=new Game_list;break;case"game1":this.game1=new Game1;break;case"game2":this.game2=new Game2;break;case"game3":this.game3=new Game3;break;case"game4":this.game4=new Game4;break;case"game5":this.game5=new Game5}}},{key:"window_load",value:function(){$(".loading").fadeOut()}}]),t}(),GameModel=function i(){_classCallCheck(this,i)},Game1=function(){function t(){_classCallCheck(this,t),this.ready(),this.page=$(".page.game1"),this.info=this.page.find(".info"),this.scoreboard=this.page.find(".scoreboard"),this.score=this.scoreboard.find(".num"),this.startbtn=this.info.find(".startbtn"),this.startbtn.on("click",function(){this.Game1Start()}.bind(this)),this.failPopup=$(".failPopup"),this.again=this.failPopup.find(".again"),this.back=this.failPopup.find(".back"),this.again.on("click",function(){this.failPopup.fadeOut(),this.Game1Start()}.bind(this)),this.back.on("click",function(){window.location.href="game_list.html"}.bind(this)),window.DeviceOrientationEvent&&window.addEventListener("deviceorientation",function(t){this.windowDeviceEvent(t)}.bind(this))}return _createClass(t,[{key:"ready",value:function(){console.log("game1 init"),this.fps=60,this.endTimeout=3e4,this.carTime=2e3,this.bgspeed=-15,this.waterchildspeed=15,this.passCar=0,this.successCarNum=10,this.start=!1,this.canvas=document.getElementById("game1"),this.stage=new createjs.Stage(this.canvas),this.gamebg=new createjs.Bitmap("images/game1_bg.jpg"),this.gamebgMovieClip=new createjs.MovieClip,this.gamebgMovieClip.addChild(this.gamebg),this.stage.addChild(this.gamebgMovieClip),this.gamebg2=this.gamebg.clone(),this.gamebgMovieClip.addChild(this.gamebg2),$(window).load(function(){this.gamebg.x=(this.gamebg.getTransformedBounds().width-640)/2*-1,this.gamebg2.x=(this.gamebg.getTransformedBounds().width-640)/2*-1,this.gamebgH=this.gamebg.getTransformedBounds().height,this.gamebg2.y=this.gamebgH*-1}.bind(this)),this.waterchild=new createjs.Bitmap("images/game1_bicycle.png"),this.stage.addChild(this.waterchild),this.waterchild.y=814,this.waterchild.x=251,this.carL=new createjs.Bitmap("images/game1_car1.png"),this.stage.addChild(this.carL),this.carL.x=126,this.carL.y=-295,this.carLspeed=0,this.carR=new createjs.Bitmap("images/game1_car2.png"),this.stage.addChild(this.carR),this.carR.x=353,this.carR.y=-295,this.carRspeed=0,this.boom=new createjs.Bitmap("images/game1_fire.png"),this.stage.addChild(this.boom),this.boom.orgX=-1100,this.boom.orgY=-690,this.boomInit(),createjs.Ticker.setFPS(this.fps),createjs.Ticker.addEventListener("tick",this.StageListenter.bind(this))}},{key:"boomInit",value:function(){this.boom.x=this.boom.orgX,this.boom.y=this.boom.orgY}},{key:"GameCarIint",value:function(){this.boomInit(),this.carRspeed=0,this.carR.y=-295,this.carLspeed=0,this.carL.y=-295}},{key:"Game1Start",value:function(){this.passCar=0,this.info.fadeOut(),this.scoreboard.fadeIn(),this.setWaterchildPosition(),this.GameCarIint(),this.start=!0,setTimeout(function(){this.GameRandomCar()}.bind(this),1500),setTimeout(function(){this.Game1End()}.bind(this),this.endTimeout)}},{key:"Game1End",value:function(){clearTimeout(this.hitTimeout),this.start=!1,this.passCar>=this.successCarNum?gamePasses():(console.log("Game over"),this.failPopup.fadeIn())}},{key:"GameRandomCar",value:function(){this.GameCarIint(),this.random=Math.round(1*Math.random()),this.random>0?this.carLspeed=9*this.bgspeed/10*-1:this.carRspeed=1.2*this.bgspeed*-1}},{key:"StageListenter",value:function(){if(this.start){this.gamebgMovieClip.y>=this.gamebgH?this.gamebgMovieClip.y=this.gamebgMovieClip.y-this.gamebgH:this.gamebgMovieClip.y-=this.bgspeed,this.waterchild.x+=this.waterchildspeed,this.waterchild.x<=100?this.waterchild.x=100:this.waterchild.x>=410&&(this.waterchild.x=410),this.carL.y+=this.carLspeed,this.carR.y+=this.carRspeed,this.carL.y>=1095&&(this.passCar+=1,this.GameRandomCar()),this.carR.y>=1095&&(this.passCar+=1,this.GameRandomCar());for(var t=0;t<this.waterchildPointList.length;t++){var i=this.carL.globalToLocal(this.waterchildPointList[t]._x,this.waterchildPointList[t]._y);if(this.carL.hitTest(i.x,i.y))return console.log("I'm hit carL!"),this.boom.x=this.waterchildPointList[t]._x,this.boom.y=this.waterchildPointList[t]._y,void this.afterHit();var e=this.carR.globalToLocal(this.waterchildPointList[t]._x,this.waterchildPointList[t]._y);if(this.carR.hitTest(e.x,e.y))return console.log("I'm hit carR!"),this.boom.x=this.waterchildPointList[t]._x,this.boom.y=this.waterchildPointList[t]._y,void this.afterHit()}this.score.html(this.passCar)}this.stage.update()}},{key:"afterHit",value:function(){this.start=!1,this.hitTimeout=setTimeout(function(){this.GameRandomCar(),this.start=!0}.bind(this),1e3)}},{key:"windowDeviceEvent",value:function(t){this.start&&(this.waterchildDirection=t.gamma,this.waterchildDirection<=-2?this.waterchildspeed=Math.abs(this.waterchildspeed)*-1:this.waterchildDirection>=2&&(this.waterchildspeed=Math.abs(this.waterchildspeed)),this.setWaterchildPosition())}},{key:"setWaterchildPosition",value:function(){this.waterchildPointList=[{_x:this.waterchild.x+69,_y:this.waterchild.y},{_x:this.waterchild.x+138,_y:this.waterchild.y+133},{_x:this.waterchild.x+69,_y:this.waterchild.y+266},{_x:this.waterchild.x,_y:this.waterchild.y+133},{_x:this.waterchild.x+69,_y:this.waterchild.y+133}]}}]),t}();$(function(){new Game});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUuanMiXSwibmFtZXMiOlsiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIl9jcmVhdGVDbGFzcyIsImRlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJwcm9wcyIsImkiLCJsZW5ndGgiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJrZXkiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJwcm90b3R5cGUiLCJIZWFkZXJNb2RlbCIsInRoaXMiLCJoZWFkZXIiLCIkIiwibWVudSIsIm1lbnVidG4iLCJmaW5kIiwib24iLCJoYXNDbGFzcyIsIm9wZW5tZW51IiwiYmluZCIsIm1lbnVhIiwiZSIsIm1lbnVhQ2xpY2siLCJjdXJyZW50VGFyZ2V0IiwiYXR0ciIsInJlcGxhY2UiLCJzcGxpdCIsInZhbHVlIiwiX3QiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwibWVudWxpbmsiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJjb25zb2xlIiwibG9nIiwiR2FtZV9saXN0IiwicGFnZSIsImJhbm5lcl9zd2lwZXIiLCJTd2lwZXIiLCJzcGVlZCIsIndyYXBwZXJDbGFzcyIsInNsaWRlQ2xhc3MiLCJuZXh0QnV0dG9uIiwicHJldkJ1dHRvbiIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJsb29wIiwiYXV0b3BsYXkiLCJhdXRvcGxheURpc2FibGVPbkludGVyYWN0aW9uIiwiZ29idG4iLCJwYXJlbnQiLCJHYW1lIiwicmVhZHkiLCJsb2FkIiwid2luZG93X2xvYWQiLCJnYW1lX2xpc3QiLCJnYW1lMSIsIkdhbWUxIiwiZ2FtZTIiLCJHYW1lMiIsImdhbWUzIiwiR2FtZTMiLCJnYW1lNCIsIkdhbWU0IiwiZ2FtZTUiLCJHYW1lNSIsImZhZGVPdXQiLCJHYW1lTW9kZWwiLCJpbmZvIiwic2NvcmVib2FyZCIsInNjb3JlIiwic3RhcnRidG4iLCJHYW1lMVN0YXJ0IiwiZmFpbFBvcHVwIiwiYWdhaW4iLCJiYWNrIiwiRGV2aWNlT3JpZW50YXRpb25FdmVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudERhdGEiLCJ3aW5kb3dEZXZpY2VFdmVudCIsImZwcyIsImVuZFRpbWVvdXQiLCJjYXJUaW1lIiwiYmdzcGVlZCIsIndhdGVyY2hpbGRzcGVlZCIsInBhc3NDYXIiLCJzdWNjZXNzQ2FyTnVtIiwic3RhcnQiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3RhZ2UiLCJjcmVhdGVqcyIsIlN0YWdlIiwiZ2FtZWJnIiwiQml0bWFwIiwiZ2FtZWJnTW92aWVDbGlwIiwiTW92aWVDbGlwIiwiYWRkQ2hpbGQiLCJnYW1lYmcyIiwiY2xvbmUiLCJ4IiwiZ2V0VHJhbnNmb3JtZWRCb3VuZHMiLCJ3aWR0aCIsImdhbWViZ0giLCJoZWlnaHQiLCJ5Iiwid2F0ZXJjaGlsZCIsImNhckwiLCJjYXJMc3BlZWQiLCJjYXJSIiwiY2FyUnNwZWVkIiwiYm9vbSIsIm9yZ1giLCJvcmdZIiwiYm9vbUluaXQiLCJUaWNrZXIiLCJzZXRGUFMiLCJTdGFnZUxpc3RlbnRlciIsImZhZGVJbiIsInNldFdhdGVyY2hpbGRQb3NpdGlvbiIsIkdhbWVDYXJJaW50Iiwic2V0VGltZW91dCIsIkdhbWVSYW5kb21DYXIiLCJHYW1lMUVuZCIsImNsZWFyVGltZW91dCIsImhpdFRpbWVvdXQiLCJnYW1lUGFzc2VzIiwicmFuZG9tIiwiTWF0aCIsInJvdW5kIiwid2F0ZXJjaGlsZFBvaW50TGlzdCIsInB0IiwiZ2xvYmFsVG9Mb2NhbCIsIl94IiwiX3kiLCJoaXRUZXN0IiwiYWZ0ZXJIaXQiLCJwdDIiLCJodG1sIiwidXBkYXRlIiwid2F0ZXJjaGlsZERpcmVjdGlvbiIsImdhbW1hIiwiYWJzIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUlBLFNBQVNBLGlCQUFnQkMsRUFBVUMsR0FBZSxLQUFNRCxZQUFvQkMsSUFB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QUssV0FDTHNCLE1BQU8sV0F0Q1BqQixLQUFLK0UsT0FBUSxFQUNiL0UsS0FBS3NILFdBQWFKLFdBQVcsV0FDekJsSCxLQUFLbUgsZ0JBQ0xuSCxLQUFLK0UsT0FBUSxHQUNmdEUsS0FBS1QsTUFBTSxRQTBDYkwsSUFBSyxvQkFDTHNCLE1BQU8sU0F4Q09xRCxHQUNYdEUsS0FBSytFLFFBQ0ovRSxLQUFLcUksb0JBQXNCL0QsRUFBVWdFLE1BQ2xDdEksS0FBS3FJLHdCQUEyQnJJLEtBQUs0RSxnQkFBa0I2QyxLQUFLYyxJQUFJdkksS0FBSzRFLG9CQUMvRDVFLEtBQUtxSSxxQkFBdUIsSUFBSXJJLEtBQUs0RSxnQkFBa0I2QyxLQUFLYyxJQUFJdkksS0FBSzRFLGtCQUU5RTVFLEtBQUtnSCw0QkEyQ1RySCxJQUFLLHdCQUNMc0IsTUFBTyxXQXhDUGpCLEtBQUsySCxzQkFFR0csR0FBRzlILEtBQUttRyxXQUFXTixFQUFJLEdBQ3ZCa0MsR0FBRy9ILEtBQUttRyxXQUFXRCxJQUduQjRCLEdBQUc5SCxLQUFLbUcsV0FBV04sRUFBSSxJQUN2QmtDLEdBQUcvSCxLQUFLbUcsV0FBV0QsRUFBSSxNQUd2QjRCLEdBQUc5SCxLQUFLbUcsV0FBV04sRUFBSSxHQUN2QmtDLEdBQUcvSCxLQUFLbUcsV0FBV0QsRUFBSSxNQUd2QjRCLEdBQUc5SCxLQUFLbUcsV0FBV04sRUFDbkJrQyxHQUFHL0gsS0FBS21HLFdBQVdELEVBQUksTUFHdkI0QixHQUFHOUgsS0FBS21HLFdBQVdOLEVBQUksR0FDdkJrQyxHQUFHL0gsS0FBS21HLFdBQVdELEVBQUksVUF5QzVCakQsSUFuQ1gvQyxHQUFFLFdBQ1UsR0FBSXlDIiwiZmlsZSI6ImdhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBIZWFkZXJNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmhlYWRlciA9ICQoJy5oZWFkZXInKTtcclxuICAgICAgICB0aGlzLm1lbnUgPSAkKCcubWVudScpO1xyXG5cclxuICAgICAgICB0aGlzLm1lbnVidG4gPSB0aGlzLmhlYWRlci5maW5kKCcubWVudWJ0bicpO1xyXG4gICAgICAgIHRoaXMubWVudWJ0bi5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMubWVudWJ0bi5oYXNDbGFzcygnb24nKSkgdGhpcy5vcGVubWVudShmYWxzZSk7XHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5vcGVubWVudSh0cnVlKTtcclxuICAgICAgICB9LmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICB0aGlzLm1lbnVhID0gdGhpcy5tZW51LmZpbmQoJy5tZW51YScpO1xyXG4gICAgICAgIHRoaXMubWVudWEub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgdGhpcy5tZW51YUNsaWNrKCQoZS5jdXJyZW50VGFyZ2V0KS5hdHRyKCdjbGFzcycpLnJlcGxhY2UoJ29uJywnJykuc3BsaXQoJ21lbnVhICcpWzFdLnJlcGxhY2UoJyAnLCcnKSwwKTtcclxuICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG4gICAgb3Blbm1lbnUoX3QpIHtcclxuICAgICAgICBpZihfdCl7XHJcbiAgICAgICAgICAgIHRoaXMubWVudWJ0bi5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJCgnLm1lbnUnKS5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5tZW51YnRuLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkKCcubWVudScpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG1lbnVhQ2xpY2sobWVudWxpbmspe1xyXG4gICAgICAgIHN3aXRjaCAobWVudWxpbmspIHtcclxuICAgICAgICAgICAgY2FzZSAnbTEnOlxyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWY9XCJsb2dpbl9tZW1iZXIucGhwXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbTInOlxyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWY9XCJpbnF1aXJlLnBocFwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ20zJzpcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmPVwiYWJvdXQuaHRtbFwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ200JzpcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmPVwiYXdhcmRfaW5mby5odG1sXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbTUnOlxyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWY9XCJhd2FyZF9saXN0Lmh0bWxcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdtNic6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2hhcmUgZmInKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdtNyc6XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZj1cImdhbWVfbGlzdC5odG1sXCI7XHJcbiAgICAgICAgICAgICAgICAvLyBhbGVydCgn6YGK5oiy5bCH5pa8MTEvMuato+W8j+S4iue3micpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ204JzpcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmPVwibG9naW5fbnVtYmVyLnBocFwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ205JzpcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmPVwiaW5kZXguaHRtbFwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmNsYXNzIEdhbWVfbGlzdCB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRjb25zb2xlLmxvZygnZ2FtZSBMSVNUJyk7XHJcblx0XHR0aGlzLnBhZ2UgPSAkKCcucGFnZS5nYW1lX2xpc3QnKTtcclxuXHRcdHRoaXMuYmFubmVyX3N3aXBlciA9IG5ldyBTd2lwZXIoJy5zd2lwZXItY29udGFpbmVyJywge1xyXG5cdFx0ICBcdHNwZWVkOjYwMCxcdCAgXHJcblx0XHQgIFx0d3JhcHBlckNsYXNzOiAnc3dpcGVyLXdyYXBwZXInLFxyXG5cdFx0ICBcdHNsaWRlQ2xhc3M6ICdzd2lwZXItc2xpZGUnLFxyXG5cdFx0XHRuZXh0QnV0dG9uOiQoJy5uZXh0JyksXHJcblx0XHRcdHByZXZCdXR0b246JCgnLnByZXYnKSxcclxuXHRcdCAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG5cdFx0ICAgIHNwYWNlQmV0d2VlbjogMCxcclxuXHRcdCAgICBsb29wOiB0cnVlLFxyXG5cdFx0ICAgIGF1dG9wbGF5OjYwMDAsXHJcblx0XHQgICAgYXV0b3BsYXlEaXNhYmxlT25JbnRlcmFjdGlvbjpmYWxzZVxyXG5cdFx0fSk7XHRcclxuXHRcdHRoaXMuZ29idG4gPSB0aGlzLnBhZ2UuZmluZCgnLmdvYnRuJyk7XHJcblx0XHR0aGlzLmdvYnRuLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmPVwiZ2FtZVwiKyAkKGUuY3VycmVudFRhcmdldCkucGFyZW50KCkuYXR0cignbnVtJykgKycuaHRtbCc7XHJcblx0XHR9LmJpbmQodGhpcykpO1xyXG5cdH1cclxuXHRcclxufVxyXG5jbGFzcyBHYW1lIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMucmVhZHkoKTtcclxuXHRcdHRoaXMuSGVhZGVyTW9kZWwgPSBuZXcgSGVhZGVyTW9kZWwoKTtcclxuXHRcdCQod2luZG93KS5sb2FkKGZ1bmN0aW9uKCl7XHJcblx0XHRcdHRoaXMud2luZG93X2xvYWQoKTtcclxuXHRcdH0uYmluZCh0aGlzKSk7XHJcblx0fVxyXG5cdHJlYWR5KCkge1xyXG5cdFx0dGhpcy5wYWdlID0gJCgnLnBhZ2UnKTtcclxuXHJcblx0XHRzd2l0Y2ggKHRoaXMucGFnZS5hdHRyKCdjbGFzcycpLnNwbGl0KCdwYWdlIGdhbWUgJylbMV0pIHtcclxuXHRcdFx0Y2FzZSAnZ2FtZV9saXN0JzpcclxuXHRcdFx0XHR0aGlzLmdhbWVfbGlzdCA9IG5ldyBHYW1lX2xpc3QoKTtcclxuXHRcdFx0XHRicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZ2FtZTEnOlxyXG5cdFx0XHRcdHRoaXMuZ2FtZTEgPSBuZXcgR2FtZTEoKTtcclxuXHRcdFx0XHRicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZ2FtZTInOlxyXG5cdFx0XHRcdHRoaXMuZ2FtZTIgPSBuZXcgR2FtZTIoKTtcclxuXHRcdFx0XHRicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZ2FtZTMnOlxyXG5cdFx0XHRcdHRoaXMuZ2FtZTMgPSBuZXcgR2FtZTMoKTtcclxuXHRcdFx0XHRicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZ2FtZTQnOlxyXG5cdFx0XHRcdHRoaXMuZ2FtZTQgPSBuZXcgR2FtZTQoKTtcclxuXHRcdFx0XHRicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZ2FtZTUnOlxyXG5cdFx0XHRcdHRoaXMuZ2FtZTUgPSBuZXcgR2FtZTUoKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblx0d2luZG93X2xvYWQoKXtcclxuXHRcdCQoJy5sb2FkaW5nJykuZmFkZU91dCgpO1xyXG5cdH1cclxufVxyXG5jbGFzcyBHYW1lTW9kZWwge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuY2xhc3MgR2FtZTEge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5yZWFkeSgpO1xyXG5cdFx0dGhpcy5wYWdlID0gJCgnLnBhZ2UuZ2FtZTEnKTtcclxuICAgICAgICB0aGlzLmluZm8gPSB0aGlzLnBhZ2UuZmluZCgnLmluZm8nKTtcclxuICAgICAgICB0aGlzLnNjb3JlYm9hcmQgPSB0aGlzLnBhZ2UuZmluZCgnLnNjb3JlYm9hcmQnKTtcclxuICAgICAgICB0aGlzLnNjb3JlID0gdGhpcy5zY29yZWJvYXJkLmZpbmQoJy5udW0nKTtcclxuICAgICAgICB0aGlzLnN0YXJ0YnRuID0gdGhpcy5pbmZvLmZpbmQoJy5zdGFydGJ0bicpO1xyXG4gICAgICAgIHRoaXMuc3RhcnRidG4ub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB0aGlzLkdhbWUxU3RhcnQoKTtcclxuICAgICAgICB9LmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICB0aGlzLmZhaWxQb3B1cCA9ICQoJy5mYWlsUG9wdXAnKTtcclxuICAgICAgICB0aGlzLmFnYWluID0gdGhpcy5mYWlsUG9wdXAuZmluZCgnLmFnYWluJyk7XHJcbiAgICAgICAgdGhpcy5iYWNrID0gdGhpcy5mYWlsUG9wdXAuZmluZCgnLmJhY2snKTtcclxuICAgICAgICB0aGlzLmFnYWluLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdGhpcy5mYWlsUG9wdXAuZmFkZU91dCgpO1xyXG4gICAgICAgICAgICB0aGlzLkdhbWUxU3RhcnQoKTtcclxuICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMuYmFjay5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmPVwiZ2FtZV9saXN0Lmh0bWxcIjtcclxuICAgICAgICB9LmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICBpZiAod2luZG93LkRldmljZU9yaWVudGF0aW9uRXZlbnQpIHtcclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RldmljZW9yaWVudGF0aW9uJywgZnVuY3Rpb24oZXZlbnREYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndpbmRvd0RldmljZUV2ZW50KGV2ZW50RGF0YSk7XHJcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG5cdH1cclxuICAgIHJlYWR5KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdnYW1lMSBpbml0Jyk7XHJcbiAgICAgICAgdGhpcy5mcHMgPSA2MDtcclxuICAgICAgICB0aGlzLmVuZFRpbWVvdXQgPSAzMDAwMDtcclxuICAgICAgICB0aGlzLmNhclRpbWUgPSAyMDAwO1xyXG4gICAgICAgIHRoaXMuYmdzcGVlZCA9IC0xNTtcclxuICAgICAgICB0aGlzLndhdGVyY2hpbGRzcGVlZCA9IDE1O1xyXG4gICAgICAgIHRoaXMucGFzc0NhciA9IDA7XHJcbiAgICAgICAgdGhpcy5zdWNjZXNzQ2FyTnVtID0gMTA7XHJcbiAgICAgICAgdGhpcy5zdGFydCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lMVwiKTtcclxuICAgICAgICB0aGlzLnN0YWdlID0gbmV3IGNyZWF0ZWpzLlN0YWdlKHRoaXMuY2FudmFzKTtcclxuXHJcbiAgICAgICAgLy9iZ1xyXG4gICAgICAgIHRoaXMuZ2FtZWJnID0gbmV3IGNyZWF0ZWpzLkJpdG1hcCgnaW1hZ2VzL2dhbWUxX2JnLmpwZycpO1xyXG4gICAgICAgIHRoaXMuZ2FtZWJnTW92aWVDbGlwID0gbmV3IGNyZWF0ZWpzLk1vdmllQ2xpcCgpO1xyXG4gICAgICAgIHRoaXMuZ2FtZWJnTW92aWVDbGlwLmFkZENoaWxkKHRoaXMuZ2FtZWJnKTtcclxuICAgICAgICB0aGlzLnN0YWdlLmFkZENoaWxkKHRoaXMuZ2FtZWJnTW92aWVDbGlwKTtcclxuICAgICAgICB0aGlzLmdhbWViZzIgPSB0aGlzLmdhbWViZy5jbG9uZSgpO1xyXG4gICAgICAgIHRoaXMuZ2FtZWJnTW92aWVDbGlwLmFkZENoaWxkKHRoaXMuZ2FtZWJnMik7XHJcbiAgICAgICAgJCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdGhpcy5nYW1lYmcueCA9ICggdGhpcy5nYW1lYmcuZ2V0VHJhbnNmb3JtZWRCb3VuZHMoKS53aWR0aCAtIDY0MCApIC8gMiAqIC0xO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWViZzIueCA9ICggdGhpcy5nYW1lYmcuZ2V0VHJhbnNmb3JtZWRCb3VuZHMoKS53aWR0aCAtIDY0MCApIC8gMiAqIC0xO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWViZ0ggPSB0aGlzLmdhbWViZy5nZXRUcmFuc2Zvcm1lZEJvdW5kcygpLmhlaWdodDtcclxuICAgICAgICAgICAgdGhpcy5nYW1lYmcyLnkgPSB0aGlzLmdhbWViZ0gqLTE7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgLy93YXRlcmNoaWxkXHJcbiAgICAgICAgdGhpcy53YXRlcmNoaWxkID0gbmV3IGNyZWF0ZWpzLkJpdG1hcCgnaW1hZ2VzL2dhbWUxX2JpY3ljbGUucG5nJyk7XHJcbiAgICAgICAgdGhpcy5zdGFnZS5hZGRDaGlsZCh0aGlzLndhdGVyY2hpbGQpO1xyXG4gICAgICAgIHRoaXMud2F0ZXJjaGlsZC55ID0gODE0O1xyXG4gICAgICAgIHRoaXMud2F0ZXJjaGlsZC54ID0gMjUxO1xyXG5cclxuICAgICAgICAvL2NhclxyXG4gICAgICAgIHRoaXMuY2FyTCA9IG5ldyBjcmVhdGVqcy5CaXRtYXAoJ2ltYWdlcy9nYW1lMV9jYXIxLnBuZycpO1xyXG4gICAgICAgIHRoaXMuc3RhZ2UuYWRkQ2hpbGQodGhpcy5jYXJMKTtcclxuICAgICAgICB0aGlzLmNhckwueCA9IDEyNjtcclxuICAgICAgICB0aGlzLmNhckwueSA9IC0yOTU7XHJcbiAgICAgICAgdGhpcy5jYXJMc3BlZWQgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLmNhclIgPSBuZXcgY3JlYXRlanMuQml0bWFwKCdpbWFnZXMvZ2FtZTFfY2FyMi5wbmcnKTtcclxuICAgICAgICB0aGlzLnN0YWdlLmFkZENoaWxkKHRoaXMuY2FyUik7XHJcbiAgICAgICAgdGhpcy5jYXJSLnggPSAzNTM7XHJcbiAgICAgICAgdGhpcy5jYXJSLnkgPSAtMjk1O1xyXG4gICAgICAgIHRoaXMuY2FyUnNwZWVkID0gMDtcclxuXHJcbiAgICAgICAgLy9ib29tXHJcbiAgICAgICAgdGhpcy5ib29tID0gbmV3IGNyZWF0ZWpzLkJpdG1hcCgnaW1hZ2VzL2dhbWUxX2ZpcmUucG5nJyk7XHJcbiAgICAgICAgdGhpcy5zdGFnZS5hZGRDaGlsZCh0aGlzLmJvb20pO1xyXG4gICAgICAgIHRoaXMuYm9vbS5vcmdYID0gLTExMDA7XHJcbiAgICAgICAgdGhpcy5ib29tLm9yZ1kgPSAtNjkwO1xyXG4gICAgICAgIHRoaXMuYm9vbUluaXQoKTtcclxuXHJcbiAgICAgICAgY3JlYXRlanMuVGlja2VyLnNldEZQUyh0aGlzLmZwcyk7XHJcblx0XHRjcmVhdGVqcy5UaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcihcInRpY2tcIiwgdGhpcy5TdGFnZUxpc3RlbnRlci5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICB9XHJcbiAgICBib29tSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmJvb20ueCA9IHRoaXMuYm9vbS5vcmdYO1xyXG4gICAgICAgIHRoaXMuYm9vbS55ID0gdGhpcy5ib29tLm9yZ1k7XHJcbiAgICB9XHJcbiAgICBHYW1lQ2FySWludCgpIHtcclxuICAgICAgICB0aGlzLmJvb21Jbml0KCk7XHJcbiAgICAgICAgdGhpcy5jYXJSc3BlZWQgPSAwO1xyXG4gICAgICAgIHRoaXMuY2FyUi55PSAtMjk1O1xyXG4gICAgICAgIHRoaXMuY2FyTHNwZWVkID0gMDtcclxuICAgICAgICB0aGlzLmNhckwueT0gLTI5NTtcclxuICAgIH1cclxuICAgIEdhbWUxU3RhcnQoKXtcclxuICAgICAgICB0aGlzLnBhc3NDYXIgPSAwO1xyXG4gICAgICAgIHRoaXMuaW5mby5mYWRlT3V0KCk7XHJcbiAgICAgICAgdGhpcy5zY29yZWJvYXJkLmZhZGVJbigpO1xyXG4gICAgICAgIHRoaXMuc2V0V2F0ZXJjaGlsZFBvc2l0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5HYW1lQ2FySWludCgpO1xyXG4gICAgICAgIHRoaXMuc3RhcnQgPSB0cnVlO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdGhpcy5HYW1lUmFuZG9tQ2FyKCk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpLDE1MDApO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHRoaXMuR2FtZTFFbmQoKTtcclxuICAgICAgICB9LmJpbmQodGhpcyksdGhpcy5lbmRUaW1lb3V0KTtcclxuICAgIH1cclxuICAgIEdhbWUxRW5kKCkge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmhpdFRpbWVvdXQpO1xyXG4gICAgICAgIHRoaXMuc3RhcnQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5wYXNzQ2FyID49IHRoaXMuc3VjY2Vzc0Nhck51bSkgZ2FtZVBhc3NlcygpO1xyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHYW1lIG92ZXInKTtcclxuICAgICAgICAgICAgdGhpcy5mYWlsUG9wdXAuZmFkZUluKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBHYW1lUmFuZG9tQ2FyKCkge1xyXG4gICAgICAgIHRoaXMuR2FtZUNhcklpbnQoKTtcclxuICAgICAgICB0aGlzLnJhbmRvbSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSoxKTtcclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLnJhbmRvbT4wKSB0aGlzLmNhckxzcGVlZCA9IHRoaXMuYmdzcGVlZCAqIDkgLyAxMCAqIC0xO1xyXG4gICAgICAgIGVsc2UgIHRoaXMuY2FyUnNwZWVkID0gdGhpcy5iZ3NwZWVkICogMS4yICogLTE7XHJcblxyXG4gICAgICAgIC8vIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAvLyAgICAgaWYodGhpcy5zdGFydCkgdGhpcy5HYW1lUmFuZG9tQ2FyKCk7XHJcbiAgICAgICAgLy8gfS5iaW5kKHRoaXMpLHRoaXMuY2FyVGltZSk7XHJcbiAgICB9XHJcbiAgICBTdGFnZUxpc3RlbnRlcigpe1xyXG4gICAgICAgIGlmKHRoaXMuc3RhcnQpe1xyXG4gICAgICAgICAgICAvL0JHXHJcbiAgICAgICAgICAgIGlmKCB0aGlzLmdhbWViZ01vdmllQ2xpcC55ID49ICB0aGlzLmdhbWViZ0gpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lYmdNb3ZpZUNsaXAueSA9IHRoaXMuZ2FtZWJnTW92aWVDbGlwLnkgLSB0aGlzLmdhbWViZ0g7XHJcbiAgICAgICAgICAgIH1lbHNlIHRoaXMuZ2FtZWJnTW92aWVDbGlwLnkgLT0gdGhpcy5iZ3NwZWVkO1xyXG5cclxuICAgICAgICAgICAgLy93YXRlcmNoaWxkXHJcbiAgICAgICAgICAgIHRoaXMud2F0ZXJjaGlsZC54ICs9IHRoaXMud2F0ZXJjaGlsZHNwZWVkO1xyXG4gICAgICAgICAgICBpZih0aGlzLndhdGVyY2hpbGQueCA8PSAxMDApIHRoaXMud2F0ZXJjaGlsZC54ID0gMTAwO1xyXG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMud2F0ZXJjaGlsZC54ID49IDQxMCkgdGhpcy53YXRlcmNoaWxkLnggPSA0MTA7XHJcblxyXG4gICAgICAgICAgICAvL2NhclxyXG4gICAgICAgICAgICB0aGlzLmNhckwueSArPSB0aGlzLmNhckxzcGVlZDtcclxuICAgICAgICAgICAgdGhpcy5jYXJSLnkgKz0gdGhpcy5jYXJSc3BlZWQ7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuY2FyTC55ID49IDEwOTUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXNzQ2FyICs9MTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZVJhbmRvbUNhcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHRoaXMuY2FyUi55ID49IDEwOTUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXNzQ2FyICs9MTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZVJhbmRvbUNhcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL2hpdFRlc3RcclxuICAgICAgICAgICAgZm9yKHZhciBpPTA7IGk8IHRoaXMud2F0ZXJjaGlsZFBvaW50TGlzdC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgcHQgPSB0aGlzLmNhckwuZ2xvYmFsVG9Mb2NhbCh0aGlzLndhdGVyY2hpbGRQb2ludExpc3RbaV0uX3gsdGhpcy53YXRlcmNoaWxkUG9pbnRMaXN0W2ldLl95KTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuY2FyTC5oaXRUZXN0KHB0LngscHQueSkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSSdtIGhpdCBjYXJMIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvb20ueD10aGlzLndhdGVyY2hpbGRQb2ludExpc3RbaV0uX3g7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib29tLnk9dGhpcy53YXRlcmNoaWxkUG9pbnRMaXN0W2ldLl95O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWZ0ZXJIaXQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgcHQyID0gdGhpcy5jYXJSLmdsb2JhbFRvTG9jYWwodGhpcy53YXRlcmNoaWxkUG9pbnRMaXN0W2ldLl94LHRoaXMud2F0ZXJjaGlsZFBvaW50TGlzdFtpXS5feSk7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmNhclIuaGl0VGVzdChwdDIueCxwdDIueSkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSSdtIGhpdCBjYXJSIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvb20ueD10aGlzLndhdGVyY2hpbGRQb2ludExpc3RbaV0uX3g7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib29tLnk9dGhpcy53YXRlcmNoaWxkUG9pbnRMaXN0W2ldLl95O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWZ0ZXJIaXQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vc2NvcmVcclxuICAgICAgICAgICAgdGhpcy5zY29yZS5odG1sKHRoaXMucGFzc0Nhcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc3RhZ2UudXBkYXRlKCk7XHJcbiAgICB9XHJcbiAgICBhZnRlckhpdCgpe1xyXG4gICAgICAgIHRoaXMuc3RhcnQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmhpdFRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHRoaXMuR2FtZVJhbmRvbUNhcigpO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0ID0gdHJ1ZTtcclxuICAgICAgICB9LmJpbmQodGhpcyksMTAwMCk7XHJcblxyXG4gICAgfVxyXG4gICAgd2luZG93RGV2aWNlRXZlbnQoZXZlbnREYXRhKXtcclxuICAgICAgICBpZih0aGlzLnN0YXJ0KXtcclxuICAgICAgICAgICAgdGhpcy53YXRlcmNoaWxkRGlyZWN0aW9uID0gZXZlbnREYXRhLmdhbW1hO1xyXG4gICAgICAgICAgICBpZih0aGlzLndhdGVyY2hpbGREaXJlY3Rpb24gPD0gLTIpIHRoaXMud2F0ZXJjaGlsZHNwZWVkID0gTWF0aC5hYnModGhpcy53YXRlcmNoaWxkc3BlZWQpICogLTE7XHJcbiAgICAgICAgICAgIGVsc2UgaWYoIHRoaXMud2F0ZXJjaGlsZERpcmVjdGlvbiA+PSAyICkgdGhpcy53YXRlcmNoaWxkc3BlZWQgPSBNYXRoLmFicyh0aGlzLndhdGVyY2hpbGRzcGVlZCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnNldFdhdGVyY2hpbGRQb3NpdGlvbigpO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgfVxyXG4gICAgc2V0V2F0ZXJjaGlsZFBvc2l0aW9uKCkge1xyXG4gICAgICAgIHRoaXMud2F0ZXJjaGlsZFBvaW50TGlzdCA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX3g6dGhpcy53YXRlcmNoaWxkLnggKyA2OSxcclxuICAgICAgICAgICAgICAgIF95OnRoaXMud2F0ZXJjaGlsZC55XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIF94OnRoaXMud2F0ZXJjaGlsZC54ICsgMTM4LFxyXG4gICAgICAgICAgICAgICAgX3k6dGhpcy53YXRlcmNoaWxkLnkgKyAxMzNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX3g6dGhpcy53YXRlcmNoaWxkLnggKyA2OSxcclxuICAgICAgICAgICAgICAgIF95OnRoaXMud2F0ZXJjaGlsZC55ICsgMjY2XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIF94OnRoaXMud2F0ZXJjaGlsZC54LFxyXG4gICAgICAgICAgICAgICAgX3k6dGhpcy53YXRlcmNoaWxkLnkgKyAxMzNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX3g6dGhpcy53YXRlcmNoaWxkLnggKyA2OSxcclxuICAgICAgICAgICAgICAgIF95OnRoaXMud2F0ZXJjaGlsZC55ICsgMTMzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdO1xyXG4gICAgfVxyXG59XHJcblxyXG4kKGZ1bmN0aW9uKCkge1xyXG5cdHZhciBnYW1lID0gbmV3IEdhbWUoKTtcclxufSk7XHJcblxyXG4iXX0=