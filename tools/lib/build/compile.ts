#! /usr/bin/env ts-node-script

import path               from 'path';
import yargs              from 'yargs';

import { bundleToolArgs } from '../../constants/args';
import { compileApp }     from '../compilation';

const { argv } = yargs.options(bundleToolArgs);

const config = argv.config as string;

const pathToConfig = path.resolve(process.cwd(), config);

compileApp(pathToConfig);
