import AdminOverviewPage from './models/Admin-OverviewPage';
import config from './config';
import { adminAccUser } from './config/role';

fixture `Testing admin-overview page`
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

// Page model
const adminOverviewPage = new AdminOverviewPage();

// Tests
test('Open admin/overview', async t => {
	await t
		.navigateTo('#admin/overview');

	await t
		// .wait(1000)
		// .click(adminOverviewPage.inviteFriendButton)
		.wait(1000)
		.expect(adminOverviewPage.overviewHeaderEl.exists)
		.ok();
});
