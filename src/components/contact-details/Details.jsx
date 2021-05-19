import React from "react";
import { useParams } from "react-router-dom";
import { showNotification } from "../../helpers/showNotification";
import { ContactsAPI } from "../contacts/ContactsAPI";
import Table from "./Table";

const Details = ({ location, history }) => {
  let { id } = useParams();

  const { state } = location;
  const { contactInfo, contactKey } = state;
  const { firstName, lastName, dateOfBirth, contactType, contact } =
    contactInfo;

  if (state === undefined || id !== contactInfo.id) {
    return <p>page not found!</p>;
  }

  const redirectToContactUpdatePage = () => {
    console.log(contactInfo, "info");
    history.push({
      pathname: `/contacts/update/${contactInfo.id}`,
      state: { contactInfo, contactKey },
    });
  };

  const redirectToDetailsPage = () => {
    history.push("/contacts");
  };

  return (
    <div className="details-section">
      <div className="card">
        <div className="action-btns">
          <button onClick={redirectToDetailsPage}>Go back</button>
          <button
            onClick={ContactsAPI.deleteContact(
              contactKey,
              showNotification("Contact deleted", redirectToDetailsPage)
            )}
            className="btn--red"
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
