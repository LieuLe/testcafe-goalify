import { Selector } from 'testcafe';

export default class Page {
	constructor() {
		this.newsPage = Selector('.news-page');
		this.tabAllBtn = this.newsPage.find('[data-react-toolbox=tab]').nth(0);

		this.tabAllContainer = this.newsPage.find('[tabindex="0"]');

		this.tabAllContent = this.newsPage.find('.simple-panel__body');
	}
}

