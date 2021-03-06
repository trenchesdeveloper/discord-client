import {
  setFriends,
  setOnlineUsers,
  setPendingFriendsInvitation,
} from "./../store/actionCreators/friendActions";
import { io } from "socket.io-client";
import store from "../store/store";
import { updateChatHistoryIfActive } from "../utils/chatUtils";

let socket: any;

export const connectWithSocketServer = (user: any) => {
  console.log("user", user);
  socket = io("http://localhost:4000", {
    withCredentials: true,
    auth: {
      token: user?.token,
    },
  });
  console.log("socket", socket);

  socket.on("connect", () => {
    console.log("Successfully connected to the socket.io server");
    // console.log(socket.id);
  });

  socket.on("friendsInvitations", (data: any) => {
    const { pendingInvitations } = data;

    store.dispatch<any>(setPendingFriendsInvitation(pendingInvitations));
  });

  socket.on("friendsList", (data: any) => {
    const { friends } = data;

    store.dispatch<any>(setFriends(friends));
  });

  socket.on("onlineUsers", (data: any) => {
    console.log("online users update came");
    const { onlineUsers } = data;

    console.log("online users", onlineUsers);

    store.dispatch<any>(setOnlineUsers(onlineUsers));
  });

  socket.on("directChatHistory", (data: any) => {
    console.log("chat  history came", data);
    const { participants, messages } = data;



    updateChatHistoryIfActive({
      participants,
      messages,
    });
  });
};

export const sendDirectMessage = (data: any) => {
  console.log("the data", data);
  socket.emit("directMessage", data);
};

export const getDirectChatHistory = (data: { receiverUserId: string }) => {
  socket.emit("directChatHistory", data);
};
