/* eslint-disable import/no-import-module-exports */
import path                     from 'node:path';

import { paths }                from '../shared/config/paths';
import { storySourceLoader }    from '../shared/loaders/story-source-loader';
import { cssLoader }            from '../shared/loaders/css-loader';
import { cssModuleLoader }      from '../shared/loaders/css-module-loader';
import { jsLoader }             from '../shared/loaders/js-loader';
import { sassLoader }           from '../shared/loaders/sass-loader';
import { sassModuleLoader }     from '../shared/loaders/sass-module-loader';
import { tsconfigPathsPlugin }  from '../shared/plugins/tsconfig-paths';

import type { StorybookConfig } from '@storybook/core-common';
import type webpack             from 'webpack';

const styleProps = {
	enablePerf      : false,
	forceStyleLoader: true
};

export default {
	core: {
		builder: 'webpack5',
		options: {
			lazyCompilation: true,
			fsCache        : true
		}
	},
	stories: [ paths.stories ],
	addons : [
		'@storybook/addon-knobs',
		'@storybook/addon-storysource',
		'@storybook/addon-a11y',
		'@geometricpanda/storybook-addon-badges',

		/**
		 * provides addons:
		 *
		 * Docs
		 * Controls
		 * Actions
		 * Viewport
		 * Backgrounds
		 * Toolbars & globals
		 * Measure & outline
		 *
		 */
		'@storybook/addon-essentials'
	],
	framework : '@storybook/react',
	typescript: {
		check                       : false,
		checkOptions                : {},
		reactDocgen                 : 'react-docgen-typescript',
		reactDocgenTypescriptOptions: {
			shouldExtractLiteralValuesFromEnum: true,
			propFilter                        : (prop: any) =>
				(prop.parent
					? !/node_modules/.test(prop.parent.fileName)
					: true)
		}
	},
	staticDirs  : [ path.resolve('public') ],
	webpackFinal: async (config: webpack.Configuration) => {
		/**
		 * find and remove css rule to overwrite
		 * custom and they do not conflict
		 */
		const cssRuleIndex = config!.module!.rules?.findIndex(
			(rule: any) => rule.test.toString() === /\.css$/.toString()
		);

		if (cssRuleIndex) {
			config!.module!.rules?.splice(cssRuleIndex, 1);
		}

		// eslint-disable-next-line no-param-reassign
		config.context = paths.context;
		config!.module!.rules!.push(
			jsLoader({
				enableThread: false,
				enableCache : false
			}),

			cssLoader(styleProps).client,

			cssModuleLoader(styleProps).client,

			sassLoader(styleProps).client,

			sassModuleLoader({
				...styleProps,
				extraOptions: {
					include: process.cwd()
				}
			}).client,

			/**
			 * Run `source-loader` on story files to show their source code
			 * automatically in `DocsPage` or the `Source` doc block.
			 */
			storySourceLoader()
		);

		// TODO: remove in SB7
		// eslint-disable-next-line no-param-reassign
		config!.resolve!.fallback! = {
			...config!.resolve!.fallback!,
			assert: require.resolve('assert')
		};

		config!.resolve!.extensions!.push('.ts', '.tsx');
		// eslint-disable-next-line no-param-reassign
		config!.resolve!.plugins = [ tsconfigPathsPlugin() ];

		return config;
	}
} as StorybookConfig;
