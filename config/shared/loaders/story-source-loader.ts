import type webpack from 'webpack';

function storySourceLoader(): webpack.RuleSetRule {
	return {
		test   : /\.(stories|story)\.[jt]sx?$/,
		loader : require.resolve('@storybook/source-loader'),
		exclude: [ /node_modules/ ],
		enforce: 'pre'
	};
}

export { storySourceLoader };
