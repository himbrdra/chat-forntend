import LoginBtn from "../components/login/LoginBtn";
import LoginInput from "../components/login/LoginInput";
import LoginContainer from "../components/login/LoginContainer";
import LoginPageBackground from "../components/login/LoginPageBackground";
import useOnChange from "../hooks/useOnChange";
import LoginFormContainer from "../components/login/LoginFormContaienr";
import { useEffect, useState } from "react";
import AlertError from "../components/errors/AlertError";
import LoginFooter from "../components/login/LoginFooter";
import { loginUser } from "../components/actions";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import useIsLoggedIn from "../hooks/useIsLoggedIn";

const LoginPage = ({ loginUser, user }) => {
  const navigate = useNavigate();
  const [submited, setSubmited] = useState("");
  const [loginData, setLoginData, handleInputChange] = useOnChange();
  const [unvalidForm, setIsValidFrom] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useIsLoggedIn(navigate);

  useEffect(() => {
    if (user) navigate("/");
    if (unvalidForm) return;
    if (!submited) return;

    loginUser(loginData, navigate,setIsLoading).then((err) => {
      setError(err);
      if (!err) setLoginData("");
    });

    setSubmited(false);
  }, [
    submited,
    loginData,
    setLoginData,
    unvalidForm,
    loginUser,
    navigate,
    user,
  ]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setSubmited(true);
    const isAllFieldFilled = Object.keys(loginData).length < 2;
    setIsValidFrom(isAllFieldFilled);
  };

  return (
    <>
      <LoginPageBackground />
      <LoginContainer title={"Login"}>
        {unvalidForm ? <AlertError error={"please fill all fields"} /> : null}
        {error ? <AlertError error={error} /> : ""}
        <LoginFormContainer onSubmit={handleOnSubmit}>
          <LoginInput
            inputOnChange={handleInputChange}
            label={"email"}
            type={"email"}
            value={loginData}
          />
          <LoginInput
            inputOnChange={handleInputChange}
            label={"password"}
            type={"password"}
            value={loginData}
          />
          <LoginBtn isLoading={isLoading} btnText={"Login"} />
        </LoginFormContainer>
        <LoginFooter text={"don't have an account?"} link={"register"} />
      </LoginContainer>
    </>
  );
};
const mapStateToProps = (state) => {
  return { user: state.auth.user };
};

export default connect(mapStateToProps, { loginUser })(LoginPage);
