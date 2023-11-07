import fs   from 'node:fs';
import path from 'node:path';

const JSONStats = (rawData: any) => JSON.parse(rawData.toString());

function getLoadableChunksOptions(locals: any) {
	const loadableStatsFileName = 'loadable-stats.json';

	if (locals.webpack) {
		const { devMiddleware }           = locals.webpack;
		const { outputFileSystem, stats } = devMiddleware;
		const jsonWebpackStats            = stats.toJson();
		const { outputPath }              = jsonWebpackStats;

		const rawData = outputFileSystem.readFileSync(path.join(outputPath, loadableStatsFileName));

		return {
			useFileSystem: outputFileSystem,
			loadableStats: JSONStats(rawData)
		};
	}

	const rawData = fs.readFileSync(path.resolve('dist', loadableStatsFileName));

	return {
		useFileSystem: fs,
		loadableStats: JSONStats(rawData)
	};
}

export { getLoadableChunksOptions };
