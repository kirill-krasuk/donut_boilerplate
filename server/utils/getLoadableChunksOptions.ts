import fs   from 'fs';
import path from 'path';

export function getLoadableChunksOptions(locals: any) {
    const loadableStatsFileName = 'loadable-stats.json';

    if (locals.webpack) {
        const { devMiddleware }    = locals.webpack;
        const { outputFileSystem } = devMiddleware;
        const jsonWebpackStats     = devMiddleware.stats.toJson();
        const { outputPath }       = jsonWebpackStats;

        const rawData      = outputFileSystem.readFileSync(path.join(outputPath, loadableStatsFileName));
        const statFileJSON = JSON.parse(rawData.toString());

        return {
            useFileSystem: outputFileSystem,
            loadableStats: statFileJSON
        };
    }

    const rawData      = fs.readFileSync(path.resolve('dist', loadableStatsFileName));
    const statFileJSON = JSON.parse(rawData.toString());

    return {
        useFileSystem: fs,
        loadableStats: statFileJSON
    };
}
