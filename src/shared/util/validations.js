export const checkStringContainsLetter = (string, text) => {
  if (string !== null && text !== null) {
    return string.toUpperCase().includes(text.toUpperCase());
  }
  return false;
};
