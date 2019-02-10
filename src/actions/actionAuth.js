export default function setAuthAction(authActive) {
  return {
    type: 'SET_AUTH',
    payload: authActive,
  };
}
