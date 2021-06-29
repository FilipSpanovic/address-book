import React, { Fragment } from "react";
import Proptypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";

export const ColumnSortIcons = ({ sortInfo, columnKey }) => {
  
  const { direction, key } = sortInfo;

  const constructIcon = () => {
    if (direction !== "default" && key === columnKey) {
      return (
        <FontAwesomeIcon
          className={`${direction === "desc" && "fa-rotate-180"}`}
          icon={faArrowCircleDown}
        />
      );
    }
  };

  return <Fragment>{constructIcon()}</Fragment>;
};

ColumnSortIcons.propTypes = {
  sortInfo: Proptypes.shape({
    direction: Proptypes.string,
    columnKey: Proptypes.string,
  }),
};
