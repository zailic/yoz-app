
export enum NavigationSectionType {HEADING = 1, TOGGLE = 2, LINK = 3}

interface INavigationSection {
	name: string;
	id: string;
	type: NavigationSectionType;
	children?: INavigationSection[];
	items: INavigationSectionItem[];
}

interface INavigationSectionItem {
	name: string;
	id: string;
	url: string;
}

export class SectionService {
	
	public static $inject = ["$log", "lodash"];
	protected sections:INavigationSection[]; 
	
	constructor(public log:IEnhancedLogger, public lodash:_.LoDashStatic) {
		let l = this.log.getInstance("App.Core.UI.Navigation.SectionService");
		l.debug("instanceOf()");
		this.sections = [
			{
				name: 'SECTION I',
				id: "section-i",
				type: NavigationSectionType.TOGGLE,
				items: [{
						name: 'ITEM I',
						id: "item-i",
						url: ""
					},{
						name: 'ITEM II',
						id: "item-ii",
						url: ""
					},{
						name: 'ITEM III',
						id: "item-iii",
						url: ""
					}
				]		
			}, {
				name: 'SECTION II',
				id: "section-ii",
				type: NavigationSectionType.TOGGLE,
				items: []
			}
		];
	}
	
	public getSections() {
		return this.sections;
	}
	
	public insertSectionBefore(sectionId:string, newSection:INavigationSection) {
		var successfulyInserted:boolean = false;
		let lvl1Idx:number = this.lodash.findIndex(
			this.sections, 
			(section:INavigationSection) => section.id == sectionId
		);
		if(lvl1Idx == -1) {
			this.lodash.forEach(
				this.sections,
				(section:INavigationSection) => {
					if(section.children) {
						let lvl2Idx:number = this.lodash.findIndex(
							section.children, 
							(subSection:INavigationSection) => section.id == sectionId
						);
						if(lvl2Idx !== -1) {
							section.children.splice(lvl2Idx, 0, newSection);	
							successfulyInserted = true;
							return false; // exit the iteratee fn
						}
					}
					return true;
				} 
			)	
		} else {
			this.sections.splice(lvl1Idx, 0, newSection);
			successfulyInserted = true;	
		}
		if(!successfulyInserted) {
			// todo throw exception
		}
		return this;
	}	
	
	public insertSectionAfter(sectionId:string, newSection:INavigationSection) {
		var successfulyInserted:boolean = false;
		let lvl1Idx:number = this.lodash.findIndex(
			this.sections, 
			(section:INavigationSection) => section.id == sectionId
		);
		if(lvl1Idx == -1) {
			this.lodash.forEach(
				this.sections,
				(section:INavigationSection) => {
					if(section.children) {
						let lvl2Idx:number = this.lodash.findIndex(
							section.children, 
							(subSection:INavigationSection) => section.id == sectionId
						);
						if(lvl2Idx !== -1) {
							section.children.splice(lvl2Idx + 1, 0, newSection);	
							successfulyInserted = true;
							return false; // exit the iteratee fn
						}
					}
					return true;
				} 
			)	
		} else {
			this.sections.splice(lvl1Idx + 1, 0, newSection);
			successfulyInserted = true;	
		}
		if(!successfulyInserted) {
			// todo throw exception
		}	
		return this;	
	}
	
	public removeSection(sectionId:string) {
		let lvl1Idx:number = this.lodash.findIndex(
			this.sections, 
			(section:INavigationSection) => section.id == sectionId
		);
		if(lvl1Idx == -1) {
			this.lodash.forEach(
				this.sections,
				(section:INavigationSection) => {
					if(section.children) {
						let lvl2Idx:number = this.lodash.findIndex(
							section.children, 
							(subSection:INavigationSection) => section.id == sectionId
						);
						if(lvl2Idx !== -1) {
							section.children.splice(lvl2Idx, 0);	
						}
					}
				} 
			)	
		} else {
			this.sections.splice(lvl1Idx, 1);
		}
		return this;	
	}
	
	public insertItemBefore(itemId:string) {
		
	}	
	
	public insertItemAfter(itemId:string) {
		
	}
	
	public removeItem(itemId:string) {
		
	}
}