import { Selector } from 'testcafe';

export default class Page {
	constructor() {
		this.calendarPage = Selector('.layout__content > div');

		this.tabHolidayBtn = this.calendarPage.find('[data-react-toolbox=tab]').nth(0);

		this.tabHolidayContainer = this.calendarPage.find('[data-react-toolbox=tabs] > [tabindex="0"]');
		this.addHolidayBtn = this.calendarPage.find('[data-react-toolbox=tabs] + [data-react-toolbox=button]');

		this.tabHolidayContent = this.tabHolidayContainer.find('table');
		this.dialogForm = Selector('.dialog-form');

		//textbox
		this.nameInput = Selector ('input[name=name]');
		this.fromdateInput = Selector('div:nth-child(2) > div > div > div > input');
		//this.todateInput = Selector('input[type=text]').nth(2);
		

		//datetime
		this.day = Selector('div[data-react-toolbox=day]>span').nth(10);

		//button
		this.saveholidays = Selector ('button[name=submit]');
		this.OKbutton = Selector ('button').withText('OK');
		this.day = Selector ('div[data-react-toolbox="day"]').nth(0);

		//label 
		this.errorlabel = Selector ('span[class="dialog-form__error"]');
	}
}

