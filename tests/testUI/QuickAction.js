import quickactionpage from '../models/QuickActionPage';
import config from '../config';
import { adminAccUser  } from '../config/role';

const quickActionPage = new quickactionpage();

fixture `Testing quick-action page`
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
    
test('Open quick-action page', async t => {
    await t
        .navigateTo('#dashboard')
        .wait(1000)
    
    //Open quick-action form
    await t
        .wait(1000)
        .click(quickActionPage.quickActionBtn)
        .wait(1000)
        .expect(quickActionPage.quickActionContainer.exists)
        .ok();

    //Open Goal form
    await t
        .wait(1000)
        .click(quickActionPage.GoalBtn)
        .wait(1000)
        .expect(quickActionPage.form.exists)
        .ok()
        .wait(1000)
        .click(quickActionPage.CancelBtn)

    //Open Give Achievement form
    await t
        .wait(1000)
        .click(quickActionPage.quickActionBtn)
        .wait(1000)
        .click(quickActionPage.GiveCoreBtn)
        .wait(1000)
        .expect(quickActionPage.form.exists)
        .ok()
        .wait(1000)
        .click(quickActionPage.CancelBtn)

    //Open Apply leave form
    await t 
        .wait(1000)
        .click(quickActionPage.quickActionBtn)
        .wait(1000)
        .click(quickActionPage.ApplyLeaveBtn)
        .wait(1000)
        .expect(quickActionPage.form.exists)
        .ok()
        .wait(1000)
        .click(quickActionPage.CancelBtn)
})