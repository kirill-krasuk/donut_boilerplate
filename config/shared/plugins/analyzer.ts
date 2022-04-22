import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const isBuildAnalyzer = JSON.parse(process.env.BUILD_ANALYZE as any);

export function analyzerPlugin(mode: 'development' | 'none' | 'production') {
	const _mode = mode === 'none' ? 'development' : mode;

	const options: any = {
		development: {
			openAnalyzer: false,
			logLevel    : 'silent',
			analyzerPort: process.env.BUNDLE_ANALYZER_PORT || 8181,
			analyzerHost: '127.0.0.1',
		},
		production: {
			analyzerMode  : 'static',
			openAnalyzer  : false,
			reportFilename: '../stats/prod-report.html',
		},
	};

	if (isBuildAnalyzer) {
		return new BundleAnalyzerPlugin(options[_mode]);
	}

	return null;
}
