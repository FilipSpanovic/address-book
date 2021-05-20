import React from "react";
import { useParams } from "react-router-dom";

import ContactForm from "../common/ContactForm";
import { ContactsAPI } from "../contacts/ContactsAPI";
import { showNotificationAndRedirect } from "../../helpers/showNotificationAndRedirect";
import { validateFormOnSubmit } from "../../helpers/validateFormOnSubmit";
import { validateContactForm } from "../../helpers/validateContactForm";

const Update = ({ location, history }) => {
  let { id } = useParams();

  if (
    location.state === undefined ||
    location.contactInfo === undefined ||
    id !== location.statecontactInfo.id
  ) {
    return <p>page not found!</p>;
  }

  const { contactInfo, contactKey } = location.state;

  const redirectToDetailsPage = () => {
    history.push({
      pathname: `/contacts/${id}`,
      state: { contactInfo, contactKey },
    });
  };

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