import { validatePassword, validateEmail } from "./";

export const validateLoginForm = ({ email, password }) => {
  let errors = {};

  if (!email) {
    errors.email = "Please enter your email address";
    return errors;
  }
  if (!password) {
    errors.password = "Please enter your password";
    return errors;
  }

  if (password.length !== 8) {
    errors.password = "Your password should contain 8 characters";
    return errors;
  }

  const validateEmailFormat = validateEmail(email);
  if (!validateEmailFormat) {
    errors.email = "Please enter your email address in a valid format";
    return errors;
  }

  const invalidPassword = validatePassword(password);

  if (invalidPassword) {
    errors.password =
      "Your password should contain 8 characters including 1 uppercase letter, 1 special character and 1 number";
    return errors;
  }

  return errors;
};
