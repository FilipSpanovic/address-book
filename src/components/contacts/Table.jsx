import React from "react";
import { ContactsAPI } from "./ContactsAPI";

const Table = ({
  contactsList,
  listLimit,
  redirectToDetailsPage,
  handleFavoriteContact,
  searchTerms,
}) => {
  const filteredContacts = Object.values(contactsList).filter((element) => {
    return (
      element.firstName.startsWith(searchTerms["firstName"]) &&
      element.lastName.startsWith(searchTerms["lastName"]) &&
      element.dateOfBirth.startsWith(searchTerms["dateOfBirth"]) &&
      element.contactType.startsWith(searchTerms["contactType"]) &&
      element.contactType.startsWith(searchTerms["contactType"])
    );
  });

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
      <tbody>
        {filteredContacts.map((contact, index) => {
          const contactKey = Object.keys(contactsList)[index];
          if (index < listLimit) {
            return (
              <tr key={contact.id}>
                <th onClick={redirectToDetailsPage(contact, contactKey)}>
                  {contact.firstName}
                </th>
                <th onClick={redirectToDetailsPage(contact, contactKey)}>
                  {contact.lastName}
                </th>
                <th onClick={redirectToDetailsPage(contact, contactKey)}>
                  {contact.dateOfBirth}
                </th>
                <th onClick={redirectToDetailsPage(contact, contactKey)}>
                  {contact.contactType}
                </th>
                <th onClick={redirectToDetailsPage(contact, contactKey)}>
                  {contact.contact}
                </th>
                <th>
                  <button
                    onClick={ContactsAPI.deleteContact(contactKey)}
                    className="btn btn--red"
                  >
                    Delete
                  </button>
                  <button
                    onClick={handleFavoriteContact(contact, contactKey)}
                    className="btn btn--green"
                  >
                    Favorite
                  </button>
                  {contact.favorite ? "true" : "false"}
                </th>
              </tr>
            );
          }
        })}
      </tbody>
    </table>
  );
};

export default Table;
