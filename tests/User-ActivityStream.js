import Activitystreampage from './models/ActivityStreamPage';
import config from './config';
import { adminAccUser } from './config/role';
import { Selector } from 'testcafe';

fixture `Testing user dashboard`
	.page `${config.baseUrl}/`
	.beforeEach(async t => {
		/* test initialization code */
		await t
			.useRole(adminAccUser)
			.navigateTo(config.indexPage);
	})
	.afterEach(async t => {
		/* test finalization code */
		console.log(t.ctx);
	});

// Page model
const activitystreampage = new Activitystreampage();

// Tests
test.skip('Open dashboard', async t => {
	await t
		.wait(1000)
		.navigateTo('#dashboard')
        .expect(activitystreampage.profileLink.exists).ok()
        .wait(1000)
        .expect(activitystreampage.ToDoSession.exists)
		.ok();
});
