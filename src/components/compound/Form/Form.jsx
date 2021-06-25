import React from "react";
import { useState } from "react";

import { Input, Select, SubmitButton } from "./";

const FormContext = React.createContext();

const Form = ({ initialState, children, className, onSubmit }) => {
  const [data, setData] = useState(initialState);

  const handleInputChange = ({ target: { name, value } }) => {
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data, setData);
  };

  const value = { data, handleInputChange, handleSubmit };

  return (
    <form className={className}>
      <FormContext.Provider value={value}>{children}</FormContext.Provider>
    </form>
  );
};
export default Form;
export { FormContext };

Form.Input = Input;
Form.SubmitButton = SubmitButton;
Form.Select = Select;
