import { CHANGE_MODE } from "../types/types";

export const changeMode = (mode) => ({
  type: CHANGE_MODE,
  payload: mode,
});
