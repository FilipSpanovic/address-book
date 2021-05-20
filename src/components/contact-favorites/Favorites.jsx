import React, { useState, useEffect } from "react";
import { ContactsAPI } from "../contacts/ContactsAPI";

const Favorites = () => {
  const [favoriteContactsList, setFavoriteContactsList] = useState([]);

  useEffect(() => {
    ContactsAPI.fetchContacts(setFavoriteContactsList);
  }, []);

  const filterFavoriteContacts = favoriteContactsList.filter(
    (element) => element.favorite
  );

  const constructList = () => {
    return favoriteContactsList.map(
      ({
        firstName,
        lastName,
        dateOfBirth,
        contactType,
        contact,
        favorite,
        id,
      }) => {
        return (
          <div key={id}>
            {favorite && (
              <div
                className="card card--wide"
                style={{ borderBottom: "1px solid black" }}
              >
                <li>First name: {firstName} </li>
                <li>Last: {lastName}</li>
                <li>Date of birth: {dateOfBirth}</li>
                <li>Contact type: {contactType}</li>
                <li>Contact: {contact}</li>
              </div>
            )}
          </div>
        );
      }
    );
  };

  return (
    <div className="favorites-section">
      <ul>
        {filterFavoriteContacts.length > 0 ? (
          constructList()
        ) : (
          <p>no favorite contacts</p>
        )}
        <li></li>
      </ul>
    </div>
  );
};

export default Favorites;
