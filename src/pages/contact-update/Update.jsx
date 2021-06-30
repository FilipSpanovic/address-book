import React from "react";
import { ContactsAPI } from "api/ContactsAPI";
import { ContactForm, Card, Button } from "components";
import {
  showNotificationAndRedirect,
  validateFormOnSubmit,
  validateContactForm,
} from "helpers";
import { withDynamicRoute } from "hoc";

const Update = ({
  redirectToDetailsPage,
  redirectToContactsPage,
  location,
}) => {
  const { contactInfo } = location.state;

  const handleContactUpdate = (values) => {
    validateFormOnSubmit(values, validateContactForm, updateContactApi(values));
  };

  const updateContactApi = (values) => {
    const { key } = contactInfo;
    return () =>
      ContactsAPI.updateContact(
        key,
        values,
        showNotificationAndRedirect("Contact updated!", redirectToContactsPage)
      );
  };

  return (
    <div className="update-section">
      <Card className="card--wide">
        <Button
          className="btn"
          text="Details"
          onClick={redirectToDetailsPage}
        />
        <ContactForm
          initialState={{ ...contactInfo }}
          onSubmit={handleContactUpdate}
        />
      </Card>
    </div>
  );
};

export const UpdateWithDynamicRoute = withDynamicRoute(Update);
