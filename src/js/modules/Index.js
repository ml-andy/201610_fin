class Index {
    constructor() {
        this.HeaderModel = new HeaderModel();
        this.page = $('.page.index');

        this.banner_box = this.page.find('.banner_box');
        this.banner_box.each(this.bannerAni);
        this.banner = this.banner_box.find('.banner');
        this.banner.on('click',function(e){
            if($(e.currentTarget).index() === 0) this.HeaderModel.menuaClick('m8');
        }.bind(this));
        
        this.gamePlay_btn = this.page.find('.gamePlay_btn');
        this.gamePlay_btn.on('click',function(){
            this.HeaderModel.menuaClick('m7');
        }.bind(this));
    }
    bannerAni(){
        var _box = $(this),
            banner = _box.find('.banner'),
            nowShow = 0;
        
        showbanner();
        function showbanner(){
            banner.removeClass('on').eq(nowShow).addClass('on');
            setTimeout(function(){
                nowShow +=1;
                if(nowShow>=banner.length) nowShow = 0;
                showbanner();
            },5000);
        }
    }
}
// module.exports = Index;