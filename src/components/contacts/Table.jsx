import React from "react";
import { ContactsAPI } from "./ContactsAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faStar as farFaStar,
  faArrowAltCircleDown,
  faArrowAltCircleUp,
} from "@fortawesome/free-regular-svg-icons";

const Table = ({
  contactsList,
  listLimit,
  redirectToDetailsPage,
  handleFavoriteContact,
  searchTerms,
  handleSort,
  sortData,
}) => {
  const listCopy = { ...contactsList };

  const filteredContacts = Object.values(listCopy)
    .filter(({ firstName, lastName, dateOfBirth, contactType, contact }) => {
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
    })
    .sort((a, b) => {
      if (a[sortData.key] < b[sortData.key]) {
        return sortData.direction === "asc" ? -1 : 1;
      }
      if (a[sortData.key] > b[sortData.key]) {
        return sortData.direction === "asc" ? 1 : -1;
      }
      return 0;
    });

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
          <th id="firstName" onClick={handleSort}>
            Firstname
            {sortData.key === "firstName" && sortData.direction === "asc" && (
              <FontAwesomeIcon icon={faArrowAltCircleDown} />
            )}
            {sortData.key === "firstName" && sortData.direction === "desc" && (
              <FontAwesomeIcon icon={faArrowAltCircleUp} />
            )}
          </th>
          <th id="lastName" onClick={handleSort}>
            Lastname
            {sortData.key === "lastName" && sortData.direction === "asc" && (
              <FontAwesomeIcon icon={faArrowAltCircleDown} />
            )}
            {sortData.key === "lastName" && sortData.direction === "desc" && (
              <FontAwesomeIcon icon={faArrowAltCircleUp} />
            )}
          </th>
          <th id="dateOfBirth" onClick={handleSort}>
            DOB
            {sortData.key === "dateOfBirth" && sortData.direction === "asc" && (
              <FontAwesomeIcon icon={faArrowAltCircleDown} />
            )}
            {sortData.key === "dateOfBirth" &&
              sortData.direction === "desc" && (
                <FontAwesomeIcon icon={faArrowAltCircleUp} />
              )}
          </th>
          <th id="contactType" onClick={handleSort}>
            Contact type
            {sortData.key === "contactType" && sortData.direction === "asc" && (
              <FontAwesomeIcon icon={faArrowAltCircleDown} />
            )}
            {sortData.key === "contactType" &&
              sortData.direction === "desc" && (
                <FontAwesomeIcon icon={faArrowAltCircleUp} />
              )}
          </th>
          <th id="contact" onClick={handleSort}>
            Contact
            {sortData.key === "contact" && sortData.direction === "asc" && (
              <FontAwesomeIcon icon={faArrowAltCircleDown} />
            )}
            {sortData.key === "contact" && sortData.direction === "desc" && (
              <FontAwesomeIcon icon={faArrowAltCircleUp} />
            )}
          </th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{constructTableBody()}</tbody>
    </table>
  );
};

export default Table;
