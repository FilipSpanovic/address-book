import React from "react";
import { useParams } from "react-router-dom";

import ContactForm from "../common/ContactForm";
import { ContactsAPI } from "../contacts/ContactsAPI";
import { validateFormOnSubmit } from "../../helpers/validateFormOnSubmit";
import { validateContactForm } from "../../helpers/validateContactForm";

const Update = ({ location }) => {
  let { id } = useParams();

  if (location.state === undefined || id !== location.state.contact.id) {
    return <p>page not found!</p>;
  }

  const { contact } = location.state;

  const handleContactUpdate = (values) => {
    const { contactKey } = location.state;
    const isFormValid = validateFormOnSubmit(values, validateContactForm);
    if (!isFormValid) {
      ContactsAPI.updateContact(contactKey, values);
    }
  };

  return (
    <div className="update-section">
      <div className="card card--wide">
        <ContactForm
          initialState={{ ...contact }}
          onSubmit={handleContactUpdate}
        />
      </div>
    </div>
  );
};

export default Update;
