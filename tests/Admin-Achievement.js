import AdminCoreValuePage from './models/Admin-AchievementPage';
import { adminAccUser } from './config/role';
import config from './config';

// Page model
const adminCoreValuePage = new AdminCoreValuePage();

fixture `Testing admin achievement page`
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
test('Open admin/achievement', async t => {
	await t
		.navigateTo('#admin/achievement');

	await t
		.wait(1000)
		.click(adminCoreValuePage.tabCoreValueBtn)
		.wait(1000)
		.expect(adminCoreValuePage.coreValues.exists)
		.ok();

	await t
		.wait(1000)
		.click(adminCoreValuePage.tabTimelineRecordBtn)
		.wait(1000)
		.expect(adminCoreValuePage.timelines.exists)
		.ok();

	await t
		.wait(1000)
		.click(adminCoreValuePage.tabLeaderboardSettingBtn)
		.wait(1000)
		.expect(adminCoreValuePage.tableSetting.exists)
		.ok();

});

