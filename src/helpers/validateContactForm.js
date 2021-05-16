import { validateEmail } from "./validateEmail";

export const validateContactForm = ({
  firstName,
  lastName,
  dateOfBirth,
  contactType,
  contact,
}) => {
  let errors = {};

  if (!firstName) {
    errors.email = "Please enter your first name";
    return errors;
  }
  if (!lastName) {
    errors.email = "Please enter your last name ";
    return errors;
  }

  if (!dateOfBirth) {
    errors.email = "Please enter your birth date";
    return errors;
  }

  if (!contactType) {
    errors.contactType = "Please select a contact type";
    return errors;
  }

  if (contactType === "mobilePhone" && !contact) {
    errors.contact = "Please enter your mobile phone number";
    return errors;
  }

  if (contactType === "telephone" && !contact) {
    errors.contact = "Please enter your telephone number";
    return errors;
  }

  if (contactType === "email" && !contact) {
    errors.contact = "Please enter your email address";
    return errors;
  }

  if (contactType === "email" && contact) {
    const isEmailValid = validateEmail(contact);
    if (!isEmailValid) {
      errors.contact = "Please enter your email address in a valid format";
      return errors;
    }
  }

  if (contactType === "pager" && !contact) {
    errors.contact = "Please enter your pager number";
    return errors;
  }

  return errors;
};
