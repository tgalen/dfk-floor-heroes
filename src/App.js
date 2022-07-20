import { useState, useEffect } from "react";

import Header from "./components/Header/Header";
import Accordian from "./components/Accordian/Accordian";
import TokenConversion from "./components/TokenConversion/TokenConversion";
import "./App.css";
import { CRYSTAL_JEWEL_PAIR_ENDPOINT_URL } from "./constants/constants";

function App() {
  const [theme, setTheme] = useState("light");
  const [jewelToCrystalRatio, setJewelToCrystalRatio] = useState(null);

  useEffect(() => {
    const getCrystalJewelPair = async () => {
      const crystalJewelPair = await fetch(CRYSTAL_JEWEL_PAIR_ENDPOINT_URL);
      console.log(crystalJewelPair.json());
    };
    getCrystalJewelPair();
  }, []);

  return (
    <div className="app" data-theme={theme}>
      <Header theme={theme} setTheme={setTheme} />
      <Accordian />
      <TokenConversion />
    </div>
  );
}

export default App;
