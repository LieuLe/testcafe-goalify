import AdminNewsPage from './models/Admin-NewsPage';
import { adminAccUser } from './config/role';
import config from './config';

// Page model
const adminNewsPage = new AdminNewsPage();

fixture `Testing admin-news page`
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
test('Open admin/news', async t => {
	await t
		.navigateTo('#admin/news');

	await t
		.wait(2000)
		.click(adminNewsPage.tabOverviewBtn)
		.wait(1000)
		.expect(adminNewsPage.tabOverviewContent.exists)
		.ok();

	await t
		.wait(1000)
		.click(adminNewsPage.createNewsBtn)
		.wait(1000)
		.expect(adminNewsPage.dialogForm.exists)
		.ok();

});

