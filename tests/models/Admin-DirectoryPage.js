import { Selector } from 'testcafe';

export default class Page {
	constructor() {
		this.directoryPage = Selector('.directory-admin');

		this.tabEmployeeBtn = this.directoryPage.find('[data-react-toolbox=tab]').nth(0)
		this.tabDepartmentBtn = this.directoryPage.find('[data-react-toolbox=tab]').nth(1);
		this.tabTeamBtn = this.directoryPage.find('[data-react-toolbox=tab]').nth(2);
		this.tabAccessLevelBtn = this.directoryPage.find('[data-react-toolbox=tab]').nth(3);
		this.tabImportEmployeeBtn = this.directoryPage.find('[data-react-toolbox=tab]').nth(4);

		this.tabEmployeeContainer = this.directoryPage.find('[data-react-toolbox=tabs] > [tabindex="0"]');
		this.tabDepartmentContainer = this.directoryPage.find('[data-react-toolbox=tabs] > [tabindex="1"]');
		this.tabTeamContainer = this.directoryPage.find('[data-react-toolbox=tabs] > [tabindex="2"]');
		this.tabAccessLevelContainer = this.directoryPage.find('[data-react-toolbox=tabs] > [tabindex="3"]');
		this.tabImportEmployeeContainer = this.directoryPage.find('[data-react-toolbox=tabs] > [tabindex="4"]');

		this.tabEmployeeContent = this.tabEmployeeContainer.find('div.simple-panel__body');
		this.tabDepartmentContent = this.tabDepartmentContainer.find('.directory-admin__container');
		this.tabTeamContent = this.tabTeamContainer.find('.directory-admin__container');
		this.tabAccessLevelContent = this.tabAccessLevelContainer.find('.access-level').parent();
		this.tabImportEmployeeContent = this.tabImportEmployeeContainer.find('.tab-import-user__main');


		this.tabActiveUserBtn = this.tabAccessLevelContent.find('[data-react-toolbox=tab]').nth(0);
		this.tabUnarrangedUserBtn = this.tabAccessLevelContent.find('[data-react-toolbox=tab]').nth(1);
		this.tabDeactiveUserBtn = this.tabAccessLevelContent.find('[data-react-toolbox=tab]').nth(2);

		this.tabActiveUserContainer = this.tabAccessLevelContent.find('[data-react-toolbox=tabs] > [tabindex="0"]');
		this.tabUnarrangedUserContainer = this.tabAccessLevelContent.find('[data-react-toolbox=tabs] > [tabindex="1"]');
		this.tabDeactiveUserContainer = this.tabAccessLevelContent.find('[data-react-toolbox=tabs] > [tabindex="2"]');

		this.tabActiveUserContent = this.tabActiveUserContainer.find('table');
		this.tabUnarrangedUserContent = this.tabUnarrangedUserContainer.find('table');
		this.tabDeactiveUserContent = this.tabDeactiveUserContainer.find('table');

		this.actionBtn = this.directoryPage.find('[data-react-toolbox=tabs] + [data-react-toolbox=button]');
		this.dialogForm = Selector('.dialog-form');
		this.closeDialogBtn = Selector('.dialog-form + span');
		this.DownloadTemplateBtn = this.tabImportEmployeeContainer.find('[data-react-toolbox=button]').nth(0);
		this.ImportUserBtn = this.tabImportEmployeeContainer.find('[data-react-toolbox=button]').nth(1);

		this.EmployeeSearch = this.tabEmployeeContainer.find('.tab-employee');
		this.DepartmentSearch = this.tabDepartmentContainer.find('.directory__search-container').parent();
		this.TeamSearch = this.tabTeamContainer.find('.directory__search-container').parent();

		this.EmployeeFilter = this.tabEmployeeContainer.find('.tab-employee__header__search');
		this.EmployeeInfo = this.tabEmployeeContent.find('.tab-employee__list');

		//add Employee
		this.AddPersonal = this.dialogForm.find('[class= mui-col-md-12]').nth(0);
		this.AddAddress = this.dialogForm.find('[class= mui-col-md-12]').nth(1);
		this.AddCompensation = this.dialogForm.find('[class= mui-col-md-12]').nth(2);
		this.AddContact = this.dialogForm.find('[class= mui-col-md-12]').nth(3);
		this.AddJob = this.dialogForm.find('[class= mui-col-md-12]').nth(4);
		this.AddEmployeeStatus = this.dialogForm.find('[class= mui-col-md-12]').nth(5);
		this.AddJobInfo = this.dialogForm.find('[class= mui-col-md-12]').nth(6);

	}
}

