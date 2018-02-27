const requestHelper = require('./../helper/request-helper');
const testConfig = require('./../helper/config');

const { addDefaultRequestHeader } = requestHelper;

const printHello = (req, ctx, events, done) => {
	console.log('# hello from processor');
	return done();
};

function beforeRequest(requestParams, context, ee, done) {
	// console.log('# hello beforeRequest');
	const dateTime = new Date().getTime();
	const { normalUser: adminUser } = testConfig;
	const query = `
			mutation {
				createUserLogin(input: {
						clientMutationId: "${dateTime}",
						password: "${adminUser.password}",
						username: "${adminUser.username}"
				}) {
					token
				}
			}
		`;
	// const queryVars = {};
	// requestParams.headers.Authorization = `JWT ${testConfig.devServer.token}`;
	requestParams.headers = addDefaultRequestHeader(requestParams.headers);
	requestParams.body = JSON.stringify({query});
	return done();
}

const afterResponse = (requestParams, response, context, ee, next) => {
	// console.log('afterResponse');
	console.log(response.body);
	return next(); // MUST be called for the scenario to continue
};

// this const is =  called in a lo =>op
const createNewVar = (ctx, events, done) => {
	ctx.vars.newVar = ctx.vars.$loopCount;
	console.log(`createNewVar: ${ctx.vars.$loopCount}`);
	return done();
};

const rewriteUrl = (req, ctx, events, done) => {
	req.url = '/';
	return done();
};

module.exports = {
	printHello: printHello,
	createNewVar: createNewVar,
	rewriteUrl: rewriteUrl,
	beforeRequest: beforeRequest,
	afterResponse: afterResponse,
};
