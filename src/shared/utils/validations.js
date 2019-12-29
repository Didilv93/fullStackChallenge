export const checkStringContainsLetter = (string, text) => {
  if (string !== null && text !== null) {
    return string
      .toString()
      .toUpperCase()
      .includes(text.toUpperCase());
  }
  return false;
};
