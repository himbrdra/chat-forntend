import "../../styles/loginBtn.css";
import { Spinner } from "../svg";
const LoginBtn = ({ btnText,isLoading }) => {
  return (

    <button disabled={isLoading} type="submit" className="login__btn">
      {isLoading ? <Spinner/> : btnText}
    </button>
  );
};

export default LoginBtn;
