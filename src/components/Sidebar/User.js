import React from 'react';
import { connect } from 'react-redux';

/**
 * @return {null}
 */
function User(props) {
  const prop = props;
  if (prop.authActive === false) {
    return null;
  }
  return (
    <div className="img_profile" style={{ backgroundImage: `url(${prop.authUser.avatar})` }}>
      <span className="img_title">{`${prop.authUser.firstName} ${prop.authUser.lastName}`}</span>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    authActive: state.authInfo.authActive,
    authUser: state.authInfo.authUser,
  };
}

export default connect(mapStateToProps)(User);
