/*global test, fixture*/
import { t } from 'testcafe';
import config from '../config';
import LoginPage from '../models/LoginPage';
import { adminAccUser } from '../config/role';
import localStorage from '../utils/localStorage';

// Page model
const loginPage = new LoginPage();

fixture `Testing user flow: sign-in, sign-out`
	.page `${config.baseUrl}/`
	.beforeEach(async () => {
		/* test initialization code */
		console.log(t.ctx);
	})
	.afterEach(async () => {
		/* test finalization code */
		console.log(t.ctx);
	});

// Tests
test('User login', async () => {
	await t
		.useRole(adminAccUser)
		.navigateTo(config.indexPage);//This trick to force t apply localStorage to sandbox
	const token = await localStorage.localStorageGet('token');
	await t
		.expect(token)
		.notEql(undefined)
		.expect(token)
		.notEql(null);
});

// Tests
test.skip('User forgot-password', async () => {
	await t
		.navigateTo(config.indexPage);
	await t
		.wait(1000)
		.navigateTo('#forgot-password')
		.typeText(signInPage.emailInput, config.adminUser.username, {speed: 0.4})// Type name
		.click(signInPage.forgotSubmitButton)
		.wait(2000)
		.expect(signInPage.forgotResetText.exists)
		.ok();
});
