class App {
	constructor() {
		this.ready();
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
		}
	}
}

$(function() {
	var app = new App();
});

