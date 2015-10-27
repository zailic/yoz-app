import {ComponentInitializerCallback} from "./ComponentInitializerCallback";
import {ComponentRegisterPromise} from "./ComponentRegisterPromise";
export class ComponentService {
	public static registerComponent(componentInitializer:ComponentInitializerCallback):ComponentRegisterPromise {
		return componentInitializer();
	}
}