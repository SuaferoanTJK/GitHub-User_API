import { CHANGE_MODE, GET_USERS, USE_MSG } from "../types/types";
import { obtainUsers } from "./services/obtainUsers";

export const changeMode = (mode) => ({
  type: CHANGE_MODE,
  payload: mode,
});

export const getUsers = (name) => {
  return async (dispatch) => {
    const user = await obtainUsers(name);
    dispatch({
      type: GET_USERS,
      payload: user,
    });
  };
};

export const useMsg = (msg) => ({
  type: USE_MSG,
  payload: msg,
});
