import AchievementPage from '../models/User-AchievementPage';
import { adminAccUser } from '../config/role';
import config from '../config';

// Page model
const achievementpage = new AchievementPage();

fixture `Testing user core value view`
	.page`${config.baseUrl}/`
	.beforeEach(async t => {
		console.log(t.ctx);
		/* test initialization code */
		await t
			.useRole(adminAccUser)
			.navigateTo(config.indexPage);
	});

// Tests
test('Open core value default page', async t => {
	await t
		.navigateTo('#achievement')
		.wait(1000)
		.expect(achievementpage.tabActivitiesContent.exists)
		.ok();
	await t
		.wait(1000)
		.click(achievementpage.tabLeaderBoard)
		.wait(1000)
		.expect(achievementpage.tabLeaderBoardContent.exists)
		.ok();
	await t
		.wait(1000)
		.click(achievementpage.tabCoreValues)
		.wait(1000)
		.expect(achievementpage.tabCoreValuesContent.exists)
		.ok();
	await t
		.wait(1000)
		.click(achievementpage.giveCoreValueBtn)
		.wait(1000)
		.expect(achievementpage.dialogForm.exists)
		.ok();

});
