export const LOGIN_FORM_INITIAL_STATE = {
  email: "",
  password: "",
};

export const CONTACT_FORM_INITIAL_STATE = {
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  contactType: "mobilePhone",
  contact: "",
  favorite: false,
};

export const SEARCH_INITIAL_STATE = {
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  contactType: "mobilePhone",
  contact: "",
};

export const SEARCH_TERMS_INITIAL_STATE = {
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  contactType: "",
  contact: "",
};

export const contactTypeOptions = [
  {
    id: 1,
    name: "mobilePhone",
    label: "Mobile phone",
  },
  { id: 2, name: "telephone", label: "Telephone" },
  { id: 3, name: "email", label: "Email" },
  { id: 4, name: "pager", label: "Pager" },
];

export const sortDirections = {
  ASC: "asc",
  DESC: "desc",
  DEFAULT: "default",
};

export const CONTACT_TABLE_HEADERS = [
  { label: "First name", id: "firstName" },
  { label: "Last name", id: "lastName" },
  { label: "DOB", id: "dob" },
  { label: "Contact type", id: "contactType" },
  { label: "Contact", id: "contact" },
];
