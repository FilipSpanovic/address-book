import React from "react";
import Proptypes from "prop-types";

export const Card = ({ children, className, style }) => {
  return <div className={`card ${className}`} style={style}>{children}</div>;
};

Card.propTypes = {
  className: Proptypes.string,
};
