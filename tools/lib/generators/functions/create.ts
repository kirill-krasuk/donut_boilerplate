/* eslint-disable sonarjs/no-nested-template-literals */
import fs            from 'node:fs';
import path          from 'node:path';
import ejs           from 'ejs';
import chalk         from 'chalk';

import { ROOT_PATH } from '../constants/rootPath';

function create(source: string, destination: string, data: Record<string, any>) {
	ejs.renderFile(path.resolve(__dirname, '..', source), data, (error, result) => {
		if (error) {
			console.error(`Generate file error in ${ destination }:`, error);
			return;
		}

		const filePath = ROOT_PATH + destination;
		const dirname  = path.dirname(filePath);

		if (!fs.existsSync(dirname)) {
			fs.mkdirSync(dirname, { recursive: true });
		} else if (fs.existsSync(filePath)) {
			console.info(chalk`[{blue.bold EXISTS}] ${ destination }`);
			return;
		}

		try {
			fs.writeFileSync(filePath, result, 'utf8');

			console.info(chalk`[{green.bold CREATE}] ${ destination }`);
		} catch {
			throw new Error(`write generated template to file failure in ${ destination }`);
		}
	});
}

export { create };
