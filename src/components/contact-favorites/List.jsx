import React from "react";
import { Card } from "components";

export const List = ({ favoriteContactsList }) => {
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
              <Card className=" card--wide card--bordered">
                <li>First name: {firstName} </li>
                <li>Last: {lastName}</li>
                <li>Date of birth: {dateOfBirth}</li>
                <li>Contact type: {contactType}</li>
                <li>Contact: {contact}</li>
              </Card>
            )}
          </div>
        );
      }
    );
  };

  return (
    <div>
      <ul>
        {filterFavoriteContacts.length > 0 ? (
          constructList()
        ) : (
          <p>no favorite contacts</p>
        )}
      </ul>
    </div>
  );
};
