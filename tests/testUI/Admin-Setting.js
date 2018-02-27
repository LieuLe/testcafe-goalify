import AdminSettingPage from '../models/Admin-SettingPage';
import { adminAccUser } from '../config/role';
import config from '../config';

// Page model
const adminSettingPage = new AdminSettingPage();

fixture `Testing admin-setting page`
	.page `${config.baseUrl}/`
	.beforeEach(async t => {
		/* test initialization code */
		console.log(t.ctx);
		await t
			.useRole(adminAccUser)
			.navigateTo(config.indexPage);
	})
	.afterEach(async t => {
		/* test finalization code */
		console.log(t.ctx);
	});


// Tests
test('Open admin/setting', async t => {
	await t
		.navigateTo('#admin/setting');

	//tab 1
	await t
		.wait(1000)
		.click(adminSettingPage.tabCompanyBtn)
		.wait(1000)
		.expect(adminSettingPage.tabCompanyContent.exists)
		.ok();

	await t
		.wait(2000)
		.click(adminSettingPage.editProfileBtn)
		.wait(1000)
		.expect(adminSettingPage.dialogForm.exists)
		.ok();

	await t
		.click(adminSettingPage.closeDialogBtn);
	//tab 2
	await t
		.wait(1000)
		.click(adminSettingPage.tabAdministratorBtn)
		.wait(1000)
		.expect(adminSettingPage.tabAdministratorContent.exists)
		.ok();

	//tab 3
	await t
		.wait(1000)
		.click(adminSettingPage.tabShareCheerBtn)
		.wait(1000)
		.expect(adminSettingPage.tabShareCheerContent.exists)
		.ok();
});

