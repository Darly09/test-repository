async function login(login) {
  const emailMock = "backend@gmail.com";
  const passwordMock = "123LaNea4**";

  const isCorrectEmail = emailMock === login.email;
  const isCorrectPassword = passwordMock === login.password;

  return isCorrectEmail && isCorrectPassword;
}

module.exports = { login };
