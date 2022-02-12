#! /usr/bin/env ts-node-script

import path               from 'path';
import yargs              from 'yargs';

import { bundleToolArgs } from '../constants/args';
import compile            from '../utils/compileApp';

const { argv } = yargs.options(bundleToolArgs);

const config = argv.config as string;

const pathToConfig = path.resolve(process.cwd(), config);

compile(pathToConfig);
