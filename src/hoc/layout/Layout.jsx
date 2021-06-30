import React from "react";
import { Navbar } from "components";

import { ToastContainer } from "react-toastify";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <ToastContainer />
    </>
  );
};

export default Layout;
