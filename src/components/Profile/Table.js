import React from 'react';

export default function Table(props) {
  const prop = props;
  return (
    <table className="user_auth">
      <tbody>
        <tr>
          <th>Username:</th>
          <td>{prop.authUser.username}</td>
        </tr>
        <tr>
          <th>First Name:</th>
          <td>{prop.authUser.firstName}</td>
        </tr>
        <tr>
          <th>Last Name:</th>
          <td>{prop.authUser.lastName}</td>
        </tr>
      </tbody>
    </table>
  );
}
