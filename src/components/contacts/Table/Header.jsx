import React from "react";
import PropTypes from "prop-types";
import { ColumnSortIcons } from "components/UI";
import { CONTACT_TABLE_HEADERS } from "constants/index";

export const Header = ({ handleSort, sortInfo }) => {
  const constructTableHeaders = () => {
    return CONTACT_TABLE_HEADERS.map(({ id, label }) => {
      return (
        <th
          className="contact-table__sortable-header"
          id={id}
          onClick={handleSort}
          key={id}
        >
          {label}
          <ColumnSortIcons columnKey={id} sortInfo={sortInfo} />
        </th>
      );
    });
  };

  return (
    <thead>
      <tr>
        {constructTableHeaders()}
        <th>Actions</th>
      </tr>
    </thead>
  );
};

Header.propTypes = {
  handleSort: PropTypes.func.isRequired,
  sortInfo: PropTypes.shape({
    key: PropTypes.string.isRequired,
    direction: PropTypes.string.isRequired,
  }),
};
