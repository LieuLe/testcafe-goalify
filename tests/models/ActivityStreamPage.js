import { Selector } from 'testcafe';

export default class Page {
    constructor() {
        this.ActivitySteamPage = Selector('.dashboard-page');
        
        this.approved = Selector('jhjhjh').nth(0);
        this.ToDoSession = Selector('.work-to-do');
        this.profileLink = Selector('.app-bar__right-side').child('.app-bar__profile');
        this.profileHeaderEle = Selector('.basic-info-profile__header');
        
    }
}