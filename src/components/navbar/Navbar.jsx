import React from "react";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  let history = useHistory();

  const redirect = (url) => {
    return () => history.push(url);
  };

  return (
    <div className="nav">
      <button className="nav__btn" onClick={redirect("/contacts")}>
        Contacts
      </button>
      <button className="nav__btn" onClick={redirect("/contacts/favorites")}>
        Favorite contacts
      </button>
    </div>
  );
};

export default Navbar;
