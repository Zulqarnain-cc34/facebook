export const initialState = {
  user: null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
};

const reducer = (state, action) => {
  switch (action.typpe) {
    case actionTypes.SET_USER:
      return {
        ...state,
        action: action.type,
      };

    default:
      break;
  }
};
export default reducer;
