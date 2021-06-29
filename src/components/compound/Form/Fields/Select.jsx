import PropTypes from "prop-types";

import { useFormContext } from "hooks";

export const Select = ({ name, label, options }) => {
  const constructOptions = () =>
    options.map(({ name, id, label }) => (
      <option value={name} name={name} key={id}>
        {label}
      </option>
    ));
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
        {constructOptions()}
      </select>
    </>
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};
