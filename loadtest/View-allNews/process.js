const requestHelper = require('./../helper/request-helper');
const testConfig = require('./../helper/config');

const { addDefaultRequestHeader } = requestHelper;

const getNewsQuery = (requestParams, context, ee, done) => {
	const query = `
			query NewsPageQuery(
				  $count: Int!
				  $cursor: ConnectionCursor
			) {
				  viewer {
				    ...NewsPage_viewer
				    id
			  }
		}
			fragment NewsPage_viewer on Viewer {
				  postConnection(first: $count, after: $cursor, sort: MODIFIEDDATE_DESC) {
				    pageInfo {
				      hasNextPage
				      endCursor
			    }
			    edges {
				      node {
				        ...NewsItem_post
				        id
				        __typename
			      }
			      cursor
		    }
		  }
		}
			fragment NewsItem_post on Post {
				  _id
				  id
				  title
				  content
				  bannerUrl
				  modifiedDate
				  author {
				    _id
				    fullname
				    avatar
				    id
			  }
			  likerIds
			  commentTotal
		}
	`;
	const queryVars = {
		count: 10,
		cursor: ''
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
	afterResponse: afterResponse,
	getNewsQuery: getNewsQuery,
};
