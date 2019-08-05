// @flow
import 'reflect-metadata';
import { Container }     from 'inversify';

import config            from 'core/config';
import { store }         from 'core/utils/store/index';
import { TYPES }         from './types';
import { HTTP }          from './HTTP';
import { ConfigManager } from './ConfigManager';

const container = new Container();

container.bind(TYPES.config).toConstantValue(config);

container.bind(TYPES.HTTP).to(HTTP);
container.bind(TYPES.ConfigManager).to(ConfigManager);

container.bind(TYPES.Headers).toConstantValue(new Headers());
container.bind(TYPES.QueryParams).toConstantValue(new URLSearchParams());
container.bind(TYPES.Store).toConstantValue(store);

export { container };
