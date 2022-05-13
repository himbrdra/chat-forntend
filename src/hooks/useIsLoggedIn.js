import { useEffect, useState } from "react";
import dashboard from "../api/dashboard";

const useIsLoggedIn = async (navigate) => {
  useEffect(() => {
    try {
      const res = dashboard().then(() => navigate("/"));
    } catch (error) {
      alert("login error", error);
      navigate("/login");
    }
  }, []);
};

export default useIsLoggedIn;
