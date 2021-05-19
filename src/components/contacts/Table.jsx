import React from "react";
import { ContactsAPI } from "./ContactsAPI";

const Table = ({
  contactsList,
  listLimit,
  redirectToDetailsPage,
  handleFavoriteContact,
  searchTerms,
}) => {
  const filteredContacts = Object.values(contactsList).filter(
    ({ firstName, lastName, dateOfBirth, contactType, contact }) => {
      return (
        firstName
          .toLowerCase()
          .startsWith(searchTerms["firstName"].toLowerCase()) &&
        lastName
          .toLowerCase()
          .startsWith(searchTerms["lastName"].toLowerCase()) &&
        dateOfBirth
          .toLowerCase()
          .startsWith(searchTerms["dateOfBirth"].toLowerCase()) &&
        contactType
          .toLowerCase()
          .startsWith(searchTerms["contactType"].toLowerCase()) &&
        contact.toLowerCase().startsWith(searchTerms["contact"].toLowerCase())
      );
    }
  );

  const constructTableBody = () => {
    return filteredContacts.map((contact, index) => {
      const contactKey = Object.keys(contactsList)[index];
      const { id } = contact;
      if (index < listLimit) {
        return <tr key={id}>{constructTableCells(contact, contactKey)}</tr>;
      }
    });
  };

  const constructTableCells = (contactInfo, contactKey) => {
    const { firstName, lastName, dateOfBirth, contactType, contact, favorite } =
      contactInfo;

    return (
      <>
        <td onClick={redirectToDetailsPage(contact, contactKey)}>
          {firstName}
        </td>
        <td onClick={redirectToDetailsPage(contact, contactKey)}>{lastName}</td>
        <td onClick={redirectToDetailsPage(contact, contactKey)}>
          {dateOfBirth}
        </td>
        <td onClick={redirectToDetailsPage(contact, contactKey)}>
          {contactType}
        </td>
        <td onClick={redirectToDetailsPage(contact, contactKey)}>{contact}</td>
        <td>
          <button
            onClick={ContactsAPI.deleteContact(contactKey)}
            className="btn btn--red"
          >
            Delete
          </button>
          <button
            onClick={handleFavoriteContact(contactInfo, contactKey)}
            className="btn btn--green"
          >
            Favorite
          </button>
          {favorite ? "true" : "false"}
        </td>
      </>
    );
  };

  return (
    <table className="contact-table">
      <thead>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>DOB</th>
          <th>Contact type</th>
          <th>Contact</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{constructTableBody()}</tbody>
    </table>
  );
};

export default Table;
