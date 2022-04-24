import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { paths }                from '../config/paths';
import { Mode }                 from '../enums/mode';

const isBuildAnalyzer = JSON.parse(process.env.BUILD_ANALYZE as any);

function analyzerPlugin(mode: Mode) {
	const _mode = mode === Mode.None
		? Mode.Development
		: mode;

	const options: any = {
		development: {
			openAnalyzer: false,
			logLevel    : 'silent',
			analyzerPort: process.env.BUNDLE_ANALYZER_PORT || 8181,
			analyzerHost: '127.0.0.1'
		},
		production: {
			analyzerMode  : 'static',
			openAnalyzer  : false,
			reportFilename: paths.prodBundleStats
		}
	};

	if (isBuildAnalyzer) {
		return new BundleAnalyzerPlugin(options[_mode]);
	}

	return null;
}

export { analyzerPlugin };
