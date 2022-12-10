import {atom} from "recoil";


export const currentTabAtom = atom({
	key: 'projects',
	default: 'home',
});