import { Link } from "react-router-dom";
import "../../styles/loginFooter.css";
const LoginFooter = ({ text, link }) => {
  return (
    <div className="login__footer">
      <p className="footer__text">
        {text}
        <Link className="link" to={`/${link}`}>
          {link}
        </Link>
      </p>
    </div>
  );
};

export default LoginFooter;
