import React from 'react';

/**
 * @return {null}
 */
function User(props) {
  const prop = props;
  if (prop.authActive === false) {
    return null;
  }
  return (
    <div className="header-user">
      <div className="user_photo" style={{ backgroundImage: `url(${prop.authUser.avatar})` }} />
      <span className="user_title">{`${prop.authUser.firstName} ${prop.authUser.lastName}`}</span>
    </div>
  );
}

export default User;
