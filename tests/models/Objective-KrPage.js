import { Selector } from 'testcafe';

export default class Page {
	constructor() {
		this.btn = Selector('span[class="objective__key-results collapse__trigger"]').nth(0);
        this.addbtn = Selector('[class="icon icon--IconAdd"]');

        this.keyresultPage = Selector('.dialog-form');

        this.krnametxt = this.keyresultPage.find('input[name="name"]');
        this.krdescriptiontxt = this.keyresultPage.find('[name="description"]');
        this.minvaluetxt = this.keyresultPage.find('input[name="minValue"]');
        this.maxvaluetxt = this.keyresultPage.find('input[name="maxValue"]');
        this.unitbtn = this.keyresultPage.find('[data-value="%"]');
        this.submitbtn = this.keyresultPage.find('[name="submit"]');
	}
}

