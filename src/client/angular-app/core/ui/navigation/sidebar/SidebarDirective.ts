export class SidebarDirective implements angular.IDirective {

	public templateUrl: string;
	public scope: ISidebarScope;
	public link: angular.IDirectiveLinkFn;

	constructor(public sectionService: INavigationSectionService) {
		// this.scope.section = "=";
		this.templateUrl = "/src/client/angular-app/core/ui/navigation/sidebar/views/sidebarDirective.html";
		SidebarDirective.prototype.link = (scope: ISidebarScope, element: angular.IAugmentedJQuery) => {
			var controller = element.parent().controller(); 
			scope.sections = this.sectionService.getSections();
		}
	}

	public static Factory(): angular.IDirectiveFactory {
		var directive = (sectionService: INavigationSectionService): SidebarDirective => {
			return new SidebarDirective(sectionService);
		}
		directive['$inject'] = ["App.Core.UI.Navigation.SectionService"];
		return directive;
	}
}