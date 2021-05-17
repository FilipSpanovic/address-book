import React from "react";
import { useParams } from "react-router-dom";
import ContactForm from "./ContactForm";

import { validateContactForm } from "../../helpers/validateContactForm";
import { ContactsAPI } from "./ContactsAPI";

const Update = ({ location }) => {
  let { id } = useParams();

  if (location.state === undefined || id !== location.state.contact.id) {
    return <p>page not found!</p>;
  }

  const { contact } = location.state;

  const INITIAL_STATE_CONTACT_UPDATE = {
    ...contact,
  };

  const handleContactUpdate = (values) => {
    const { contactKey } = location.state;
    const contactFormErrors = validateContactForm(values);
    if (Object.keys(contactFormErrors).length > 0) {
      Object.keys(contactFormErrors).map((element) =>
        alert(contactFormErrors[element])
      );
      return;
    }
    ContactsAPI.updateContact(contactKey, values);
  };

  return (
    <ContactForm
      initialState={INITIAL_STATE_CONTACT_UPDATE}
      onSubmit={handleContactUpdate}
    />
  );
};

export default Update;
