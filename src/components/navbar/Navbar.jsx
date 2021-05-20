import React from "react";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  let history = useHistory();

  const redirect = (url) => {
    return () => history.push(url);
  };

  return (
    <div className="nav">
      <button className=" action-btns" onClick={redirect("/contacts")}>
        Contacts
      </button>
      <button
        className="action-btns "
        onClick={redirect("/contacts/favorites")}
      >
        Favorite contacts
      </button>
    </div>
  );
};

export default Navbar;
