export const setAuthAction = authActive => ({
  type: 'SET_AUTH',
  payload: authActive,
});

export const setUserAction = authUser => ({
  type: 'SET_USER',
  payload: authUser,
});
