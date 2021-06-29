import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as farFaStar } from "@fortawesome/free-regular-svg-icons";
import { ContactsAPI } from "api/ContactsAPI";
import { useHistory } from "react-router";

export const Body = ({
  filteredContacts,
  handleFavoriteContact,
  showNotification,
  listLimit,
}) => {
  const history = useHistory();

  const redirectToDetailsPage = (contactInfo) => (e) => {
    history.push({
      pathname: `/contacts/${contactInfo.id}`,
      state: { contactInfo },
    });
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
    return filteredContacts.map((contact, index) => {
      const { id } = contact;
      if (index < listLimit) {
        return <tr key={id}>{constructTableCells(contact)}</tr>;
      }
      return <tr key={id}></tr>;
    });
  };

  return <tbody>{constructTableBody()}</tbody>;
};

Body.propTypes = {
  filteredContacts: PropTypes.array.isRequired,
  handleFavoriteContact: PropTypes.func.isRequired,
  showNotification: PropTypes.func.isRequired,
  listLimit: PropTypes.number.isRequired,
};
