const LoginFormContainer = ({ children, onSubmit }) => {
  return (
    <form autoComplete="off" onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default LoginFormContainer;
