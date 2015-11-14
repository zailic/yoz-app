export class LinkMenuDirective implements angular.IDirective {
	public scope: any = {
		section: "="
	};
	public templateUrl: string;
	public link: angular.IDirectiveLinkFn;

	constructor() {
		this.templateUrl = "/src/client/angular-app/core/ui/navigation/sidebar/views/linkMenuDirective.html";
		LinkMenuDirective.prototype.link = (scope: ILinkMenuScope, element: angular.IAugmentedJQuery) => {
			var controller = element.parent().controller();

			scope.isSelected = () => {
				return controller.isSectionSelected(scope.section);
			};

			scope.focusSection = () => {
				controller.autoFocusContent = true;
			};
		}
	}


	public static Factory(): angular.IDirectiveFactory {
		var directive = (): LinkMenuDirective => {
			return new LinkMenuDirective()
		}
		return directive;
	}
}