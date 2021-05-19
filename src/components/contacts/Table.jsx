import React from "react";
import { ContactsAPI } from "./ContactsAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faStar as farFaStar,
} from "@fortawesome/free-regular-svg-icons";

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
        <td onClick={redirectToDetailsPage(contactInfo, contactKey)}>
          {firstName}
        </td>
        <td onClick={redirectToDetailsPage(contactInfo, contactKey)}>
          {lastName}
        </td>
        <td onClick={redirectToDetailsPage(contactInfo, contactKey)}>
          {dateOfBirth}
        </td>
        <td onClick={redirectToDetailsPage(contactInfo, contactKey)}>
          {contactType}
        </td>
        <td onClick={redirectToDetailsPage(contactInfo, contactKey)}>
          {contact}
        </td>
        <td>
          <FontAwesomeIcon
            onClick={ContactsAPI.deleteContact(contactKey)}
            icon={faTrashAlt}
          />

          {favorite ? (
            <FontAwesomeIcon
              onClick={handleFavoriteContact(contactInfo, contactKey)}
              icon={faStar}
            />
          ) : (
            <FontAwesomeIcon
              onClick={handleFavoriteContact(contactInfo, contactKey)}
              icon={farFaStar}
            />
          )}
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
