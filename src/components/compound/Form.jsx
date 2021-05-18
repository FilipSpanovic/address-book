import React from "react";
import { useState } from "react";
import useFormContext from "../../hooks/useFormContext";

const FormContext = React.createContext();

const Form = ({ initialState, children, className, onSubmit }) => {
  const [data, setData] = useState(initialState);

  const handleInputChange = ({ target: { name, value } }) => {
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
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

const Input = ({ name, label, type }) => {
  const { data, handleInputChange } = useFormContext();
  return (
    <>
      <label htmlFor={name} className="form__label">
        {label}
      </label>
      <input
        onChange={handleInputChange}
        name={name}
        type={type || null}
        value={data[name]}
        className={"form__input"}
      />
    </>
  );
};

const Select = ({ name, label, options }) => {
  const { data, handleInputChange } = useFormContext();
  return (
    <>
      <label htmlFor={name} className="form__label">
        {label}
      </label>
      <select
        className="form__input"
        value={data[name]}
        name={name}
        onChange={handleInputChange}
      >
        {options.map((element) => (
          <option value={element.name} name={element.name} key={element.id}>
            {element.label}
          </option>
        ))}
      </select>
    </>
  );
};

const SubmitButton = ({ text, className }) => {
  const { handleSubmit } = useFormContext();
  return (
    <button className={className} onClick={handleSubmit}>
      {text}
    </button>
  );
};

Form.Input = Input;
Form.SubmitButton = SubmitButton;
Form.Select = Select;
