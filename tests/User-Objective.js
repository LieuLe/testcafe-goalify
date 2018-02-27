import ObjectivePage from './models/ObjectivePage';
import { adminAccUser } from './config/role';
import config from './config';
import { Selector } from 'testcafe';

// Page model
const objectivepage = new ObjectivePage();

const randomText = () => {
	let text = '';
	const character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for (let i = 0; i < 5; i++) {
		text += character.charAt(Math.floor(Math.random() * character.length));
	}
	return text;
};

const testdata = {
	objectivename: `Objective_${randomText()}`,
	description:'automation test',
	objectivelevel: 'Department',
	KRName: 'Key result',
	Minvalue:'0',
	Maxvalue:'100'
};


fixture `Testing user goal view`
	.page`${config.baseUrl}/`
	.beforeEach(async t => {
		console.log(t.ctx);
		/* test initialization code */
		await t
			.useRole(adminAccUser)
			.navigateTo(config.indexPage);
	});

// Tests
test.skip('Open goal default page', async t => {
	await t
		.wait(2000)
		.navigateTo('#goal')
		.wait(2000)
		.expect(objectivepage.goalPage.exists)
		.ok()
	await t
		.wait(1000)
		.click(objectivepage.createGoalBtn)
		.wait(1000)
		.click(objectivepage.closeDialogBtn)
		.wait(500);
});

