import AdminDirectoryPage from '../models/Admin-DirectoryPage';
import { adminAccUser } from '../config/role';
import config from '../config';

// Page model
const adminDirectoryPage = new AdminDirectoryPage();

fixture.skip `Testing admin-directory page`
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
test('Open admin/directory', async t => {
	await t
		.navigateTo('#admin/directory')
		.wait(1000);

	//tab Employee
	await t
		.wait(1000)
		.click(adminDirectoryPage.tabEmployeeBtn)
		.wait(1000)
		.expect(adminDirectoryPage.tabEmployeeContent.exists)
		.ok()
		.wait(500)
		.expect(adminDirectoryPage.EmployeeSearch.exists)
		.ok()
		.wait(500)
		// .expect(adminDirectoryPage.EmployeeFilter.exists)
		// .ok()
		.wait(500)
		.expect(adminDirectoryPage.EmployeeInfo.exists)
		.ok();

	//add employee
	await t
		.wait(1000)
		.click(adminDirectoryPage.actionBtn)
		.wait(1000)
		.expect(adminDirectoryPage.dialogForm.exists)
		.ok()
		.wait(500)
		.expect(adminDirectoryPage.AddPersonal.exists)
		.ok()
		.wait(500)
		.expect(adminDirectoryPage.AddAddress.exists)
		.ok()
		.wait(500)
		.expect(adminDirectoryPage.AddCompensation.exists)
		.ok()
		.wait(500)
		.expect(adminDirectoryPage.AddContact.exists)
		.ok()
		.wait(500)
		.expect(adminDirectoryPage.AddJob.exists)
		.ok()
		.wait(500)
		.expect(adminDirectoryPage.AddEmployeeStatus.exists)
		.ok()
		.wait(500)
		.expect(adminDirectoryPage.AddJobInfo.exists)
		.ok();

	await t
		.click(adminDirectoryPage.closeDialogBtn);

	//tab Department
	await t
		.wait(1000)
		.click(adminDirectoryPage.tabDepartmentBtn)
		.wait(1000)
		.expect(adminDirectoryPage.DepartmentSearch.exists)
		.ok()
		.wait(500)
		.expect(adminDirectoryPage.tabDepartmentContent.exists)
		.ok();

	//add Department
	await t
		.wait(1000)
		.click(adminDirectoryPage.actionBtn)
		.wait(1000)
		.expect(adminDirectoryPage.dialogForm.exists)
		.ok();

	await t
		.click(adminDirectoryPage.closeDialogBtn);


	//tab Team
	await t
		.wait(1000)
		.click(adminDirectoryPage.tabTeamBtn)
		.wait(1000)
		.expect(adminDirectoryPage.TeamSearch.exists)
		.ok()
		.wait(500)
		.expect(adminDirectoryPage.tabTeamContent.exists)
		.ok();

	await t
		.wait(1000)
		.click(adminDirectoryPage.actionBtn)
		.wait(1000)
		.expect(adminDirectoryPage.dialogForm.exists)
		.ok();

	await t
		.click(adminDirectoryPage.closeDialogBtn);

	//tab Import Employee
	await t
		.wait(1000)
		.click(adminDirectoryPage.tabAccessLevelBtn)
		.expect(adminDirectoryPage.tabAccessLevelContent.exists)
		.ok()
		.wait(500)
		.click(adminDirectoryPage.tabUnarrangedUserBtn)
		.expect(adminDirectoryPage.tabUnarrangedUserContainer.exists)
		.ok()
		.wait(500)
		.click(adminDirectoryPage.tabDeactiveUserBtn)
		.expect(adminDirectoryPage.tabDeactiveUserContainer.exists)
		.ok()
		.wait(500);

	//tab Import Employee
	await t
		.wait(1000)
		.click(adminDirectoryPage.tabImportEmployeeBtn)
		.expect(adminDirectoryPage.tabImportEmployeeContent.exists)
		.ok()
		.wait(500)
		.expect(adminDirectoryPage.DownloadTemplateBtn.exists)
		.ok()
		.wait(500)
		.expect(adminDirectoryPage.ImportUserBtn.exists)
		.ok();

});

