import { useFormContext } from "hooks";

export const SubmitButton = ({ text, className }) => {
    const { handleSubmit } = useFormContext();
  
    return (
      <button className={className} onClick={handleSubmit}>
        {text}
      </button>
    );
  };