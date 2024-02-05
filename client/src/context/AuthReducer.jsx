const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload, // Data being passed from the backend
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: true,
      };
    case "UPDATE_START":
      return {
        ...state, // Copy the existing state
        isFetching: true,
      };
    case "UPDATE_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "UPDATE_FAILURE":
      return {
        user: state.user,
        isFetching: false,
        error: true,
      };
    // TESTING ----------------->
    case "DELETE_START":
      return {
        ...state,
        isFetching: true,
      };
    case "DELETE_SUCCESS":
      return {
        user: null,
        isFetching: false,
        error: false,
      };
    case "DELETE_FAILURE":
      return {
        ...state, // Or handle failure state as per requirement
        isFetching: false,
        error: true,
      };
    // TESTING <-----------------
    case "LOGOUT":
      return {
        user: null,
        isFetching: false,
        error: false,
      };
    default:
      return state;
  }
};

export default AuthReducer;