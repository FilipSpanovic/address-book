import PropTypes from "prop-types";
import { useFormContext } from "hooks";
import { Button } from "components/UI";

export const SubmitButton = ({ text, className }) => {
  const { handleSubmit } = useFormContext();

  return <Button className={className} text={text} onClick={handleSubmit} />;
};

SubmitButton.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};
