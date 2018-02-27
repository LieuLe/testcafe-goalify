import KeyresultPage from '../models/Objective-KrPage';
import { adminAccUser } from '../config/role';
import config from '../config';
import { Selector } from 'testcafe';

// Page model
const keyresultpage = new KeyresultPage();

const randomText = () => {
	let text = '';
	const character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for (let i = 0; i < 5; i++) {
		text += character.charAt(Math.floor(Math.random() * character.length));
	}
	return text;
};

const testdata = {
	keyresultname: `Key result _ ${randomText()}`,
	description:'automation test',
	Minvalue:'0',
	Maxvalue:'100'
};


fixture `Testing create/delete bjective`
	.page`${config.baseUrl}/`
	.beforeEach(async t => {
		console.log(t.ctx);
		/* test initialization code */
		await t
			.useRole(adminAccUser)
			.navigateTo(config.indexPage);
	});

// add key result
test('add key result', async t => {
	//create Objective Enhance
	await t
		.wait(1000)
		.navigateTo('#goal')
        .wait(5000)
    await t
		.click(keyresultpage.btn)
        .wait(1000)
        .click(keyresultpage.addbtn)
        .wait(1000)
        .typeText(keyresultpage.krnametxt,testdata.keyresultname)
        .wait(1000)
        .typeText(keyresultpage.krdescriptiontxt,testdata.description)
        .wait(1000)
        .typeText(keyresultpage.minvaluetxt,testdata.Minvalue)
        .wait(1000)
        .typeText(keyresultpage.maxvaluetxt,testdata.Maxvalue)
        .wait(1000)
        .click(keyresultpage.unitbtn)
        .wait(1000)
        .click(keyresultpage.submitbtn)
        
})
