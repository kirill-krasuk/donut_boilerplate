import HtmlHardDiskPlugin              from 'html-webpack-harddisk-plugin';
import HtmlWebpackPlugin               from 'html-webpack-plugin';
import HtmlPugPlugin                   from 'html-webpack-pug-plugin';
import { HtmlWebpackSkipAssetsPlugin } from 'html-webpack-skip-assets-plugin';

import { paths }                       from '../config/paths';
import { fileExtensions }              from '../constants/files';

import type webpack                    from 'webpack';

function htmlPlugins(): webpack.WebpackPluginInstance[] {
	return [
		new HtmlWebpackSkipAssetsPlugin(), // for excludeAssets
		new HtmlWebpackPlugin({
			template         : paths.client.template,
			filename         : paths.client.view,
			alwaysWriteToDisk: true,

			/**
			 * force disable minification for
			 * correctly building pug file
			 * because indentation matters
			 */
			minify       : false,
			excludeAssets: [ fileExtensions.jsOrCss ]
		}),
		new HtmlHardDiskPlugin(), // for alwaysWriteToDisk
		new HtmlPugPlugin({
			adjustIndent: true
		})
	];
}

export { htmlPlugins };
