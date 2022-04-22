import { StringFormatter } from '../enums/formatter';
import { kebabToSnake }    from './kebabToSnake';
import { snakeToCamel }    from './snakeToCamel';

function kebabToCamel(formatter: StringFormatter, str: string): string;
function kebabToCamel(formatter: StringFormatter): (str: string) => string;
function kebabToCamel(formatter: StringFormatter = StringFormatter.Lower, str?: string) {
	return !str
		? (str: string) => snakeToCamel(formatter, kebabToSnake(str))
		: snakeToCamel(formatter, kebabToSnake(str));
}

export { kebabToCamel };
