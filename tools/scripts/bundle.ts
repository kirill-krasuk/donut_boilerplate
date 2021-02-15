#! /usr/bin/env ts-node-script

import path               from 'path';
import yargs              from 'yargs';

import { bundleToolArgs } from '../constants/args';
import compile            from '../utils/compileApp';

const { argv } = yargs.options(bundleToolArgs);

const pathToConfig = path.resolve(process.cwd(), argv.config as string);

compile(pathToConfig);
