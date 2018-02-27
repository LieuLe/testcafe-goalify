import AdminJobPage from './models/Admin-JobSettingPage';
import { adminAccUser } from './config/role';
import config from './config';

//page model
const adminJobpage = new AdminJobPage();

fixture `Testing admin-jobsetting page`
    .page `${config.baseUrl}/`
    .beforeEach(async t => {
        console.log(t.ctx);
        await t
            .useRole(adminAccUser)
            .navigateTo(config.indexPage);
    })
    .afterEach(async t => {
        console.log(t.ctx);
    });

test('Open admin/Job Setting',async t => {
    await t
        .navigateTo('#admin/job-setting');
    
    //tab Job Title
    await t
        .wait(1000)
        .click(adminJobpage.tabJobtitleBtn)
        .wait(1000)
        .expect(adminJobpage.JobSearch.exists).ok()
        .wait(500)
        .expect(adminJobpage.JobFilter.exists).ok()
        .wait(500)
        .expect(adminJobpage.tabJobtitleContent.exists).ok();

    //add job
    await t 
        .wait(500)
        .click(adminJobpage.AddJobBtn)
        .wait(500)
        .expect(adminJobpage.Dialog.exists).ok();

 })