
const transform = (a: string | number) => (a + "").toUpperCase().replace(/[^A-Z0-9]/g, '')

// compare strings by alpha numeric chars only, case insensitive,
export const compareAlphaNum = (a: string | number, b: string | number): boolean => transform(a) === transform(b)