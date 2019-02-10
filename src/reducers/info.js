const initialState = {
  authActive: false,
  authUser: {},
};

export default function authInfo(state = initialState, action) {
  switch (action.type) {
    case 'SET_AUTH':
      return {
        ...state,
        authActive: action.payload,
      };
    case 'SET_USER':
      return {
        ...state,
        authUser: action.payload,
      };
    default:
      return state;
  }
}
