/**
 * @returns {number[]} iOS version or null of not iOS
 */
export default function iOSVersion() {
	if (/iP(hone|od|ad)/.test(navigator.platform)) {
		// supports iOS 2.0 and later: <http://bit.ly/TJjs1V>
		let v = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
		//if the user is in "requested desktop" version won't match.
		return (
			v && [
				parseInt(v[1], 10),
				parseInt(v[2], 10),
				parseInt(v[3] || 0, 10),
			]
		);
	}

	return null;
}

export const isIOS = () => !!iOSVersion();
