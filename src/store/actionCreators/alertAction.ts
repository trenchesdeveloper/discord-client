import { ActionType } from "./../actionTypes/index";
import { Dispatch } from "redux";

import { Action } from "../actions";

export const openAlert = (content: string) => (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionType.OPEN_ALERT_MESSAGE, payload: content });
};
