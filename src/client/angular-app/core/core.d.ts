declare enum NavigationSectionType {HEADING = 1, TOGGLE =2}
declare interface INavigationSection {
	name: string;
	type: NavigationSectionType;
	children?: INavigationSection[];
	items: INavigationSectionItem[];
}

declare interface INavigationSectionItem {
	name: string;
	id: string;
	url: string;
}
declare interface INavigationSectionService {
	getSections: () =>  INavigationSection[];
	insertSectionBefore: (sectionId:string, newSection:INavigationSection) => INavigationSectionService;
	insertSectionAfter: (sectionId:string, newSection:INavigationSection) => INavigationSectionService;
	removeSection: (sectionId:string) => INavigationSectionService;
	insertItemBefore: (itemId:string) => void;
	insertItemAfter: (itemId:string) => void;
	removeItem: (itemId:string) => void;
}

declare interface INavigationMenuService {
	openedSection: INavigationSection;
	getSectionService: () => INavigationSectionService;	
	isSectionSelected: (section: INavigationSection) => boolean;
	selectSection: (section: INavigationSection) => void;
	toggleSelectedSection: (section:INavigationSection) => void;
}