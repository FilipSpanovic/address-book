import React from "react";
import { useParams } from "react-router-dom";
import { showNotificationAndRedirect } from "../../helpers/showNotificationAndRedirect";
import { ContactsAPI } from "../contacts/ContactsAPI";
import Table from "./Table";

const Details = ({ location, history }) => {
  let { id } = useParams();
  console.log(location.state);

  if (location.state === undefined || id !== location.state.contactInfo.id) {
    return <p>page not found!</p>;
  }

  const { state } = location;
  const { contactInfo } = state;
  const { firstName, lastName, dateOfBirth, contactType, contact, key } =
    contactInfo;

  const redirectToContactUpdatePage = () => {
    history.push({
      pathname: `/contacts/update/${contactInfo.id}`,
      state: { contactInfo },
    });
  };

  const redirectToDetailsPage = () => {
    history.push("/contacts");
  };

  return (
    <div className="details-section">
      <div className="card">
        <div className="action-btns">
          <button
            onClick={ContactsAPI.deleteContact(
              key,
              showNotificationAndRedirect(
                "Contact deleted",
                redirectToDetailsPage
              )
            )}
            className="btn btn--red"
          >
            Delete
          </button>
        </div>

        <Table
          firstName={firstName}
          lastName={lastName}
          dateOfBirth={dateOfBirth}
          contactType={contactType}
          contact={contact}
        />
        <button className="btn" onClick={redirectToContactUpdatePage}>
          Update
        </button>
      </div>
    </div>
  );
};

export default Details;
