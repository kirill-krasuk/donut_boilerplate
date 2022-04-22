import SpeedMeasurePlugin from 'speed-measure-webpack-plugin';

import type webpack       from 'webpack';

const useSpeedMeasureClient = JSON.parse(process.env.USE_SPEED_MEASURE_CLIENT || 'false');
const useSpeedMeasureServer = JSON.parse(process.env.USE_SPEED_MEASURE_SERVER || 'false');

const smp = new SpeedMeasurePlugin();

export function withSpeedMeasurePlugin(config: webpack.Configuration, isClient = true) {
	if (isClient) {
		return useSpeedMeasureClient ? smp.wrap(config) : config;
	}

	return useSpeedMeasureServer ? smp.wrap(config) : config;
}
