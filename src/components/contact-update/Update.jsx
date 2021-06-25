import React from "react";
import { useParams } from "react-router-dom";

import ContactForm from "../common/ContactForm";
import { ContactsAPI } from "../contacts/ContactsAPI";
import { showNotificationAndRedirect } from "helpers/showNotificationAndRedirect";
import { validateFormOnSubmit } from "helpers/validateFormOnSubmit";
import { validateContactForm } from "helpers/validateContactForm";

const Update = ({ location, history }) => {
  let { id } = useParams();

  const { state } = location;

  if (state === undefined || id !== state.contactInfo.id) {
    return <p>page not found!</p>;
  }

  const { contactInfo } = state;

  const redirectToDetailsPage = () => {
    history.push({
      pathname: `/contacts/${id}`,
      state: { contactInfo },
    });
  };

  const redirectToContactsPage = () => {
    history.push("/contacts");
  };

  const handleContactUpdate = (values) => {
    const {
      contactInfo: { key },
    } = state;

    const isFormValid = validateFormOnSubmit(values, validateContactForm);

    if (!isFormValid) {
      ContactsAPI.updateContact(
        key,
        values,
        showNotificationAndRedirect("Contact updated!", redirectToContactsPage)
      );
    }
  };

  return (
    <div className="update-section">
      <div className="card card--wide">
        <button onClick={redirectToDetailsPage} className="btn">
          Details
        </button>
        <ContactForm
          initialState={{ ...contactInfo }}
          onSubmit={handleContactUpdate}
        />
      </div>
    </div>
  );
};

export default Update;
