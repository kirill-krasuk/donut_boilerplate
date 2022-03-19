import webpack from 'webpack';

export type IsomorphicLoader = { client: webpack.RuleSetRule, server: webpack.RuleSetRule };
