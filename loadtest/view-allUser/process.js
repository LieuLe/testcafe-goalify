/* © 2017 Goalify
 * @author Quy Tran
 */
const requestHelper = require('./../helper/request-helper');
const testConfig = require('./../helper/config');

const { addDefaultRequestHeader } = requestHelper;

const getNewsQuery = (requestParams, context, ee, done) => {
	// console.log('# getNewsQuery');
	// const dateTime = new Date().getTime();
	// const { normalUser: adminUser } = testConfig;
	const query = `
				query UsersQuery(
					$count: Int!
			) {
					viewer {
					...Users_viewer
					id
				}
			}
			fragment Users_viewer on Viewer {
					users(sort:_ID_ASC,limit:$count){
						username
						_id
			}
			}
	`;
	const queryVars = {
		count: 100
	};
	requestParams.headers.Authorization = `JWT ${testConfig.devServer.token}`;
	requestParams.headers = addDefaultRequestHeader(requestParams.headers);
	requestParams.body = JSON.stringify({ query, variables: queryVars });
	return done();
};

const afterResponse = (requestParams, response, context, ee, next) => {
	// console.log('afterResponse');
	// console.log(response.body);
	return next(); // MUST be called for the scenario to continue
};

// this const is =  called in a lo =>op
const createNewVar = (ctx, events, done) => {
	ctx.vars.newVar = ctx.vars.$loopCount;
	return done();
};

const rewriteUrl = (req, ctx, events, done) => {
	req.url = '/';
	return done();
};

module.exports = {
	createNewVar: createNewVar,
	rewriteUrl: rewriteUrl,
	// beforeRequest: beforeRequest,
	afterResponse: afterResponse,
	getNewsQuery: getNewsQuery,
};
