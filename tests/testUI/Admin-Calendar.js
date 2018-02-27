import AdminCalendarPage from '../models/Admin-CalendarPage';
import { adminAccUser } from '../config/role';
import config from '../config';

// Page model
const adminCalendarPage = new AdminCalendarPage();

fixture `Testing admin-calendar page`
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
test('Open admin/calendar', async t => {
	await t
		.navigateTo('#admin/calendar');

	await t
		.wait(1000)
		.click(adminCalendarPage.tabHolidayBtn)
		.wait(1000)
		.expect(adminCalendarPage.tabHolidayContent.exists)
		.ok();

	await t
		.wait(1000)
		.click(adminCalendarPage.addHolidayBtn)
		.wait(1000)
		.expect(adminCalendarPage.dialogForm.exists)
		.ok();
});

