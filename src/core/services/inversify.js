// @flow
import 'reflect-metadata';
import { Container }       from 'inversify';

import config              from 'core/config';
import { TYPES }           from './types';
import { HTTP }            from './HTTP';
import { ConfigManager }   from './ConfigManager';
import { Query }           from './Query';
import { Headers }         from './Headers';
import { IteratorCreator } from './IteratorCreator';

const container = new Container();

container.bind(TYPES.config).toConstantValue(config);

container.bind(TYPES.HTTP).to(HTTP);
container.bind(TYPES.ConfigManager).to(ConfigManager);
container.bind(TYPES.Query).to(Query);
container.bind(TYPES.Headers).to(Headers);
container.bind(TYPES.IteratorCreator).to(IteratorCreator);

export { container };
