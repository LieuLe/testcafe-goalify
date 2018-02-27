import ObjectivePage from '../models/ObjectivePage';
import { adminAccUser } from '../config/role';
import config from '../config';
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


fixture `Testing create/delete bjective`
	.page`${config.baseUrl}/`
	.beforeEach(async t => {
		console.log(t.ctx);
		/* test initialization code */
		await t
			.useRole(adminAccUser)
			.navigateTo(config.indexPage);
	});

// Create objective
test('create objective', async t => {
	//create Objective Enhance
	await t
		.wait(1000)
		.navigateTo('#goal')
        .wait(5000)
    await t
		.click(objectivepage.createGoalBtn)
		.wait(1000)
		.typeText(objectivepage.ObjectiveInput,testdata.objectivename)
		.wait(1000)
		.typeText(objectivepage.DescriptionInput,testdata.description)
		.wait(1000)
		.click(objectivepage.ObjectiveLevel)
		.wait(100)
		.click(objectivepage.selectObjectiveLevel)
		.wait(100)
		.typeText(objectivepage.KRname,testdata.KRName)
		.wait(1000)
		.typeText(objectivepage.KRmin,testdata.Minvalue)
		.wait(100)
		.typeText(objectivepage.KRMax,testdata.Maxvalue)
		.wait(100)
		.click(objectivepage.KRUnit)
		.wait(100)
		.click(objectivepage.ObjectiveRemind)
		.wait(1000)
		.click(objectivepage.selectRemind)
		.wait(1000)
		.click(objectivepage.CreateButton)
		.wait(5000)

	await t
		.expect(await objectivepage.objective_name.innerText ).eql(testdata.objectivename)
});

//Delete objective
test('delete objective',async t => {
	await t
		.wait(1000)
		.navigateTo('#goal')
        .wait(3000)
        let objectivename1 = await objectivepage.objective_name.innerText;

    await t
        .click(objectivepage.iconmenu)
        .wait(1000)
        .click(objectivepage.deletebtn)
        .wait(2000)
        .click(objectivepage.confirmOK)
        .wait(5000)
        let objectivename2 = await objectivepage.objective_name.innerText;
    await t
        .expect(objectivename2).notEql(objectivename1)
        
})
