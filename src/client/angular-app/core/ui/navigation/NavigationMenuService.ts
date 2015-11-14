export class NavigationMenuService  implements INavigationMenuService {
	public static $inject = ["App.Core.UI.Navigation.SectionService"];
	public openedSection:INavigationSection = null;
	public currentSection:INavigationSection = null;
	public currentSectionItem: INavigationSectionItem = null;
	 
	constructor(public sectionService:INavigationSectionService) {}
	
	public getSectionService() {
		return this.sectionService;
	}
	
	public isSectionSelected(section: INavigationSection) {
		return this.openedSection == section;
	}
	
	public selectSection(section: INavigationSection) {
		this.openedSection = section;
	}
	
	public toggleSelectedSection (section:INavigationSection) {
		this.openedSection = (this.openedSection === section ? null : section);	
	}
	
	public selectSectionItem (section:INavigationSection, item:INavigationSectionItem) {
      this.currentSection = section;
      this.currentSectionItem = item;
    }
} 