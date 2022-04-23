import fs           from 'node:fs';
import path         from 'node:path';
import mkdir        from 'make-dir';

import type webpack from 'webpack';

type AssetsManifestPluginOptions = {
	filename: string
};

const defaultOptions = {
	filename: 'assets-manifest.json'
};

export class AssetsManifestPlugin {
	private options: AssetsManifestPluginOptions;
	private compiler: webpack.Compiler | null = null;

	constructor(options?: AssetsManifestPluginOptions) {
		this.options = {
			...defaultOptions,
			...options
		};
	}

	private emitAsset(compilation: webpack.Compilation) {
		const stats = compilation.getStats().toJson({
			all               : false,
			assets            : true,
			cachedAssets      : true,
			chunks            : false,
			chunkGroups       : true,
			chunkGroupChildren: true,
			hash              : true,
			ids               : true,
			outputPath        : true,
			publicPath        : true
		});

		// @ts-expect-error
		stats.chunks = [ ...compilation.chunks ].map(chunk => ({
			id   : chunk.id,
			files: [ ...chunk.files ]
		}));

		const result = JSON.stringify(stats, null, 2);

		this.writeAssets(result);

		return {
			source() {
				return result;
			},
			size() {
				return result.length;
			}
		};
	}

	private writeAssets(manifest: string) {
		const outputFolder = this.compiler!.options.output.path!;

		const outputFile = path.resolve(outputFolder, this.options.filename);

		if (!fs.existsSync(outputFolder)) {
			mkdir.sync(outputFolder);
		}

		fs.writeFileSync(outputFile, manifest);
	}

	apply(compiler: webpack.Compiler) {
		this.compiler = compiler;

		compiler.hooks.make.tap(AssetsManifestPlugin.name, compilation =>
			compilation.hooks.processAssets.tap(
				{
					name : AssetsManifestPlugin.name,
					stage: compiler.webpack.Compilation.PROCESS_ASSETS_STAGE_ADDITIONS
				},
				() => {
					const asset = this.emitAsset(compilation);

					if (asset) {
						// @ts-expect-error
						compilation.emitAsset(this.options.filename, asset);
					}
				}
			)
		);
	}
}
