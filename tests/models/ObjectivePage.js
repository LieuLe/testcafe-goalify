import { Selector } from 'testcafe';

export default class Page {
	constructor() {
		this.goalPage = Selector('.goal-page');

		this.tabObjectiveDetail = this.goalPage.find('[data-react-toolbox="tab"]').nth(0);
		this.tabHierarchy = this.goalPage.find('[data-react-toolbox="tab"]').nth(1);
		this.tabTimeline = this.goalPage.find('[data-react-toolbox="tab"]').nth(2);
		this.tabStatistic = this.goalPage.find('[data-react-toolbox="tab"]').nth(3);
		this.tabClosedObjective = this.goalPage.find('[data-react-toolbox="tab"]').nth(4);

		this.objectiveContainer = this.goalPage.find('[data-react-toolbox="tabs"] > [tabindex="0"]');
		this.hierarchyContainer = this.goalPage.find('[data-react-toolbox="tabs"] > [tabindex="1"]');
		this.timelineContainer = this.goalPage.find('[data-react-toolbox="tabs"] > [tabindex="2"]');
		this.statisticContainer = this.goalPage.find('[data-react-toolbox="tabs"] > [tabindex="3"]');
		this.closedObjectiveContainer = this.goalPage.find('[data-react-toolbox="tabs"] > [tabindex="4"]');

		this.progressBar = this.objectiveContainer.find('.progress-bar');
		this.prevQuarterButton = this.objectiveContainer.find('.icon--IconLeft').parent();
		this.nextQuarterButton = this.objectiveContainer.find('.icon--IconRight').parent();
		this.objectiveFilter = this.objectiveContainer.find('#objective-filter');
		this.selectorOptions = this.objectiveContainer.find('.objective-selector__option');

		this.hierarchyChart = this.hierarchyContainer.find('.objective-node');
		this.companyGoal = this.hierarchyContainer.find('[data-react-toolbox="tab"]').nth(0);
		this.unlinkGoal = this.hierarchyContainer.find('[data-react-toolbox="tab"]').nth(1);

		this.companyGoalContainer = this.hierarchyContainer.find('[data-react-toolbox="tabs"] > [tabindex="0"]');
		this.unlinkGoalContainer = this.hierarchyContainer.find('[data-react-toolbox="tabs"] > [tabindex="1"]');
		this.quarterFilter = this.hierarchyContainer.find('[data-react-toolbox="dropdown"]');
		this.quarter1 = this.quarterFilter.find('li').nth(0);
		this.quarter2 = this.quarterFilter.find('li').nth(1);
		this.quarter3 = this.quarterFilter.find('li').nth(2);
		this.quarter4 = this.quarterFilter.find('li').nth(3);

		this.timelineTitle = this.timelineContainer.find('.tab-timeline__title');
		this.dropdownTimelineContainer = this.timelineContainer.find('.tab-timeline__dropdown-container').nth(0);
		this.dropdownTimeline = this.dropdownTimelineContainer.find('[data-react-toolbox="dropdown"]');
		this.timelineQuarter1 = this.dropdownTimeline.find('li').nth(0);
		this.timelineQuarter2 = this.dropdownTimeline.find('li').nth(1);
		this.timelineQuarter3 = this.dropdownTimeline.find('li').nth(2);
		this.timelineQuarter4 = this.dropdownTimeline.find('li').nth(3);

		this.lineChart = this.statisticContainer.find('#lineChart');

		this.createGoalBtn = this.goalPage.find('[data-react-toolbox="tabs"] + [data-react-toolbox=button]');
		this.dialogForm = Selector('.dialog-form');
		this.closeDialogBtn = Selector('.dialog-form + span');

		this.ObjectiveInput = this.dialogForm.find('input[name=name]').nth(0);
		this.DescriptionInput = this.dialogForm.find('textarea[name=description]');
		this.ObjectiveQuater = this.dialogForm.find('div.objective-create__quarter');
		this.ObjectiveRemind = this.dialogForm.find('input[name="remind"]');
		this.selectRemind = this.ObjectiveRemind.parent(1).find('ul li').nth(0);

		this.ObjectiveLevel = Selector('input[name="level"]');
		this.selectObjectiveLevel = this.ObjectiveLevel.parent(1).find('ul li').nth(0);
		this.protip = this.dialogForm.find('div.protip__content');
		this.closedObjectiveContent = this.goalPage.find('.goal-page__list-objective');

		this.OKRs = this.dialogForm.find('div.objective-create__key-result-container');
		this.KRname = this.OKRs.find('input[name="name"]');
		this.KRmin = this.OKRs.find('input[name="minValue"]');
		this.KRMax = this.OKRs.find('input[name="maxValue"]');
		this.KRUnit = Selector('button[data-value="%"]');

		this.CreateButton = Selector('button[name="submit"]');
		this.objective_name = Selector('.objective__name').nth(0);
		this.button = this.objectiveContainer.find('button[data-react-toolbox="button"]');
		this.menu = this.objectiveContainer.find('data-react-toolbox="menu"');
	
		this.iconmenu = this.goalPage.find('[data-react-toolbox="button"]').nth(0);
		this.menu = this.goalPage.find('[data-react-toolbox="menu"]');
		this.deletebtn = this.menu.find('ul li').nth(2);
		this.confirmForm = Selector('[data-react-toolbox="dialog"]');
		this.confirmOK = this.confirmForm.find('button').nth(1);

	}
}