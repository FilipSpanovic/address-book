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
