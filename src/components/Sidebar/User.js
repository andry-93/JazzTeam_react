import React from 'react';

/**
 * @return {null}
 */
function User(props) {
  const prop = props;
  return (prop.authActive === false)
    ? null
    : (
      <div className="img_profile" style={{ backgroundImage: `url(${prop.authUser.avatar})` }}>
        <span className="img_title">{`${prop.authUser.firstName} ${prop.authUser.lastName}`}</span>
      </div>
    );
}

export default User;
