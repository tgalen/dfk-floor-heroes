import { useState, useEffect } from "react";

import Header from "./components/Header/Header";
import Accordion from "./components/Accordion/Accordion";
import TokenConversion from "./components/TokenConversion/TokenConversion";
import "./App.css";
import { CRYSTAL_JEWEL_PAIR_ENDPOINT_URL, JEWEL_JADE_PAIR_ENDPOINT_URL } from "./constants/constants";

function App() {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("displayMode")) || "light"
  );
  const [crystalJewelPair, setCrystalJewelPair] = useState(null);

  useEffect(() => {
    const getCrystalJewelPair = async () => {
      const response = await fetch(CRYSTAL_JEWEL_PAIR_ENDPOINT_URL);
      const crystalJewelPairData = await response.json();
      setCrystalJewelPair(crystalJewelPairData.pair);
    };
    getCrystalJewelPair();
  }, []);

  return (
    <div className="app" data-theme={theme}>
      <Header theme={theme} setTheme={setTheme} />
      <Accordion crystalJewelPair={crystalJewelPair} />
      <TokenConversion crystalJewelPair={crystalJewelPair} />
    </div>
  );
}

export default App;
