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

      <table style={{ border: "1px solid black", marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>DOB</th>
            <th>Contact type</th>
            <th>Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(contactsList).map((contact, index) => {
            const contactFirebaseKey = Object.keys(contactsList)[index];

            return (
              <tr key={contact.id}>
                <th>{contact.firstName}</th>
                <th>{contact.lastName}</th>
                <th>{contact.dateOfBirth}</th>
                <th>{contact.contactType}</th>
                <th>{contact.contact}</th>
                <th>
                  <button
                    onClick={ContactsAPI.deleteContact(contactFirebaseKey)}
                  >
                    Delete
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Contacts;
