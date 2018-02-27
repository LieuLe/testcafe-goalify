import { Selector } from 'testcafe';

export default class Page {
	constructor() {
		this.newsPage = Selector('.layout__content > div');
		this.tabOverviewBtn = this.newsPage.find('[data-react-toolbox=tab]').nth(0);

		this.tabOverviewContainer = this.newsPage.find('[tabindex="0"]');

		this.tabOverviewContent = this.tabOverviewContainer.find('table');

		this.createNewsBtn = this.newsPage.find('[data-react-toolbox=tabs] + [data-react-toolbox=button]');
		this.dialogForm = Selector('.dialog-form');
		this.closeDialogBtn = Selector('.dialog-form + span');

		//textbox
		this.titleInput = Selector('input[name=title]');
		this.discreptions = Selector('div.notranslate.public-DraftEditor-content');
		//button
		this.createbutton = Selector('button[name=submit]');
	}
}

