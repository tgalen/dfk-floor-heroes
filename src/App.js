import { useState, useEffect } from "react";

import Header from "./components/Header/Header";
import Accordian from "./components/Accordian/Accordian";
import TokenConversion from "./components/TokenConversion/TokenConversion";
import "./App.css";
import { CRYSTAL_JEWEL_PAIR_ENDPOINT_URL } from "./constants/constants";

function App() {
  const [theme, setTheme] = useState("light");
  const [crystalJewelPair, setCrystalJewelPair] = useState(null);

  useEffect(() => {
    const getCrystalJewelPair = async () => {
      const response = await fetch(CRYSTAL_JEWEL_PAIR_ENDPOINT_URL);
      const crystalJewelPairData = await response.json();
      console.log(crystalJewelPairData);
      setCrystalJewelPair(crystalJewelPairData.pair);
    };
    getCrystalJewelPair();
  }, []);

  return (
    <div className="app" data-theme={theme}>
      <Header theme={theme} setTheme={setTheme} />
      <Accordian crystalJewelPair={crystalJewelPair} />
      <TokenConversion crystalJewelPair={crystalJewelPair} />
    </div>
  );
}

export default App;
