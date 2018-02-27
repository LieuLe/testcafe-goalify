
import { Role, Selector } from 'testcafe';
import config from './index';
import LoginPage from '../models/LoginPage';
import localStorage from '../utils/localStorage';

const loginPage = new LoginPage();
const profileLink = Selector('.app-bar__profile');

const adminAccUser = Role(`${config.baseUrl}/signin.html`, async t => {
	await t
		.typeText(loginPage.nameInput, config.adminUser.username)// Type name
		.typeText(loginPage.passwordInput, config.adminUser.password)
		.wait(1000)
		.click(loginPage.submitButton);
	await profileLink.with({ visibilityCheck: true })();
	console.log('token ', await localStorage.localStorageGet('token'));
});



module.exports = {
	adminAccUser
};

