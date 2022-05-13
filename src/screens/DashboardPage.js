import Dashboard from "../components/dashboard/Dashboard";
import FreindSideBar from "../components/dashboard/FreindSideBar";
import SideNav from "../components/dashboard/SideNav";
import TopNav from "../components/dashboard/TopNav";
import Chat from "../components/dashboard/Chat";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { connectWithSocketServer } from "../socketIo";
import { loginUser } from "../components/actions";

import store from "../components/store";
import CallOffer from "../components/call/CallOffer";
import "../styles/dashboardPage.css";

const DashboardPage = ({ auth, loginUser, call }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem("user"));
    console.log("user", user);
    store.dispatch({ type: "LOGIN_USER", payload: user });

    if (!user) navigate("/login");
    // TODO  chek if the token valid
    if (user) {
      connectWithSocketServer(user);
    }
  }, [navigate]);
  if (!auth.user) return;
  return (
    <Dashboard>
      {call.user ? (
        <CallOffer
          type={call.type}
          username={call.user.username}
          user={"caller"}
        />
      ) : (
        ""
      )}
      <TopNav />
      <SideNav />
      <FreindSideBar />
      <Chat />
    </Dashboard>
  );
};
const mapStateToProps = ({ auth, call }) => {
  return { auth, call };
};
export default connect(mapStateToProps, { loginUser })(DashboardPage);
