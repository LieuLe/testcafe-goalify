import { Selector } from 'testcafe';

export default class Page {
	constructor() {
		this.pageContainer = Selector('.view-profile-page');//.child('.wrappanel');
		this.profileLink = Selector('.app-bar__right-side').find('.app-bar__profile');
		this.tabsContainer = this.pageContainer.find('[data-react-toolbox=tabs]');
		this.tabAll = this.pageContainer.find('[data-react-toolbox=tab]').nth(0);
		this.tabAchievement = this.pageContainer.find('[data-react-toolbox=tab]').nth(1);
		this.tabJob = this.pageContainer.find('[data-react-toolbox=tab]').nth(2);
		this.tabLeave = this.pageContainer.find('[data-react-toolbox=tab]').nth(3);

		this.editProfileButton = this.pageContainer.find('.general-info__action button').nth(0);
		this.changePasswordButton = this.pageContainer.find('.general-info__action button').nth(1);

		this.editProfileDialog = Selector('[data-react-toolbox="overlay"]');
		this.closeProfileButton = this.editProfileDialog.find('.icon--IconClose').parent();

		this.changePasswordDialog = Selector('[data-react-toolbox="overlay"]');
		this.closeChangePasswordButton = this.changePasswordDialog.find('.icon--IconClose').parent();

		this.generalInfoContent = this.pageContainer.find('.general-info');
		this.tabArchievementContent = this.pageContainer.find('.tab-archievement');
		this.tabJobContent = this.pageContainer.find('.employee-detail');
		this.leaveInfoContent = this.pageContainer.find('.leave-info');
	}
}
