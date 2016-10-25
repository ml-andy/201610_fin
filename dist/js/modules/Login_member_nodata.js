class Login_member_nodata {
    constructor() {
        this.HeaderModel = new HeaderModel();
        this.page = $('.page.login_member_nodata');
        this.checkbox = this.page.find('.checkbox');
        this.checkbox.on('click',function(e){
            if($(e.currentTarget).hasClass('on')) $(e.currentTarget).removeClass('on');
            else $(e.currentTarget).addClass('on');
        });
    }
}
// module.exports = Index;