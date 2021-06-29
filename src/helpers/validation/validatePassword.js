export const validatePassword = (password) => {
  //8 characters, 1 uppercase, 1 special character, 1 number
  const regexp = /^(.{0,7}|[^0-9]*|[^A-Z]*|[a-zA-Z0-9]*)$/;
  const passwordValidated = regexp.test(password);

  return passwordValidated;
};
