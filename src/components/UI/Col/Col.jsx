import PropTypes from "prop-types";

export const Col = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

Col.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
};

Col.defaultProps = {
  className: "col-1-of-3",
};
