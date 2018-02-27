import { Selector } from 'testcafe';

export default class Page {
	constructor() {
		this.directoryPage = Selector('.directory-admin');

		this.tabEmployeeBtn = this.directoryPage.find('[data-react-toolbox=tab]').nth(0);
		this.tabDepartmentBtn = this.directoryPage.find('[data-react-toolbox=tab]').nth(1);
		this.tabTeamBtn = this.directoryPage.find('[data-react-toolbox=tab]').nth(2);
		this.tabPositionBtn = this.directoryPage.find('[data-react-toolbox=tab]').nth(3);
		this.tabChartBtn = this.directoryPage.find('[data-react-toolbox=tab]').nth(4);

		this.tabEmployeeContainer = this.directoryPage.find('[data-react-toolbox=tabs] > [tabindex="0"]');
		this.tabDepartmentContainer = this.directoryPage.find('[data-react-toolbox=tabs] > [tabindex="1"]');
		this.tabTeamContainer = this.directoryPage.find('[data-react-toolbox=tabs] > [tabindex="2"]');
		this.tabPositionContainer = this.directoryPage.find('[data-react-toolbox=tabs] > [tabindex="3"]');
		this.tabChartContainer = this.directoryPage.find('[data-react-toolbox=tabs] > [tabindex="4"]');

		this.tabEmployeeContent = this.tabEmployeeContainer.find('.tab-employee');
		this.tabChartContent = this.tabChartContainer.find('.simple-panel');
		this.tabDepartmentContent = this.tabDepartmentContainer.find('.directory__wrapper');
		this.tabTeamContent = this.tabTeamContainer.find('.directory__wrapper');
		this.tabPositionContent = this.tabPositionContainer.find('table');
	}
}

