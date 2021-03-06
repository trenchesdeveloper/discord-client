import { checkStatus } from "./../../api";
import { ActionType } from "./../actionTypes/index";
import { Dispatch } from "redux";
import { apiClient } from "../../api";
import { Action } from "../actions";
import { NavigateFunction } from "react-router-dom";
import { openAlert } from "./alertAction";

export const sendFriendInvitation =
  (email: string, closeDialogHandler: Function) =>
  async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await apiClient.post("/friendInvitation/invite", {
        email,
      });

      dispatch({
        type: ActionType.OPEN_ALERT_MESSAGE,
        payload: "Invitation sent",
      });
      closeDialogHandler();
    } catch (error: any) {
      checkStatus(error);
      console.log(error);
      dispatch({
        type: ActionType.OPEN_ALERT_MESSAGE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const setPendingFriendsInvitation =
  (friendsInvitation: any) => async (dispatch: Dispatch<Action>) => {
    try {
      dispatch<any>({
        type: ActionType.SET_PENDING_FRIENDS_INVITATIONS,
        payload: friendsInvitation,
      });
    } catch (error: any) {
      console.log(error);
      openAlert(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  };

 export const setOnlineUsers = (onlineUsers: any) => async (dispatch: Dispatch<Action>) => {
    try {
        dispatch<any>({
            type: ActionType.SET_ONLINE_USERS,
            payload: onlineUsers,
        });
    } catch (error: any) {
        console.log(error);
        dispatch<any>(openAlert( error.response && error.response.data.message
            ? error.response.data.message
            : error.message)
        );
    }
};

  export const setFriends =
    (friends: any) => async (dispatch: Dispatch<Action>) => {
      try {
        dispatch<any>({
          type: ActionType.SET_FRIENDS,
          payload: friends,
        });
      } catch (error: any) {
        console.log(error);
        openAlert(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        );
      }
    };

export const acceptFriendsInvitation =
  (id: string) => async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await apiClient.post("/friendInvitation/accept", {
        id,
      });

      dispatch<any>(openAlert(data));
    } catch (error: any) {
      checkStatus(error);
      openAlert(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  };

export const rejectFriendsInvitation =
  (id: string) => async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await apiClient.post("/friendInvitation/reject", {
        id,
      });

      dispatch<any>(openAlert(data));
    } catch (error: any) {
      checkStatus(error);
      dispatch<any>(
        openAlert(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        )
      );
    }
  };
