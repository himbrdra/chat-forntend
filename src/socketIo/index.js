import { io } from "socket.io-client";
import {
  getInvitaion,
  updateFriendList,
  onlineUsers,
} from "../components/actions";
import store from "../components/store";

let socket;

export const connectWithSocketServer = ({ token }) => {
  socket = io("http://localhost:5000", {
    auth: {
      token,
    },
  });
  socket.on("connect", (s) => {});
  socket.on("invitaion", (data) => {
    store.dispatch(getInvitaion(data));
  });

  socket.on("friendList", (data) => {
    store.dispatch(updateFriendList(data));
  });

  socket.on("connected_users", (onlineUsersList) => {
    store.dispatch(onlineUsers(onlineUsersList));
  });

  socket.on("direct_chat_history", (messages) => {
    store.dispatch({ type: "SET_MESSAGES", payload: messages });
  });
  socket.on("direct_message", (message) => {
    store.dispatch({ type: "SET_DIRECT_MESSAGE", payload: message.messages });
    const sendTon = new Audio("/sms_ton.mp3");
    sendTon.play();
  });
  socket.on("pree-offer", (data) => {
    console.log("call came");
    store.dispatch({ type: "CALL", payload: data });
  });
};

export const sendDirectMessage = (data) => {
  socket.emit("direct_message", data);
};

export const getMessagesHistory = (data) => {
  socket.emit("direct_chat_history", data);
};
export const emitPreeOffer = (data) => {
  socket.emit("pree-offer", data);
};
