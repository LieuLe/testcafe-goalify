import { Selector } from 'testcafe';

export default class Page {
	constructor() {
		this.pageContainer = Selector('.admin-job');

		this.tabJobtitleBtn = this.pageContainer.find('[data-react-toolbox="tab"]');

		this.tabJobtitleContainer = this.pageContainer.find('[data-react-toolbox=tabs] > [tabindex="0"]');
		this.AddJobBtn = this.tabJobtitleContainer.find('[data-react-toolbox="button"]');
		this.Dialog = Selector('.dialog-form');

		this.tabJobtitleContent = this.tabJobtitleContainer.find('[class="job-title__table-container"]');
		this.JobFilter = this.tabJobtitleContainer.find('[class="job-title__filter"]');
		this.JobSearch = this.tabJobtitleContainer.find('input[type=text]');
	}
}
