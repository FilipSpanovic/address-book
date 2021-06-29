import { useFormContext } from "hooks";
import PropTypes from "prop-types";

export const Input = ({ name, label, type, maxLength, className }) => {
  const { data, handleInputChange } = useFormContext();

  return (
    <div className={`form_group ${className}`}>
      <label htmlFor={name} className="form__label">
        {label}
      </label>
      <input
        maxLength={maxLength}
        onChange={handleInputChange}
        name={name}
        type={type}
        value={data[name]}
        className="form__input"
      />
    </div>
  );
};

Input.defaultProps = {
  type: null,
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  maxLength: PropTypes.string,
  className: PropTypes.string,
};
