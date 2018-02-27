import DirectoryPage from '../models/User-DirectoryPage';
import { adminAccUser } from '../config/role';
import config from '../config';

// Page model
const directoryPage = new DirectoryPage();

fixture `Testing user-directory page`
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
test('Open directory', async t => {
	await t
		.navigateTo('#directory');

	await t
		.wait(1000)
		.click(directoryPage.tabEmployeeBtn)
		.wait(1000)
		.expect(directoryPage.tabEmployeeContent.exists)
		.ok();

	await t
		.wait(1000)
		.click(directoryPage.tabDepartmentBtn)
		.wait(1000)
		.expect(directoryPage.tabDepartmentContent.exists)
		.ok();

	await t
		.wait(1000)
		.click(directoryPage.tabTeamBtn)
		.wait(1000)
		.expect(directoryPage.tabTeamContent.exists)
		.ok();

	await t
		.wait(1000)
		.click(directoryPage.tabPositionBtn)
		.wait(1000)
		.expect(directoryPage.tabPositionContent.exists)
		.ok();

	await t
		.wait(1000)
		.click(directoryPage.tabChartBtn)
		.wait(1000)
		.expect(directoryPage.tabChartContent.exists)
		.ok();

});

