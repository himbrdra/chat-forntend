export const formValidate = (formData) => {
  if (Object.keys(formData).length < 3) return;
  const validate = {};

  let { email, password, username } = formData;

  email = email.toLowerCase();
  username = username.toLowerCase();

  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isValidEmail = re.test(email);

  if (!isValidEmail) {
    validate.email = "please entre a valid Email";
  } else {
    validate.email = null;
  }
  if (password.length < 6) {
    validate.password = "passwrod must be longer then 6 characater";
  } else {
    validate.password = null;
  }

  if (username.length < 3) {
    validate.username = "username must be longer then 3 characater";
  } else {
    validate.username = null;
  }

  return validate;
};

export const setToken = (token) => {
  window.localStorage.setItem("user", token);
};
