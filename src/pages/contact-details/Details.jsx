import React from "react";
import { ContactsAPI } from "api/ContactsAPI";
import { DetailsTable, Card, Button } from "components";
import { showNotificationAndRedirect } from "helpers";
import { withDynamicRoute } from "hoc/withDynamicRoute/withDynamicRoute";

 const Details = ({
  redirectToContactsPage,
  redirectToContactUpdatePage,
  location,
}) => {
  
  const { firstName, lastName, dateOfBirth, contactType, contact, key } =
    location.state.contactInfo;

  return (
    <div className="details-section">
      <Card>
        <div className="action-btns">
          <Button
            className="btn btn--red"
            text="Delete"
            onClick={ContactsAPI.deleteContact(
              key,
              showNotificationAndRedirect(
                "Contact deleted",
                redirectToContactsPage
              )
            )}
          />
        </div>
        <DetailsTable
          firstName={firstName}
          lastName={lastName}
          dateOfBirth={dateOfBirth}
          contactType={contactType}
          contact={contact}
        />
        <Button text="Update" onClick={redirectToContactUpdatePage} />
      </Card>
    </div>
  );
};

export const DetailsWithDynamicRoute = withDynamicRoute(Details)
