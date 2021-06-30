import React, { useState, useEffect } from "react";
import { ContactsAPI } from "api/ContactsAPI";
import { List } from "components";

export const Favorites = () => {
  const [favoriteContactsList, setFavoriteContactsList] = useState([]);

  useEffect(() => {
    ContactsAPI.fetchContacts(setFavoriteContactsList);
  }, []);
  
  return (
    <div className="favorites-section">
      <List favoriteContactsList={favoriteContactsList} />
    </div>
  );
};

