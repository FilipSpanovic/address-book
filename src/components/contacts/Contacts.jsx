import React, { useEffect, useState } from "react";

import Form from "../compound/Form";

import { ContactsAPI } from "./ContactsAPI";

import { CONTACT_FORM_INITIAL_STATE } from "../../constants";
import { validateContactForm } from "../../helpers/validateContactForm";

const contactTypeOptions = [
  {
    id: 1,
    name: "mobilePhone",
    label: "Mobile phone",
  },
  { id: 2, name: "telephone", label: "Telephone" },
  { id: 3, name: "email", label: "Email" },
  { id: 4, name: "pager", label: "Pager" },
];

const Contacts = () => {
  const [contactsList, setContactsList] = useState([]);

  useEffect(() => {
    ContactsAPI.fetchContacts(setContactsList);
  }, []);

  const handleContactFormSubmit = (values) => {
    const contactFormErrors = validateContactForm(values);
    if (Object.keys(contactFormErrors).length > 0) {
      Object.keys(contactFormErrors).map((element) =>
        alert(contactFormErrors[element])
      );
      return;
    }
    ContactsAPI.createContact(values);
  };

  return (
    <>
      <Form
        onSubmit={handleContactFormSubmit}
        initialState={CONTACT_FORM_INITIAL_STATE}
      >
        <Form.Input name="firstName" />
        <Form.Input name="lastName" />
        <Form.Input name="dateOfBirth" type="date" />
        <Form.Select
          label="Select a contact type"
          options={contactTypeOptions}
          name="contactType"
        />
        <Form.Input name="contact" />
        <Form.SubmitButton text="Submit" />
      </Form>
    </>
  );
};

export default Contacts;
