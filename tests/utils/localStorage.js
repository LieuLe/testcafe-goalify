
import { /* Selector, */ ClientFunction } from 'testcafe';

const localStorageSet = ClientFunction((key, val) => localStorage.setItem(key, val));
const localStorageGet = ClientFunction(key => localStorage.getItem(key));
const getToken = ClientFunction(() => window.auth.getToken());
const getToken2 = ClientFunction(() => window.auth.getToken2());

module.exports = {
	localStorageSet,
	localStorageGet,
	getToken,
	getToken2,
};
