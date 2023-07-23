export const toLowerCase = (s) => {
  return s.toLowerCase();
}

export const toUpperCase = (s) => {
  return s.toUpperCase();
}

export const createSamples = (s) => {
  const lowerCase= toLowerCase(s);
  const upperCase = toUpperCase(s);
  return lowerCase+upperCase;
}