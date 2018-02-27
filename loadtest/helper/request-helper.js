const testConfig = require('./config');

const addDefaultRequestHeader = (headers) => {
	let newHeaders = {};
	newHeaders.Origin = 'http://localhost:3040';

	newHeaders = Object.assign(newHeaders, headers);

	if (!(headers && headers.Authorization)) {
		newHeaders.Authorization = 'Basic ' + testConfig.basicAuthentication;
	}
	newHeaders['Content-Type'] = 'application/json';
	return newHeaders;
};

module.exports = {
	addDefaultRequestHeader,
};
