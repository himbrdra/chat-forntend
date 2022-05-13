import "../../styles/formContainer.css";

const LoginContainer = ({ title, children }) => {
  return (
    <div className="container">
      <h3 className="title">{title}</h3>
      {children}
    </div>
  );
};
export default LoginContainer;
