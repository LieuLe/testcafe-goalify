import { Selector } from 'testcafe';

export default class Page {
	constructor() {
		this.summaryPage = Selector('.layout__content > div');

		this.tabHumanResourceBtn = this.summaryPage.find('[data-react-toolbox=tab]').nth(0);

		this.tabHumanResourceContainer = this.summaryPage.find('[data-react-toolbox=tabs] > [tabindex="0"]');

		this.tabHumanResourceContent = this.tabHumanResourceContainer.find('.simple-panel');

		this.DropdownType = this.tabHumanResourceContainer.find('div[data-react-toolbox="input"]').nth(0);
		this.HeadcountBtn = this.DropdownType.parent(1).find('ul li').nth(0);
		this.GenderProfileBtn = this.DropdownType.parent(1).find('ul li').nth(1);
		this.AgeProfileBtn = this.DropdownType.parent(1).find('ul li').nth(2);
		this.DateLeaveBtn = this.DropdownType.parent(1).find('ul li').nth(3);

		this.HeadcountContent = Selector('.summary-page__head-count');
		this.GenderProfileContent = Selector('.summary-page__gender-profile');
		this.AgeProfileContent = Selector('.summary-page__age-profile');
		this.DateLeaveContent = Selector('.summary-page__content');


	}
}

