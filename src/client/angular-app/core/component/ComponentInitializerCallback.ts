import {ComponentRegisterPromise} from "./ComponentRegisterPromise";
export interface ComponentInitializerCallback {
	():ComponentRegisterPromise;
}