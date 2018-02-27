import { Selector } from 'testcafe';

export default class Page {
	constructor() {
		this.billPage = Selector('.admin-bill-page');

		this.tabPaymentBtn = this.billPage.find('[data-react-toolbox=tab]').nth(0);
		this.tabBillInfoBtn = this.billPage.find('[data-react-toolbox=tab]').nth(1);

		this.tabPaymentContainer = this.billPage.find('[data-react-toolbox=tabs] > [tabindex="0"]');
		this.tabBillInfoContainer = this.billPage.find('[data-react-toolbox=tabs] > [tabindex="1"]');
		this.changeModeBtn = this.billPage.find('[data-react-toolbox=tabs] + [data-react-toolbox=button]');

		this.tabPaymentContent = this.tabPaymentContainer.find('[data-react-toolbox=tabs]');
		this.tabBillInfoContent = this.tabBillInfoContainer.find('.payment-info');

		this.tabPaymentModeBtn = this.tabPaymentContent.find('[data-react-toolbox=tab]').nth(0);
		this.tabPaymentMethodBtn = this.tabPaymentContent.find('[data-react-toolbox=tab]').nth(1);
		this.tabPaymentHistoryBtn = this.tabPaymentContent.find('[data-react-toolbox=tab]').nth(2);
		this.tabPaymentInvoicesBtn = this.tabPaymentContent.find('[data-react-toolbox=tab]').nth(3);

		this.tabPaymentModeContainer = this.tabPaymentContent.find('[data-react-toolbox=tabs] > [tabindex="0"]');
		this.tabPaymentMethodContainer = this.tabPaymentContent.find('[data-react-toolbox=tabs] > [tabindex="1"]');
		this.tabPaymentHistoryContainer = this.tabPaymentContent.find('[data-react-toolbox=tabs] > [tabindex="2"]');
		this.tabPaymentInvoicesContainer = this.tabPaymentContent.find('[data-react-toolbox=tabs] > [tabindex="3"]');

		this.tabPaymentModeContent = this.tabPaymentModeContainer.find('.payment-plan, .payment-plan-trial');
		this.tabPaymentMethodContent = this.tabPaymentMethodContainer.find('table');
		this.tabPaymentHistoryContent = this.tabPaymentHistoryContainer.find('.payment-history');
		this.tabPaymentInvoicesContent = this.tabPaymentInvoicesContainer.find('.invoices-list');

		this.pricingPackages = this.tabPaymentContent.find('.pricing__packages');
	}
}

