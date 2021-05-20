import React from "react";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  let history = useHistory();

  const redirect = (url) => {
    return () => history.push(url);
  };

  return (
    <div className="nav">
      <div className="action-btns">
      <button className="btn--small btn--green" onClick={redirect("/contacts")}>
        Contacts
      </button>
      <button
        className="btn--small btn--green"
        onClick={redirect("/contacts/favorites")}
      >
        Favorite contacts
      </button>
      </div>
    </div>
  );
};

export default Navbar;
