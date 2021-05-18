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

  const handleFavoriteContact = (contact, contactKey) => (e) => {
    const contactCopy = { ...contact };
    contactCopy.favorite = !contactCopy.favorite;
    ContactsAPI.updateContact(contactKey, contactCopy);
  };

  return (
    <div className="contacts-section">
      <div className="row">
        <div className="col-1-of-3">
          <div className="card">
            <ContactForm
              onSubmit={handleContactFormSubmit}
              initialState={CONTACT_FORM_INITIAL_STATE}
            />
          </div>
        </div>

        <div className="col-2-of-3">
          <div className="card">
            <table className="contact-table">
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
                    <tr key={contact.id}>
                      <th onClick={redirectToDetailsPage(contact, contactKey)}>
                        {contact.firstName}
                      </th>
                      <th onClick={redirectToDetailsPage(contact, contactKey)}>
                        {contact.lastName}
                      </th>
                      <th onClick={redirectToDetailsPage(contact, contactKey)}>
                        {contact.dateOfBirth}
                      </th>
                      <th onClick={redirectToDetailsPage(contact, contactKey)}>
                        {contact.contactType}
                      </th>
                      <th onClick={redirectToDetailsPage(contact, contactKey)}>
                        {contact.contact}
                      </th>
                      <th>
                        <button
                          onClick={ContactsAPI.deleteContact(contactKey)}
                          className="btn btn--red"
                        >
                          Delete
                        </button>
                        <button
                          onClick={handleFavoriteContact(contact, contactKey)}
                          className="btn btn--green"
                        >
                          Favorite
                        </button>
                        {contact.favorite ? "true" : "false"}
                      </th>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
