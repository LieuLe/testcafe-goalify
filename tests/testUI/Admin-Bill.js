import AdminBillPage from '../models/Admin-BillPage';
import { adminAccUser } from '../config/role';
import config from '../config';

// Page model
const adminBillPage = new AdminBillPage();

fixture `Testing admin-bill page`
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
test('Open admin/bill', async t => {
	await t
		.navigateTo('#/admin/bill');

	await t
		.wait(1000)
		.click(adminBillPage.tabPaymentBtn)
		.wait(1000)
		.expect(adminBillPage.tabPaymentContent.exists)
		.ok();

	await t
		.wait(1000)
		.click(adminBillPage.tabPaymentModeBtn)
		.wait(1000)
		.expect(adminBillPage.tabPaymentModeContent.exists)
		.ok();

	await t
		.wait(1000)
		.click(adminBillPage.tabPaymentMethodBtn)
		.wait(1000)
		.expect(adminBillPage.tabPaymentMethodContent.exists)
		.ok();

	await t
		.wait(1000)
		.click(adminBillPage.tabPaymentHistoryBtn)
		.wait(1000)
		.expect(adminBillPage.tabPaymentHistoryContent.exists)
		.ok();
	/*
	await t
		.wait(1000)
		.click(adminBillPage.tabPaymentInvoicesBtn)
		.wait(1000)
		.expect(adminBillPage.tabPaymentInvoicesContent.exists)
		.ok();

	await t
		.wait(1000)
		.click(adminBillPage.changeModeBtn)
		.wait(1000)
		.expect(adminBillPage.pricingPackages.exists)
		.ok();

	await t
		.wait(1000)
		.click(adminBillPage.tabBillInfoBtn)
		.wait(1000)
		.expect(adminBillPage.tabBillInfoContent.exists)
		.ok();
*/
});

