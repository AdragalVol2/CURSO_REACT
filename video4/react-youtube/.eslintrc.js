module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	extends: [
		'standard',
		'standard-react',
		'plugin:react/jsx-runtime',
		'plugin:prettier/recommended',
		'eslint-config-prettier',
	],
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ['react'],
	rules: {},
};
