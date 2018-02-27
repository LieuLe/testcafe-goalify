import { Selector } from 'testcafe';

export default class Page {
	constructor() {
		this.coreValuePage = Selector('.core-value-page');

		this.tabActivities = this.coreValuePage.find('[data-react-toolbox="tab"]').nth(0);
		this.tabLeaderBoard = this.coreValuePage.find('[data-react-toolbox="tab"]').nth(1);
		this.tabCoreValues = this.coreValuePage.find('[data-react-toolbox="tab"]').nth(2);

		this.tabActivitiesContainer = this.coreValuePage.find('[data-react-toolbox="tabs"] > [tabindex="0"]');
		this.tabLeaderBoardContainer = this.coreValuePage.find('[data-react-toolbox="tabs"] > [tabindex="1"]');
		this.tabCoreValuesContainer = this.coreValuePage.find('[data-react-toolbox="tabs"] > [tabindex="2"]');

		this.tabActivitiesContent = this.tabActivitiesContainer.find('.simple-panel');
		this.tabLeaderBoardContent = this.tabLeaderBoardContainer.find('.simple-panel__body--leader-board');
		this.tabCoreValuesContent = this.tabCoreValuesContainer.find('.__core-value-container');

		this.giveCoreValueBtn = this.coreValuePage.find('[data-react-toolbox="tabs"] + [data-react-toolbox="button"]');
		this.dialogForm = Selector('.dialog-form');
		this.closeDialogBtn = Selector('.dialog-form + span');

		//button
		this.giveAchievement = this.coreValuePage.find('button');
		this.givebutton = Selector('button[name=submit]');


		//textbox
		this.ReceiverInput = Selector('input[direction=down]').nth(0);
		this.CoreInput = Selector('input[direction=down]').nth(1);
		this.reasonInput = Selector('textarea');

		//label
		this.coredatelb = this.tabActivitiesContent.find('#layoutWrapper > div > div.theme__panel__o2a2H > div.layout__content.layout__content--sidebar-active > div > div > div > section > div > div > div > div.mui-row > div:nth-child(1) > div > div > div > div.core-value-activities__give > div > div > span');

		this.coretextlb = Selector('span.core-value-activities__core--text').nth(0);
	}
}

