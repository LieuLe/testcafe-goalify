import NewsPage from './models/User-NewsPage';
import { adminAccUser } from './config/role';
import config from './config';

// Page model
const newsPage = new NewsPage();

fixture `Testing user-news page`
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
test('Open news', async t => {
	await t
		.navigateTo('#news');

	await t
		// .wait(1000)
		// .click(newsPage.tabAllBtn)
		.wait(1500)
		.expect(newsPage.tabAllContent.exists)
		.ok();


});

