import LoginPage from "./screens/LoginPage";
import RegisetPage from "./screens/RegisterPage";
import DashboardPage from "./screens/DashboardPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/base.css";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisetPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
