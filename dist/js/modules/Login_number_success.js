class Login_number_success {
    constructor() {
        this.HeaderModel = new HeaderModel();
        this.page = $('.page.login_number_success');
        this.more = this.page.find('.more');
        this.back = this.page.find('.back');
        this.sharefb = this.page.find('.sharefb');

        this.more.on('click',function(){
            this.HeaderModel.menuaClick('m8');
        }.bind(this));
        this.back.on('click',function(){
            this.HeaderModel.menuaClick('m9');
        }.bind(this));
        this.sharefb.on('click',function(){
            this.HeaderModel.menuaClick('m6');
        }.bind(this));
    }
}