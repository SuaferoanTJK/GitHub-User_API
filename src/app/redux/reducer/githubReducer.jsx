import { CHANGE_MODE, GET_USERS, USE_MSG } from "../types/types";

const initialState = {
  mode: false,
  user: {},
  msg: "",
};

export const githubAPI = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MODE:
      return {
        ...state,
        mode: action.payload,
      };
    case GET_USERS:
      return {
        ...state,
        user: action.payload,
      };
    case USE_MSG:
      return {
        ...state,
        msg: action.payload,
      };
    default:
      return state;
  }
};
