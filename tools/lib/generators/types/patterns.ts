type PatternsWithArrays = {
	readonly pattern: string[],
	readonly replace: string[]
};

type PatternsWithStrings = {
	readonly pattern: string,
	readonly replace: string
};

type PatternsObject = Readonly<PatternsWithArrays | PatternsWithStrings>;

type Patterns = Record<string, PatternsObject>;

export type { Patterns, PatternsObject, PatternsWithArrays, PatternsWithStrings };
