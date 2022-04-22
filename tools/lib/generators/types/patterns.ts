type PatternsWithArrays = {
	pattern: string[],
	replace: string[]
};

type PatternsWithStrings = {
	pattern: string,
	replace: string
};

type PatternsObject = PatternsWithArrays | PatternsWithStrings;

type Patterns = {
	[key: string]: PatternsObject
};

export type {
	Patterns, PatternsObject, PatternsWithArrays, PatternsWithStrings
};
