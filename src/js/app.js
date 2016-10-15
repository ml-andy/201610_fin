class App {
	constructor() {
		this.ready();
		this.loading = $('.loading');
		$(window).load(function(){
			this.windowLoad();
		}.bind(this));
	}
	ready() {
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
	windowLoad(){
		this.loading.fadeOut();
	}
}

$(function() {
	var app = new App();
});

