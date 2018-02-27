import { Selector } from 'testcafe';

export default class Page {
	constructor() {
		this.overviewHeaderEl = Selector('.overview__header');
		this.inviteFriendButton = Selector('.overview .overview-step button').withText(/^invite\s+friend*/i);
		this.exportUsersButton = Selector('.directory-admin button').withText(/^export*/i);
	}
}

