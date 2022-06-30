import "./styles.css";
import { useState } from "react";
import LoginPopup from "./components/Header/LoginPopup";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import GamePopup from "./components/Content/GamePopup";
import "./App.css";

export default function App() {
  const [displayLogin, setDisplayLogin] = useState(false);
  const [displayGame, setDisplayGame] = useState(false);

  const handleLogin = () => {
    setDisplayLogin(true);
  };
  const handleStart = () => {
    setDisplayGame(true);
  };
  return (
    <div className="App">
      {displayLogin ? <LoginPopup /> : null}
      {/* {displayGame ? <GamePopup /> : null} */}
      <GamePopup />
      <Header handleLogin={handleLogin} />
      <Content handleStart={handleStart} />
      <Footer />
    </div>
  );
}
