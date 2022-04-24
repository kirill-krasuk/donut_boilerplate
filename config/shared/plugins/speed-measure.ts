import SpeedMeasurePlugin from 'speed-measure-webpack-plugin';

import type webpack       from 'webpack';

const useSpeedMeasureClient = JSON.parse(process.env.USE_SPEED_MEASURE_CLIENT || 'false');
const useSpeedMeasureServer = JSON.parse(process.env.USE_SPEED_MEASURE_SERVER || 'false');

const smp = new SpeedMeasurePlugin();

function withSpeedMeasurePlugin(config: webpack.Configuration, isClient = true) {
	const useSpeedMeasure = isClient
		? useSpeedMeasureClient
		: useSpeedMeasureServer;

	return useSpeedMeasure
		? smp.wrap(config)
		: config;
}

export { withSpeedMeasurePlugin };
