import { toast } from "react-toastify";

const showNotificationIfErrorExists = (errors, keys) => {
  if (keys.length > 0) {
    return keys.map((element) => toast.error(errors[element]));
  }
};

export const validateFormOnSubmit = (values, validator) => {
  const errors = validator(values);

  const keys = Object.keys(errors);

  showNotificationIfErrorExists(errors, keys);

  return keys.length > 0;
};

