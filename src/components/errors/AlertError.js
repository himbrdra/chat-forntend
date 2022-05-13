const AlertError = ({ error }) => {
  return (
    <div className="alert__error">
      <p className="text__error">{error}</p>
    </div>
  );
};
export default AlertError;
