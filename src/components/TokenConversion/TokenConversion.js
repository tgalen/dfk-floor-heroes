import JEWEL_ICON from "../../assets/jewel.png";
import CRYSTAL_ICON from "../../assets/crystal.png";

import "./TokenConversion.css";

const TokenConversion = ({ crystalJewelPair }) => {
  const convertCrystalToJewel = (1 / crystalJewelPair.priceNative).toFixed(3);

  return (
    <h5>
      1 <img src={JEWEL_ICON} alt="JEWEL" /> ={" "}
      {crystalJewelPair && convertCrystalToJewel}
      <img src={CRYSTAL_ICON} alt="CRYSTAL" />
    </h5>
  );
};

export default TokenConversion;