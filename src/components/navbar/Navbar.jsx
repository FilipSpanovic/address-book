import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button } from "components";
import { logout } from "store/slices/authSlice";

export const Navbar = () => {
  const dispatch = useDispatch();

  let history = useHistory();

  const redirect = (url) => {
    return () => history.push(url);
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("X-token");
  };

  return (
    <div className="nav">
      <div className="action-btns">
        <Button
          className="btn--small btn--green"
          text="Contacts"
          onClick={redirect("/contacts")}
        />
        <Button
          className="btn--small btn--green"
          text="Favorite contacts"
          onClick={redirect("/contacts/favorites")}
        />
        <Button
          className="btn--small btn--red"
          text="Logout"
          onClick={handleLogout}
        />
      </div>
    </div>
  );
};

