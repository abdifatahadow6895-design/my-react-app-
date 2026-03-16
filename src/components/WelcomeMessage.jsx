function WelcomeMessage() {
  const isLogged = true;

  if (isLogged) {
    return <h1>Welcome User</h1>;
  }

  return <h1>Please Login</h1>;
}

export default WelcomeMessage;
