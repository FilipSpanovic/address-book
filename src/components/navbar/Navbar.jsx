import React from "react";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  let history = useHistory();

  const redirectToFavorites = () => {
    history.push("/contacts/favorites");
  };

  return (
    <div className="nav">
      <button className="nav__btn" onClick={redirectToFavorites}>
        ay
      </button>
    </div>
  );
};

export default Navbar;
