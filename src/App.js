import { useState, useEffect } from "react";

import Header from "./components/Header/Header";
import Accordion from "./components/Accordion/Accordion";
import TokenConversion from "./components/TokenConversion/TokenConversion";
import "./App.css";
import {
  CRYSTAL_JEWEL_PAIR_ENDPOINT_URL,
  JEWEL_JADE_PAIR_ENDPOINT_URL,
} from "./constants/constants";

function App() {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("displayMode")) || "light"
  );
  const [crystalJewelPair, setCrystalJewelPair] = useState(null);
  const [jewelJadePair, setJewelJadePair] = useState(null);

  const getPairs = async () => {
    const responseCJ = await fetch(CRYSTAL_JEWEL_PAIR_ENDPOINT_URL);
    const crystalJewelPairData = await responseCJ.json();
    setCrystalJewelPair(crystalJewelPairData.pair);

    const responseJJ = await fetch(JEWEL_JADE_PAIR_ENDPOINT_URL);
    const jewelJadePairData = await responseJJ.json();
    console.log(jewelJadePairData);
    setJewelJadePair(jewelJadePairData.pair);
  };

  useEffect(() => {
    getPairs();
  }, []);

  return (
    <div className="app" data-theme={theme}>
      <Header theme={theme} setTheme={setTheme} />
      <Accordion
        crystalJewelPair={crystalJewelPair}
        jewelJadePair={jewelJadePair}
      />
      <TokenConversion
        crystalJewelPair={crystalJewelPair}
        jewelJadePair={jewelJadePair}
      />
    </div>
  );
}

export default App;
