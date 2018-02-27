/*global test, fixture*/
// import { Selector } from 'testcafe';
import UserProfilePage from './models/User-ProfilePage';
import config from './config';
import { adminAccUser } from './config/role';

fixture`Testing user profile: all, achievement, job, leave`
	.page`${config.baseUrl}/`
	.beforeEach(async t => {
		/* test initialization code */
		await t
			.useRole(adminAccUser)
			.navigateTo(config.indexPage);
	})
	.afterEach(async t => {
		/* test finalization code */
		console.log(t.ctx);
	});

// Page model
const userProfilePage = new UserProfilePage();

// Tests
test('Open user profile', async t => {
	await t
		.wait(1000)
		.navigateTo('#dashboard')
		.wait(1000)
		.click(userProfilePage.profileLink)
		.wait(1000)
		.click(userProfilePage.tabAll)
		.wait(500)
		.expect(userProfilePage.generalInfoContent.exists)
		.ok();

	await t
		.wait(1000)
		.click(userProfilePage.tabAll)
		.wait(500)
		.click(userProfilePage.editProfileButton)
		.wait(500)
		.click(userProfilePage.closeProfileButton)
		.wait(500)
		.click(userProfilePage.changePasswordButton)
		.wait(500)
		.click(userProfilePage.closeChangePasswordButton);

	await t
		.wait(1000)
		.click(userProfilePage.tabAchievement)
		.wait(500)
		.expect(userProfilePage.tabArchievementContent.exists)
		.ok();

	await t
		.wait(1000)
		.click(userProfilePage.tabJob)
		.wait(500)
		.expect(userProfilePage.tabJobContent.exists)
		.ok();

	await t
		.wait(1000)
		.click(userProfilePage.tabLeave)
		.wait(500)
		.expect(userProfilePage.leaveInfoContent.exists)
		.ok();
});
