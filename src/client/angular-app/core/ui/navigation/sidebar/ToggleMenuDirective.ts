export class ToggleMenuDirective implements angular.IDirective {

	public scope: any = {
		section: "="
	};

	public templateUrl: string;
	
	public link: angular.IDirectiveLinkFn;


	constructor(public timeout: angular.ITimeoutService) {
		
		this.templateUrl = "/src/client/angular-app/core/ui/navigation/sidebar/views/toggleMenuDirective.html";
		
		ToggleMenuDirective.prototype.link = (scope: IToggleMenuScope, element: angular.IAugmentedJQuery) => {
	
			var controller = element.parent().controller(); 
			
			scope.isOpen = function() {
				return controller.navigationSectionIsOpen(scope.section);
			};

			scope.toggle = function() {
				controller.toggleSelectedSection(scope.section);
			};

			scope.$watch(
				() => {
					return controller.navigationSectionIsOpen(scope.section);
				},
				(open) => {
					var ul = element.find('ul');
					var targetHeight = open ? this.getTargetHeight(ul) : 0;
					this.timeout(
						() => {
							ul.css({ height: targetHeight + 'px' });
						}, 0, false
					);
				}
			);

			var parentNode = element[0].parentNode.parentNode.parentNode;
			if (parentNode.classList.contains('parent-list-item')) {
				var heading = parentNode.querySelector('h2');
				element[0].firstChild.setAttribute('aria-describedby', heading.id);
			}

		}
	}


	getTargetHeight(el: angular.IAugmentedJQuery) {
		var targetHeight;
		el.addClass('no-transition');
		el.css('height', '');
		targetHeight = el.prop('clientHeight');
		el.css('height', 0);
		el.removeClass('no-transition');
		return targetHeight;
	}

	public static Factory(): angular.IDirectiveFactory {
		var directive = ($timeout: angular.ITimeoutService): ToggleMenuDirective => {
			return new ToggleMenuDirective($timeout)
		}
		directive['$inject'] = ['$timeout'];
		return directive;
	}
}