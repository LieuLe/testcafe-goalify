import CalendarPage from '../models/User-CalendarPage';
import { adminAccUser } from '../config/role';
import config from '../config';

// Page model
const calendarPage = new CalendarPage();

fixture `Testing user calendar view`
	.page`${config.baseUrl}/`
	.beforeEach(async t => {
		console.log(t.ctx);
		/* test initialization code */
		await t
			.useRole(adminAccUser)
			.navigateTo(config.indexPage);
	});

// Tests
test('Open calendar default page', async t => {
	await t
		.navigateTo('#calendar')
		.wait(1000)
		.expect(calendarPage.tabOverviewContent.exists)
		.ok();
	await t
		.wait(1000)
		.click(calendarPage.tabAnniversary)
		.wait(1000)
		.expect(calendarPage.tabAnniversaryContent.exists)
		.ok();
	await t
		.wait(1000)
		.click(calendarPage.tabHolidays)
		.wait(1000)
		.expect(calendarPage.tabHolidaysContent.exists)
		.ok();
});
