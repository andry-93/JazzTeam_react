const initialState = {
  authActive: false,
};

export default function authInfo(state = initialState, action) {
  switch (action.type) {
    case 'SET_AUTH':
      return {
        ...state,
        authActive: action.payload,
      };
    default:
      return state;
  }
}
