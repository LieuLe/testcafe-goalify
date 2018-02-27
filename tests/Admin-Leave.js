import AdminLeavePage from './models/Admin-LeavePage';
import { adminAccUser } from './config/role';
import config from './config';

// Page model
const adminLeavePage = new AdminLeavePage();

fixture `Testing admin-leave page`
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
test('Open admin/leave', async t => {
	await t
		.navigateTo('#admin/leave');

	//tab 1
	await t
		.wait(1000)
		.click(adminLeavePage.tabLeavePeriodBtn)
		.wait(1000)
		.expect(adminLeavePage.leavePeriodContent.exists)
		.ok();

	//tab 2
	await t
		.wait(1000)
		.click(adminLeavePage.tabLeaveTypeBtn)
		.wait(1000)
		.expect(adminLeavePage.leaveTypeContent.exists)
		.ok();

	await t
		.wait(1000)
		.click(adminLeavePage.addLeaveTypeBtn)
		.wait(1000)
		.expect(adminLeavePage.dialogForm.exists)
		.ok();

	await t
		.click(adminLeavePage.closeDialogBtn);

	//tab 3
	await t
		.wait(1000)
		.click(adminLeavePage.tabWorkweekBtn)
		.wait(1000)
		.expect(adminLeavePage.workweekContent.exists)
		.ok();

	//tab 4
	await t
		.wait(1000)
		.click(adminLeavePage.tabLeaveAllowanceBtn)
		.wait(1000)
		.expect(adminLeavePage.leaveAllowanceContent.exists)
		.ok();

});

