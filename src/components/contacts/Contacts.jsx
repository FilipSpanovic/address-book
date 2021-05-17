import React, { useEffect, useState } from "react";

import { ContactsAPI } from "./ContactsAPI";

import { CONTACT_FORM_INITIAL_STATE } from "../../constants";
import { validateContactForm } from "../../helpers/validateContactForm";
import ContactForm from "./ContactForm";

const Contacts = ({ history }) => {
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

  const redirectToDetailsPage = (contact, contactKey) => (e) => {
    history.push({
      pathname: `/contacts/${contact.id}`,
      state: { contact, contactKey },
    });
  };

  return (
    <>
      <ContactForm
        onSubmit={handleContactFormSubmit}
        initialState={CONTACT_FORM_INITIAL_STATE}
      />

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
            const contactKey = Object.keys(contactsList)[index];
            return (
              <tr
                onClick={redirectToDetailsPage(contact, contactKey)}
                key={contact.id}
              >
                <th>{contact.firstName}</th>
                <th>{contact.lastName}</th>
                <th>{contact.dateOfBirth}</th>
                <th>{contact.contactType}</th>
                <th>{contact.contact}</th>
                <th>
                  <button onClick={ContactsAPI.deleteContact(contactKey)}>
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
