class HeaderModel {
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
            this.menuaClick($(e.currentTarget).attr('class').split('menua ')[1]);
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
                window.location.href="login_member.html";
                break;
            case 'm2':
                window.location.href="inquire.html";
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
                break;
            case 'm8':
                window.location.href="login_number.html";
                break;
            case 'm9':
                window.location.href="/";
                break;
        }
    }
}
// module.exports = HeaderModel;