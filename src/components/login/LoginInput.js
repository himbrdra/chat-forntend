import "../../styles/loginInput.css";
const LoginInput = ({ label, type, inputOnChange, value }) => {
  return (
    <div className="input__container">
      <label className="label" htmlFor={label}>
        {label}
      </label>
      <input
        onChange={inputOnChange}
        type={type}
        id={label}
        name={label}
        value={value[label] || ""}
        className="form__input"
      />
    </div>
  );
};
export default LoginInput;
