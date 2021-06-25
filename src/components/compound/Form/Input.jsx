import { useFormContext } from "hooks";

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
          type={type || null}
          value={data[name]}
          className="form__input"
        />
      </div>
    );
  };

