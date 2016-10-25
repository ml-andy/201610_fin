class Login_number {
    constructor() {
        this.HeaderModel = new HeaderModel();
        this.verPopup = new VerPopup($('.verPopup'));
        this.page = $('.page.login_number');
        this.submit = this.page.find('.submit');
        // this.submit.on('click',function(){
        //     this.verPopup.showverPopup(true);
        // }.bind(this));
    }
}
class VerPopup {
    constructor(dom) {
        this.verPopup = dom;
        this.main = this.verPopup.find('.main');
        this.bottle1 = this.verPopup.find('.bottle1');
        this.bottle2 = this.verPopup.find('.bottle2');
        this.drag_left = 0;
        this.og_left = this.bottle1.offset().left;
        this.og_right = this.bottle2.offset().left;
        this.bottle1W = this.bottle1.width();
        this.bottle2W = this.bottle2.width();
        this.Login_number_sned = 0;
        
        this.bottle1.on('touchstart',function(){
            this.og_left = this.bottle1.offset().left;
            this.og_right = this.bottle2.offset().left;
            this.goal = this.og_right - this.og_left + this.bottle2W/2 - this.bottle1W/2;
            console.log(this.og_left);
            this.bottle1.bind('touchmove', this.bottle1touchmove.bind(this));
        }.bind(this));
        
        this.main.on('touchend',function(){
            this.bottle1.unbind('touchmove', this.bottle1touchmove.bind(this));
            this.bottle1.attr('style','');
        }.bind(this));
    }
    bottle1touchmove(e){
        e = e.originalEvent.touches[0];

        this.drag_left = e.pageX - this.og_left - this.bottle1W / 2;
        if(this.drag_left<0) this.drag_left=0;
        else if(this.drag_left >= this.goal){
            this.showverPopup(false);
            this.bottle1.unbind('touchmove', this.bottle1touchmove.bind(this));
            return;
        }

        this.bottle1.css('margin-left',this.drag_left);
    }
    showverPopup(_t){
        if(_t) this.verPopup.fadeIn();
        else{
             this.verPopup.fadeOut();
            //  window.location.href="login_number_success.html";
            if (this.Login_number_sned == 0) {
                var options = {
                    type: 'post', 
                    url: '/inc/sn.php',
                    success: showCartResponse
                };

                $('.form-sn').ajaxSubmit(options);
                this.Login_number_sned = 1;
            }
        }
    }
}
// module.exports = Index;