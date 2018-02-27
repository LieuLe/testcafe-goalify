import { Selector } from 'testcafe';

export default class Page {
	constructor() {
		this.settingPage = Selector('.layout__content > div');

		this.tabCompanyBtn = this.settingPage.find('[data-react-toolbox=tab]').nth(0);
		this.tabAdministratorBtn = this.settingPage.find('[data-react-toolbox=tab]').nth(1);
		this.tabShareCheerBtn = this.settingPage.find('[data-react-toolbox=tab]').nth(2);

		this.tabCompanyContainer = this.settingPage.find('[data-react-toolbox=tabs] > [tabindex="0"]');
		this.tabAdministratorContainer = this.settingPage.find('[data-react-toolbox=tabs] > [tabindex="1"]');
		this.tabShareCheerContainer = this.settingPage.find('[data-react-toolbox=tabs] > [tabindex="2"]');

		this.tabCompanyContent = this.tabCompanyContainer.find('.tab-company');
		this.tabAdministratorContent = this.tabAdministratorContainer.find('table');
		this.tabShareCheerContent = this.tabShareCheerContainer.find('.share-and-cheer');

		this.editProfileBtn = this.tabCompanyContainer.find('.tab-company .__edit-company-profile');
		this.dialogForm = Selector('.dialog-form');
		this.closeDialogBtn = Selector('.dialog-form + span');
	}
}

