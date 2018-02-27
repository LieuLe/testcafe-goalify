import { Selector } from 'testcafe';

export default class Page {
	constructor() {
		this.coreValuePage = Selector('.core-value-page ');

		this.tabCoreValueBtn = this.coreValuePage.find('[data-react-toolbox=tab]').nth(0);
		this.tabTimelineRecordBtn = this.coreValuePage.find('[data-react-toolbox=tab]').nth(1);
		this.tabLeaderboardSettingBtn = this.coreValuePage.find('[data-react-toolbox=tab]').nth(2);

		this.tabCoreValueContainer = this.coreValuePage.find('[data-react-toolbox=tabs] > [tabindex="0"]');
		this.tabTimelineRecordContainer = this.coreValuePage.find('[data-react-toolbox=tabs] > [tabindex="1"]');
		this.tabLeaderboardSettingContainer = this.coreValuePage.find('[data-react-toolbox=tabs] > [tabindex="2"]');

		this.coreValues = this.tabCoreValueContainer.find('.simple-panel');
		this.timelines = this.tabTimelineRecordContainer.find('.timeline');
		this.tableSetting = this.tabLeaderboardSettingContainer.find('table');

	}
}

