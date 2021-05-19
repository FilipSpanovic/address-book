import { toast } from "react-toastify";

export const validateFormOnSubmit = (values, validator) => {
  const contactFormErrors = validator(values);

  const contactFormKeys = Object.keys(contactFormErrors);

  if (contactFormKeys.length > 0) {
    contactFormKeys.map((element) => toast.error(contactFormErrors[element]));
  }

  return contactFormKeys.length > 0;
};
