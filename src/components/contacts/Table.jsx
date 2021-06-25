import React from "react";
import { ContactsAPI } from "./ContactsAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as farFaStar } from "@fortawesome/free-regular-svg-icons";
import ColumnSortIcons from "../common/ColumnSortIcons";
import { toast } from "react-toastify";
import { CONTACT_TABLE_HEADERS } from "constants/index";

export const Table = ({
  contactsList,
  listLimit,
  redirectToDetailsPage,
  handleFavoriteContact,
  searchTerms,
  handleSort,
  sortInfo,
}) => {
  const filterContacts = contactsList.filter(
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

  const showNotification = () => {
    toast.info("Contact deleted");
  };

  const constructTableCells = (contactInfo) => {
    const {
      firstName,
      lastName,
      dateOfBirth,
      contactType,
      contact,
      favorite,
      key,
    } = contactInfo;

    return (
      <>
        <td onClick={redirectToDetailsPage(contactInfo)}>{firstName}</td>
        <td onClick={redirectToDetailsPage(contactInfo)}>{lastName}</td>
        <td onClick={redirectToDetailsPage(contactInfo)}>{dateOfBirth}</td>
        <td onClick={redirectToDetailsPage(contactInfo)}>{contactType}</td>
        <td onClick={redirectToDetailsPage(contactInfo)}>{contact}</td>

        <td>
          <FontAwesomeIcon
            onClick={ContactsAPI.deleteContact(key, showNotification)}
            icon={faTrashAlt}
          />

          <FontAwesomeIcon
            onClick={handleFavoriteContact(contactInfo)}
            icon={(favorite && faStar) || farFaStar}
          />
        </td>
      </>
    );
  };

  const constructTableBody = () => {
    return filterContacts.map((contact, index) => {
      const { id } = contact;
      if (index < listLimit) {
        return <tr key={id}>{constructTableCells(contact)}</tr>;
      }
      return <tr key={id}></tr>;
    });
  };

  const constructTableHeaders = () => {
    return CONTACT_TABLE_HEADERS.map(({ id, label }) => {
      return (
        <th
          className="contact-table__sortable-header"
          id={id}
          onClick={handleSort}
          key={id}
        >
          {label}
          <ColumnSortIcons columnKey={id} sortInfo={sortInfo} />
        </th>
      );
    });
  };

  return (
    <table className="contact-table">
      <thead>
        <tr>
          {constructTableHeaders()}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{constructTableBody()}</tbody>
    </table>
  );
};
