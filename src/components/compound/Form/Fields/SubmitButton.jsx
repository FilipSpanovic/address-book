import PropTypes from "prop-types";
import { Button } from "components";
import { useFormContext } from "hooks";

export const SubmitButton = ({ text, className }) => {
  const { handleSubmit } = useFormContext();

  return <Button className={className} text={text} onClick={handleSubmit} />;
};

SubmitButton.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};
