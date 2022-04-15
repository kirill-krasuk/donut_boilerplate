export type PatternsWithArrays = {
    pattern: string[],
    replace: string[]
}

type PatternsWithStrings = {
    pattern: string,
    replace: string
}

export type PatternsObject = PatternsWithArrays | PatternsWithStrings;

export type Patterns = {
    [key: string]: PatternsObject
}
