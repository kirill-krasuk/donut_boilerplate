export const snakeToCamel = (str: string, formatter: 'upper' | 'lower' = 'lower') => str
    .replace(/([a-z])/, (_match, s1) => (formatter === 'upper' ? s1.toUpperCase() : s1))
    .replace(/_([a-z])/g, (_match, s1) => s1.toUpperCase())
    .replace(/_/g, '');
