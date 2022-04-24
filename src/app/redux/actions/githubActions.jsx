import { CHANGE_MODE, GET_USERS, USE_MSG } from "../types/types";
import axios from "axios";
/* import { obtainUsers } from "./services/obtainUsers"; */

export const changeMode = (mode) => ({
  type: CHANGE_MODE,
  payload: mode,
});

/* export const getUsers = (name) => {
  return async (dispatch) => {
    const user = await obtainUsers(name);
    dispatch({
      type: GET_USERS,
      payload: user,
    });
  };
}; */
export const obtainUsers = (name = "octocat") => {
  return async (dispatch) => {
    let user = {};
    const url = `https://api.github.com/users/${name}`;
    await axios
      .get(url)
      .then((response) => {
        if (response.status === 200) {
          user = response.data;
          dispatch(getUsers(user));
          dispatch(useMsg(false));
        } else {
          console.log("Incorrect Status");
        }
      })
      .catch(() => {
        dispatch(useMsg(true));
      });
  };
};

export const getUsers = (user) => {
  return {
    type: GET_USERS,
    payload: user,
  };
};
export const useMsg = (msg) => ({
  type: USE_MSG,
  payload: msg,
});
