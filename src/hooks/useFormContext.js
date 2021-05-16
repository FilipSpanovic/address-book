import React from "react";

import { FormContext } from "../components/compound/Form";

const useFormContext = () => {
  const context = React.useContext(FormContext);

  if (!context) {
    throw new Error(
      `Form components cannot be rendered outside the Form component`
    );
  }

  return context;
};

export default useFormContext;
