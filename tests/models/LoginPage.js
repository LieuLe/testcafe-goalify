import { Selector } from 'testcafe';

// const label = Selector('label');
let self;

export default class Page {
	constructor() {
		this.nameInput = Selector('input[name=email]');
		this.passwordInput = Selector('input[name=password]');
		this.submitButton = Selector('button[type=submit]');

		this.emailInput = Selector('.forgot-email input');
		this.forgotemailLink = Selector('a[data-react-toolbox=link]').withText(/forgot*/i);
		this.forgotResetText = Selector('.sign-in__title--reset-password');
		this.forgotSubmitButton = Selector('button[type=submit]');
		self = this;
	}

	async login(t, user) {
		await t
			.typeText(self.nameInput, user.username)// Type name
			.typeText(self.passwordInput, user.password)
			.click(self.submitButton);
	}
}

