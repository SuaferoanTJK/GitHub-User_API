import { CHANGE_MODE } from "../types/types";

const initialState = {
  mode: false,
};

export const githubAPI = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MODE:
      return {
        ...state,
        mode: action.payload,
      };

    default:
      return state;
  }
};
