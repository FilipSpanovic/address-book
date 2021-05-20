import React from "react";
import { ContactsAPI } from "./ContactsAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleDown,
  faStar,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as farFaStar } from "@fortawesome/free-regular-svg-icons";

const Table = ({
  contactsList,
  listLimit,
  redirectToDetailsPage,
  handleFavoriteContact,
  searchTerms,
  handleSort,
  sortInfo,
}) => {
  const contactListCopy = { ...contactsList };

  const filteredContacts = Object.values(contactListCopy)
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
      if (a[sortInfo.key] < b[sortInfo.key]) {
        return sortInfo.direction === "asc" ? -1 : 1;
      }
      if (a[sortInfo.key] > b[sortInfo.key]) {
        return sortInfo.direction === "asc" ? 1 : -1;
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
          <th
            className="contact-table__sortable-header"
            id="firstName"
            onClick={handleSort}
          >
            Firstname
            {sortInfo.direction !== "default" &&
              sortInfo.key === "firstName" && (
                <FontAwesomeIcon
                  className={`${
                    sortInfo.direction === "desc" && "fa-rotate-180"
                  }`}
                  icon={faArrowCircleDown}
                />
              )}
          </th>
          <th
            className="contact-table__sortable-header"
            id="lastName"
            onClick={handleSort}
          >
            Lastname
            {sortInfo.direction !== "default" &&
              sortInfo.key === "lastName" && (
                <FontAwesomeIcon
                  className={`${
                    sortInfo.direction === "desc" && "fa-rotate-180"
                  }`}
                  icon={faArrowCircleDown}
                />
              )}
          </th>
          <th
            className="contact-table__sortable-header"
            id="dateOfBirth"
            onClick={handleSort}
          >
            DOB
            {sortInfo.direction !== "default" &&
              sortInfo.key === "dateOfBirth" && (
                <FontAwesomeIcon
                  className={`${
                    sortInfo.direction === "desc" && "fa-rotate-180"
                  }`}
                  icon={faArrowCircleDown}
                />
              )}
          </th>
          <th
            className="contact-table__sortable-header"
            id="contactType"
            onClick={handleSort}
          >
            Contact type
            {sortInfo.direction !== "default" &&
              sortInfo.key === "contactType" && (
                <FontAwesomeIcon
                  className={`${
                    sortInfo.direction === "desc" && "fa-rotate-180"
                  }`}
                  icon={faArrowCircleDown}
                />
              )}
          </th>
          <th
            className="contact-table__sortable-header"
            id="contact"
            onClick={handleSort}
          >
            Contact
            {sortInfo.direction !== "default" && sortInfo.key === "contact" && (
              <FontAwesomeIcon
                className={`${
                  sortInfo.direction === "desc" && "fa-rotate-180"
                }`}
                icon={faArrowCircleDown}
              />
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
