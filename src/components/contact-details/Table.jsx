import React from "react";
import PropTypes from "prop-types";

const Table = ({
  firstName,
  lastName,
  dateOfBirth,
  contactType,
  contact,
}) => {
  
  return (
    <table className="contact-table-details">
      <tbody>
        <tr>
          <td>First name:</td>
          <th>{firstName}</th>
        </tr>
        <tr>
          <td>Last name:</td>
          <th>{lastName}</th>
        </tr>
        <tr>
          <td>Date of birth</td>
          <th>{dateOfBirth}</th>
        </tr>
        <tr>
          <td>Contact type:</td>
          <th>{contactType}</th>
        </tr>
        <tr>
          <td>Contact:</td>
          <th>{contact}</th>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;

Table.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  dateOfBirth: PropTypes.string.isRequired,
  contactType: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
};
