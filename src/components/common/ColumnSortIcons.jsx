import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";

const ColumnSortIcons = ({ sortInfo, columnKey }) => {
  const { direction, key } = sortInfo;
  return (
    <>
      {direction !== "default" && key === columnKey && (
        <FontAwesomeIcon
          className={`${direction === "desc" && "fa-rotate-180"}`}
          icon={faArrowCircleDown}
        />
      )}
    </>
  );
};

export default ColumnSortIcons;
