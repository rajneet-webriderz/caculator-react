export function isValidInput(string, prevString = "") {
  const re = /^[0-9+\-()^*%/.]+$/;

  if (string === "" || re.test(string)) {
    return true;
  }

  return false;
}

export function isNumeric(string) {
  const re = /^\d+$/;

  if (string === "" || re.test(string)) {
    return true;
  }

  return false;
}
