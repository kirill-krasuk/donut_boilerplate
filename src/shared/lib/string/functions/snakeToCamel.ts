import { StringFormatter } from '../enums/formatter';

const _snakeToCamel = (str: string, formatter: StringFormatter) => str
	.replace(/([a-z])/, (_match, s1) => (formatter === StringFormatter.Upper ? s1.toUpperCase() : s1)
	)
	.replace(/_([a-z])/g, (_match, s1) => s1.toUpperCase())
	.replaceAll('_', '');

function snakeToCamel(formatter: StringFormatter, str: string): string;
function snakeToCamel(formatter: StringFormatter): (str: string) => string;
function snakeToCamel(formatter: StringFormatter = StringFormatter.Lower, str?: string) {
	return !str ? (str: string) => _snakeToCamel(str, formatter) : _snakeToCamel(str, formatter);
}

export { snakeToCamel };
