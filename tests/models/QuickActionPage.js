import { Selector } from 'testcafe';

export default class page
{
    constructor() {
        this.appBar = Selector ('.app-bar__right-side');
        
        this.quickActionBtn = this.appBar.find('[data-react-toolbox="button"]');

        this.quickActionContainer = Selector('[id="quick-action"]');

        this.GoalBtn = this.quickActionContainer.find('[data-action="goal"]');
        this.GiveCoreBtn = this.quickActionContainer.find('[data-action="corevalue"]');
        this.ApplyLeaveBtn = this.quickActionContainer.find('[data-action="leave"]');

        this.form = Selector('.dialog-form');
        this.CancelBtn = this.form.find('.dialog-form__cancel-link');
    }

}