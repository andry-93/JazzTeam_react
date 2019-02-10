export default function setUserAction(authUser) {
  return {
    type: 'SET_USER',
    payload: authUser,
  };
}
