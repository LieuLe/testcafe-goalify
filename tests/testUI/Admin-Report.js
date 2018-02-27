import SummaryPage from '../models/Admin-ReportPage';
import { adminAccUser } from '../config/role';
import config from '../config';

// Page model
const summaryPage = new SummaryPage();

fixture `Testing user-summary page`
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
test('Open report', async t => {
	await t
		.navigateTo('#admin/report')
		.wait(1000)
		.click(summaryPage.tabHumanResourceBtn)
		.wait(1000)
		.expect(summaryPage.tabHumanResourceContent.exists)
		.ok();
	//HeadCount Report
	await t
		.wait(1000)
		.click(summaryPage.DropdownType)
		.wait(1000)
		.click(summaryPage.HeadcountBtn)
		.wait(1000)
		.expect(summaryPage.HeadcountContent.exists)
		.ok();
	//Gender Profile report
	await t
		.wait(1000)
		.click(summaryPage.DropdownType)
		.wait(1000)
		.click(summaryPage.GenderProfileBtn)
		.wait(1000)
		.expect(summaryPage.GenderProfileContent.exists)
		.ok();
	//Age Profile Report
	await t
		.wait(1000)
		.click(summaryPage.DropdownType)
		.wait(1000)
		.click(summaryPage.AgeProfileBtn)
		.wait(1000)
		.expect(summaryPage.AgeProfileContent.exists)
		.ok();
	//Date leave report
	await t
		.wait(1000)
		.click(summaryPage.DropdownType)
		.wait(1000)
		.click(summaryPage.DateLeaveBtn)
		.wait(1000)
		.expect(summaryPage.DateLeaveContent.exists)
		.ok()
});

