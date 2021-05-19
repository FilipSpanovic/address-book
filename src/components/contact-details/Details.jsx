import React from "react";
import { useParams } from "react-router-dom";
import { ContactsAPI } from "../contacts/ContactsAPI";

const Details = ({ location, history }) => {
  let { id } = useParams();

  if (location.state === undefined || id !== location.state.contact.id) {
    return <p>page not found!</p>;
  }

  const { contact, contactKey } = location.state;

  const redirectToContactUpdatePage = () => {
    history.push({
      pathname: `/contacts/update/${contact.id}`,
      state: { contact, contactKey },
    });
  };

  return (
    <div className="details-section">
      <div className="card">
        <div className="action-btns">
          <button>Go back</button>
          <button
            onClick={ContactsAPI.deleteContact(contactKey)}
            className="btn--red"
          >
            Delete
          </button>
        </div>

        <table className="contact-table-details">
          <tr>
            <td>First name:</td>
            <th>{contact.firstName}</th>
          </tr>
          <tr>
            <td>Last name:</td>
            <th>{contact.lastName}</th>
          </tr>
          <tr>
            <td>Date of birth</td>
            <th> {contact.dateOfBirth}</th>
          </tr>
          <tr>
            <td>Contact type:</td>
            <th>{contact.contactType}</th>
          </tr>
          <tr>
            <td>Contact:</td>
            <th>{contact.contact}</th>
          </tr>
        </table>
        <button className="btn" onClick={redirectToContactUpdatePage}>
          Update
        </button>
      </div>
    </div>
  );
};

export default Details;
