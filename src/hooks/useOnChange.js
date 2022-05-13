import { useState } from "react";

const useOnChange = () => {
  const [loginInfo, setLoginInfo] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  };
  return [loginInfo, setLoginInfo, handleInputChange];
};
export default useOnChange;
