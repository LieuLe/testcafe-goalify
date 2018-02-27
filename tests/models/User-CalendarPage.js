import { Selector } from 'testcafe';

export default class Page {
	constructor() {
		this.calendarPage = Selector('.calendar-page');

		this.tabOverview = this.calendarPage.find('[data-react-toolbox="tab"]').nth(0);
		this.tabAnniversary = this.calendarPage.find('[data-react-toolbox="tab"]').nth(1);
		this.tabHolidays = this.calendarPage.find('[data-react-toolbox="tab"]').nth(2);

		this.tabOverviewContainer = this.calendarPage.find('[data-react-toolbox="tabs"] > [tabindex="0"]');
		this.tabAnniversaryContainer = this.calendarPage.find('[data-react-toolbox="tabs"] > [tabindex="1"]');
		this.tabHolidaysContainer = this.calendarPage.find('[data-react-toolbox="tabs"] > [tabindex="2"]');

		this.tabOverviewContent = this.tabOverviewContainer.find('.rbc-calendar');
		this.tabAnniversaryContent = this.tabAnniversaryContainer.find('.anniversary-tab');
		this.tabHolidaysContent = this.tabHolidaysContainer.find('.calendar__holiday');
	}
}

