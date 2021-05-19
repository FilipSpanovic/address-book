import React from "react";

const Table = ({
  firstName,
  lastName,
  dateOfBirth,
  contactType,
  contact,
  favorite,
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
          <th> {dateOfBirth}</th>
        </tr>
        <tr>
          <td>Contact type:</td>
          <th>{contactType}</th>
        </tr>
        <tr>
          <td>Contact:</td>
          <th>{contact}</th>
        </tr>
        {favorite && <p>favorit</p>}
      </tbody>
    </table>
  );
};

export default Table;
