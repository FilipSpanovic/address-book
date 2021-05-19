import React from "react";
import { useParams } from "react-router-dom";

import ContactForm from "../common/ContactForm";
import { ContactsAPI } from "../contacts/ContactsAPI";
import { showNotification } from "../../helpers/showNotification";
import { validateFormOnSubmit } from "../../helpers/validateFormOnSubmit";
import { validateContactForm } from "../../helpers/validateContactForm";

const Update = ({ location, history }) => {
  let { id } = useParams();

  const { contactInfo } = location.state;

  if (location.state === undefined || id !== contactInfo.id) {
    return <p>page not found!</p>;
  }

  const redirectToContactsPage = () => {
    history.push("/contacts");
  };

  const handleContactUpdate = (values) => {
    const { contactKey } = location.state;
    const isFormValid = validateFormOnSubmit(values, validateContactForm);
    if (!isFormValid) {
      ContactsAPI.updateContact(
        contactKey,
        values,
        showNotification("Contact updated!", redirectToContactsPage)
      );
    }
  };

  return (
    <div className="update-section">
      <div className="card card--wide">
        <ContactForm
          initialState={{ ...contactInfo }}
          onSubmit={handleContactUpdate}
        />
      </div>
    </div>
  );
};

export default Update;
