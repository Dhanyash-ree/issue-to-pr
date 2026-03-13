exports.validateName = (name) => {
  if (!name || name.length < 2) {
    return false;
  }
  return true;
};