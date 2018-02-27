const config = {
	mockCompanyAccount: {
		email: 'unittest@goalify.plus',
		password: 'goalify@test',
		firstName: 'unittest',
	},
	adminUser: {
		password: 'test',
		username: 'long@goalify.plus',
		defaultToken: '',
	},
	normalUser: {
		password: 'test',
		username: 'tung.tran@goalify.plus',
		defaultToken: '',
	},
	defaultCompanyId: '',
	baseUrl: 'http://localhost:3030/',
	basicAuthentication: '',
	//token is used for jwt authentication when calling graphql request.
	token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU4MTk1MzMzY2MwZjUzMDRkZWY2YmI3NyIsInVzZXJuYW1lIjoibmhhbi5tYWlAZ29hbGlmeS5wbHVzIiwiY29tcGFueUlkIjoiNTkxOTYyNTk2NmVjNjExMDBmOGMxNjdlIiwiY29tcGFueURvbWFpbiI6Ii8vZ29hbGlmeS5kZXYuZ29hbGlmeS5wbHVzLyIsImlhdCI6MTUwNTQ3MzcyOSwiZXhwIjoxNTA2NzY5NzI5fQ.TvFTBKRQA--WOUX8C0FYQrLkxDq83_LL07yvoqsyIxY',
	devServer: {
		appDomain: 'http://goalify.dev.goalify.plus',
		apiDomain: 'http://api.dev.goalify.plus',
		token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU4MTk1MzMzY2MwZjUzMDRkZWY2YmI3NSIsInVzZXJuYW1lIjoicXV5LnRyYW5AZ29hbGlmeS5wbHVzIiwiY29tcGFueUlkIjoiNTkxOTYyNTk2NmVjNjExMDBmOGMxNjdlIiwiY29tcGFueURvbWFpbiI6Ii8vZ29hbGlmeS5kZXYuZ29hbGlmeS5wbHVzLyIsImlhdCI6MTUwNTg3NTM3NiwiZXhwIjoxNTA3MTcxMzc2fQ.20DaaqGW575cvPNpOe-RsGdh6ONO1vQylVdZF8DMxa0'
	}
};

config.basicAuthentication = 'Z29hbGlmeTpnb2FsaWZ5ITIwMTc=';//Base64 of (<username>:<password>)

module.exports = config;
