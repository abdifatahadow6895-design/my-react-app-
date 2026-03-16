function App() {
  const isLogged = false;

  return <div>{isLogged ? <h1>Welcome</h1> : <h1>Please Login</h1>}</div>;
}
function Dashboard() {
  const isLogged = false;

  return <div>{isLogged ? <h1>Welcome</h1> : <h1>Please Login</h1>}</div>;
}
export default Dashboard;
