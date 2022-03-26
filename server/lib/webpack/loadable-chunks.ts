import fs   from 'fs';
import path from 'path';

function JSONStats(rawData: any) {
    return JSON.parse(rawData.toString());
}

export function getLoadableChunksOptions(locals: any) {
    const loadableStatsFileName = 'loadable-stats.json';

    if (locals.webpack) {
        const { devMiddleware }    = locals.webpack;
        const { outputFileSystem } = devMiddleware;
        const jsonWebpackStats     = devMiddleware.stats.toJson();
        const { outputPath }       = jsonWebpackStats;

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
