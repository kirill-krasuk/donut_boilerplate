import { resolve }              from 'node:path';
import tsconfigPaths            from 'vite-tsconfig-paths';

import { paths }                from 'config/shared/config/paths';

import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
	stories: paths.stories,
	addons : [
		'@storybook/addon-links',
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
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-styling',
		{
			name   : '@storybook/addon-storysource',
			options: {
				rule: {
					test: [ /\.stories\.(js|jsx|mjs|ts|tsx|mdx)?$/ ]
				},
				loaderOptions: {
					prettierConfig: { printWidth: 80, singleQuote: false }
				}
			}
		}
	],
	staticDirs: [ resolve('public') ],
	typescript: {
		check                       : false,
		reactDocgen                 : 'react-docgen-typescript',
		reactDocgenTypescriptOptions: {
			shouldExtractLiteralValuesFromEnum: true,
			propFilter                        : (prop: any) =>
				(prop.parent
					? !/node_modules/.test(prop.parent.fileName)
					: true)
		}
	},
	framework: {
		name   : '@storybook/react-vite',
		options: {}
	},
	docs: {
		autodocs   : true,
		defaultName: 'Documentation'
	},
	viteFinal: async config => ({
		...config,
		plugins: [ ...config.plugins!, tsconfigPaths() ]
	})
};
export default config;
