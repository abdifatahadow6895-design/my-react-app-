import "./App.css";
import Header from "./components/Header";
import User from "./components/User";
import Tiriye from "./components/Counter";
import ThemeToggle from "./components/ThemeSwicher";
import Clicker from "./components/Clicker";
import Inputer from "./components/Inputer";
import WelcomeMessage from "./components/WelcomeMessage";
import Dashboard from "./components/Dashboard";
import Notification from "./components/Notification";
function App() {
  return (
    <div>
      <WelcomeMessage />
      <Dashboard />
      <ThemeToggle />
      <Notification />
      <Inputer/>
      <Header />
      <Clicker />
      <Header />
      <User name=" Abdifatah " surname="Adow"/>
      <Tiriye />
      
      

    </div>
  );
}

export default App;
