import LoginPage from "./screens/LoginPage";
import RegisetPage from "./screens/RegisterPage";
import DashboardPage from "./screens/DashboardPage";
import ProfileSetup from "./screens/ProfileSetup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LiveChat from "./screens/LiveChat";
import "./styles/base.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisetPage />} />
        <Route path="/chat" element={<LiveChat />} />
        <Route path="/profile" element={<ProfileSetup />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
