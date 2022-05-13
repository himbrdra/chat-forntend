import { combineReducers } from "redux";

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "REGISTER_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGIN_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

const INIT_INVIT = [];
const invitaion = (state = INIT_INVIT, action) => {
  switch (action.type) {
    case "GET_INVITAION":
      return [...action.payload];
    default:
      return state;
  }
};

const friendList = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_FRIEND_LIST":
      return [action.payload];
    default:
      return state;
  }
};

const onlineUsers = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_ONLINE_USERS":
      return action.payload;
    default:
      return state;
  }
};

const selectedConversation = (state = {}, action) => {
  switch (action.type) {
    case "SELECT_CONVERSATION":
      return action.payload;
    default:
      return state;
  }
};

const historyMessages = (state = [], action) => {
  switch (action.type) {
    case "SET_MESSAGES":
      return action.payload;
    // case "SET_MESSAGE":
    //   return [...state,action.payload]
    default:
      return state;
  }
};

const directMessages = (state = [], action) => {
  switch (action.type) {
    case "SET_DIRECT_MESSAGE":
      console.log("payload", action.payload);
      return [...state, action.payload];
    case "CLEAR_DIRECT_MESSAGE":
      return [];
    default:
      return state;
  }
};

const call = (state = [], action) => {
  switch (action.type) {
    case "CALL":
      return action.payload;
    default:
      return [];
  }
};

const reducers = combineReducers({
  auth: userReducer,
  invitaions: invitaion,
  friendList,
  onlineUsers,
  conversation: selectedConversation,
  messages: historyMessages,
  directMessages,
  call,
});
export default reducers;
