import { Selector } from 'testcafe';

export default class Page {
	constructor() {
		this.leavePage = Selector('.admin-leave-page');

		//tab
		this.tabLeavePeriodBtn = this.leavePage.find('[data-react-toolbox=tab]').nth(0);
		this.tabLeaveTypeBtn = this.leavePage.find('[data-react-toolbox=tab]').nth(1);
		this.tabWorkweekBtn = this.leavePage.find('[data-react-toolbox=tab]').nth(2);
		this.tabLeaveAllowanceBtn = this.leavePage.find('[data-react-toolbox=tab]').nth(3);

		this.leavePeriodContainer = this.leavePage.find('[data-react-toolbox=tabs] > [tabindex="0"]');
		this.leaveTypeContainer = this.leavePage.find('[data-react-toolbox=tabs] > [tabindex="1"]');
		this.workweekContainer = this.leavePage.find('[data-react-toolbox=tabs] > [tabindex="2"]');
		this.leaveAllowanceContainer = this.leavePage.find('[data-react-toolbox=tabs] > [tabindex="3"]');

		this.leavePeriodContent = this.leavePeriodContainer.find('.simple-panel__body--big-p');
		this.leaveTypeContent = this.leaveTypeContainer.find('table');
		this.workweekContent = this.workweekContainer.find('table');
		this.leaveAllowanceContent = this.leaveAllowanceContainer.find('table');

		this.addLeaveTypeBtn = this.leaveTypeContainer.find('[data-react-toolbox=button]').nth(0);
		this.dialogForm = Selector('.dialog-form');
		this.closeDialogBtn = Selector('.dialog-form + span');
		this.savebtn = Selector('div > form > button');

		//add leave type
		this.NameLeavetypetxt = Selector('input[name=name]').nth(0);
		this.Colortxt = Selector('input[name=name]').nth(1);
		this.Leavetypelb = this.leaveTypeContent.find(' td:nth-child(3) > div').nth(2);
		this.colorpickerbtn = Selector('div[class=color-picker__color]');
		this.Okcolorbtn = Selector('div.color-picker__button-container > button');

		//add leave entitlements
		this.employeetxt = this.dialogForm.find('input[type=text]').nth(0);
		this.employeeSelect = this.employeetxt.parent(1).find('ul li').nth(2);
		this.leavetypetxt = Selector('div.theme__dropdown__co-4M').nth(1);
		this.leavetypeOptions = this.leavetypetxt.find(' ul > li:nth-child(2)');
		this.addentitlementbtn = this.leavePage.find('button');
		this.Entitlementtxt = Selector('input[name=entitlement]');
		this.checktable = Selector('div.react-bs-container-body.matching-body-container > table');
		this.checkentitlement = this.checktable.find(' tbody > tr > td:nth-child(4)');
		this.saveOntablebtn = Selector('button[data-type=save]');
	}
}
