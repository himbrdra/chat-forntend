import auth from "../../api/auth";
import friend from "../../api/friend";

export const registerUser =
  (formValues, navigate, setIsLoading) => async (dispatch) => {
    try {
      setIsLoading(true);
      const { data } = await auth.post("/register", formValues);

      dispatch({ type: "REGISTER_USER", payload: data });
      window.localStorage.setItem("user", JSON.stringify(data));
      setIsLoading(false);
      navigate("/profile");
    } catch (error) {
      setIsLoading(false);
      alert("register actions", error);
    }
  };

export const loginUser =
  (formValues, navigate, setIsLoading) => async (dispatch) => {
    try {
      setIsLoading(true);
      const { data } = await auth.post("/login", formValues);
      dispatch({ type: "LOGIN_USER", payload: data });
      window.localStorage.setItem("user", JSON.stringify(data));
      navigate("/");
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      return err.response.data.error;
    }
  };

export const sendInvitaion =
  (reciverEmail, setIsloading) => async (dispatch) => {
    try {
      setIsloading(true);
      const user = JSON.parse(window.localStorage.getItem("user"));
      friend.defaults.headers.common["Authorization"] = user?.token;
      const res = await friend.post("/invitaion", reciverEmail);
      setIsloading(false);
      //  are we need to dispatch an action
    } catch (err) {
      setIsloading(false);
      alert(err.response.data.error);
    }
  };

export const getInvitaion = (invitaions) => async (dispatch) => {
  try {
    dispatch({ type: "GET_INVITAION", payload: invitaions });
  } catch (err) {
    alert(err.response.data.error);
  }
};

export const acceptInvit = (invitaion) => async (dispatch) => {
  try {
    const { data } = await friend.post("/accept", invitaion);
    dispatch({ type: "GET_INVITAION", payload: data });
  } catch (err) {
    alert(err.response.data.error);
  }
};

export const rejectInvit = (invitaion) => async (dispatch) => {
  try {
    const { data } = await friend.post("/reject", invitaion);
    dispatch({ type: "GET_INVITAION", payload: data });
  } catch (err) {
    alert(err.response.data.error);
  }
};

export const updateFriendList = (friendList) => async (dispatch) => {
  dispatch({ type: "UPDATE_FRIEND_LIST", payload: friendList });
};

export const onlineUsers = (onlineUsersList) => async (dispatch) => {
  dispatch({ type: "UPDATE_ONLINE_USERS", payload: onlineUsersList });
};

export const selectConversation = (selectedCoversation) => {
  return { type: "SELECT_CONVERSATION", payload: selectedCoversation };
};
