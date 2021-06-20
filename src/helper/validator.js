export const validator = (username, name, email, password, cPassword) => {
  if (
    password.trim().length < 4 ||
    email.trim().length < 4 ||
    username.trim().length < 4 ||
    name.trim().length < 4 ||
    cPassword.trim().length < 4
  )
    return true;
  return false;
};
