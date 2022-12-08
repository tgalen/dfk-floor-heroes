import JEWEL_ICON from "../../assets/jewel.png";
import CRYSTAL_ICON from "../../assets/crystal.png";
import JADE_ICON from "../../assets/jade.png";

import "./TokenConversion.css";

const TokenConversion = ({ crystalJewelPair }) => {
  const convertCrystalToJewel =
    crystalJewelPair && (1 / crystalJewelPair.priceNative).toFixed(3);

  return (
    <h5>
      1 <img src={JEWEL_ICON} alt="JEWEL" className="token-icon" /> ={" "}
      {crystalJewelPair && convertCrystalToJewel}
      <img src={CRYSTAL_ICON} alt="CRYSTAL" className="token-icon" />
    </h5>
  );
};

export default TokenConversion;
