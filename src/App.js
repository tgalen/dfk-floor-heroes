import { useState } from "react";

import Header from "./components/Header/Header";
import Accordian from "./components/Accordian/Accordian";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div className="app" data-theme={theme}>
      <Header theme={theme} setTheme={setTheme} />
      <Accordian />
    </div>
  );
}

export default App;
