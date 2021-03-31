/* eslint-env jest */
import iOSVersion, { isIOS } from '../index.js';

describe('iOS detection', () => {
	beforeEach(() => {
		delete navigator.platform;
		delete navigator.appVersion;
	});

	test('iOSversion', () => {
		expect(() => iOSVersion()).not.toThrow();
		Object.defineProperty(navigator, 'platform', {
			configurable: true,
			value: 'iPhone',
		});
		Object.defineProperty(navigator, 'appVersion', {
			configurable: true,
			value: 'OS 1_2_3',
		});
		expect(iOSVersion()).toEqual([1, 2, 3]);
	});

	test('isIOS', () => {
		expect(() => isIOS()).not.toThrow();
		expect(isIOS()).toBe(false);

		Object.defineProperty(navigator, 'platform', {
			configurable: true,
			value: 'iPhone',
		});
		Object.defineProperty(navigator, 'appVersion', {
			configurable: true,
			value: 'OS 1_2',
		});

		expect(isIOS()).toBe(true);
	});
});
