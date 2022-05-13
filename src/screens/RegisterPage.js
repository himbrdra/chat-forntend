import LoginBtn from "../components/login/LoginBtn";
import LoginInput from "../components/login/LoginInput";
import LoginContainer from "../components/login/LoginContainer";
import LoginPageBackground from "../components/login/LoginPageBackground";
import useOnChange from "../hooks/useOnChange";
import LoginFormContainer from "../components/login/LoginFormContaienr";
import { useEffect, useState } from "react";
import TextError from "../components/errors/TextError";
import { formValidate } from "../utils";
import AlertError from "../components/errors/AlertError";
import { connect } from "react-redux";
import { registerUser } from "../components/actions";
import LoginFooter from "../components/login/LoginFooter";
import { useNavigate } from "react-router-dom";
import useIsLoggedIn from "../hooks/useIsLoggedIn";
const RegisetPage = ({ registerUser }) => {
  const navigate = useNavigate();
  const [submited, setSubmited] = useState("");
  const [validForm, setIsValidFrom] = useState("");
  const [registerData, setRegisterData, handleInputChange] = useOnChange();
  const [showError, setShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useIsLoggedIn(navigate);
  useEffect(() => {
    if (!validForm) return;
    if (!submited) return;
    if (validForm.username || validForm.password || validForm.email) return;

    registerUser(registerData, navigate, setIsLoading);

    setRegisterData("");
    setSubmited(false);
  }, [submited, registerData, setRegisterData, validForm, registerUser,navigate]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const isvalidFrom = formValidate(registerData);

    setIsValidFrom(isvalidFrom);
    setShowError(true);
    setSubmited(true);
  };
  return (
    <>
      <LoginPageBackground />
      <LoginContainer title={"Create an Account"}>
        {showError ? (
          validForm ? null : (
            <AlertError error={"please fill all fields"} />
          )
        ) : null}
        <LoginFormContainer onSubmit={handleOnSubmit}>
          <LoginInput
            inputOnChange={handleInputChange}
            label={"username"}
            type={"text"}
            value={registerData}
          />
          {validForm?.username ? (
            <TextError error="username must be longer then 3 characater" />
          ) : null}
          <LoginInput
            inputOnChange={handleInputChange}
            label={"email"}
            type={"text"}
            value={registerData}
          />
          {validForm?.email ? <TextError error={"unvalid Email "} /> : null}

          <LoginInput
            inputOnChange={handleInputChange}
            label={"password"}
            type={"password"}
            value={registerData}
          />
          {validForm?.password ? (
            <TextError error={"passwrod must be longer then 6 characater"} />
          ) : null}

            <LoginBtn isLoading={isLoading} btnText={"Register"} />
          <LoginFooter text={"already have an account?"} link={"login"} />
        </LoginFormContainer>
      </LoginContainer>
    </>
  );
};

export default connect(null, {
  registerUser,
})(RegisetPage);
