module.exports = {
	globals: {
		'ts-jest': {
			tsConfig: 'tsconfig.json'
		}
	},
	moduleFileExtensions: [
		'ts',
		'js'
	],
	transform: {
		'^.+\\.(ts|tsx)$': './node_modules/ts-jest'
	},
	testMatch: [
		'**/tests/**/*.test.(ts|js)'
	],
	testEnvironment: 'node'
};
