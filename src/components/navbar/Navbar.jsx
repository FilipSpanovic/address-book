import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../../store/slices/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  let history = useHistory();

  const redirect = (url) => {
    return () => history.push(url);
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("X-token")
  };

  return (
    <div className="nav">
      <div className="action-btns">
        <button
          className="btn--small btn--green"
          onClick={redirect("/contacts")}
        >
          Contacts
        </button>
        <button
          className="btn--small btn--green"
          onClick={redirect("/contacts/favorites")}
        >
          Favorite contacts
        </button>
        <button className="btn--small btn--red" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
