export const validateFormOnSubmit = (values, validator) => {
  const contactFormErrors = validator(values);

  const contactFormKeys = Object.keys(contactFormErrors);

  if (contactFormKeys.length > 0) {
    contactFormKeys.map((element) => alert(contactFormErrors[element]));
  }

  return contactFormKeys.length > 0;
};
