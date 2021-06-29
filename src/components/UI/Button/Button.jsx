import React from "react";
import Proptypes from "prop-types";

export const Button = ({ className, onClick, text }) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  className: "btn",
};

Button.propTypes = {
  className: Proptypes.string,
  onClick: Proptypes.func.isRequired,
  text: Proptypes.string.isRequired,
};
