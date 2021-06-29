import React from "react";
import PropTypes from "prop-types";
import { Body, Header } from ".";

export const Table = ({
  contactsList,
  listLimit,
  handleFavoriteContact,
  searchTerms,
  handleSort,
  sortInfo,
  showNotification,
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

  return (
    <table className="contact-table">
      <Body
        filteredContacts={filterContacts}
        handleFavoriteContact={handleFavoriteContact}
        showNotification={showNotification("Contact deleted!")}
        listLimit={listLimit}
      />
      <Header handleSort={handleSort} sortInfo={sortInfo} />
    </table>
  );
};

Table.propTypes = {
  contactsList: PropTypes.array.isRequired,
  listLimit: PropTypes.number.isRequired,
  handleFavoriteContact: PropTypes.func.isRequired,
  handleSort: PropTypes.func.isRequired,
  sortInfo: PropTypes.shape({
    key: PropTypes.string.isRequired,
    direction: PropTypes.string.isRequired,
  }),
  searchTerms: PropTypes.shape({
    contact: PropTypes.string.isRequired,
    contactType: PropTypes.string.isRequired,
    dateOfBirth: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }),
};
