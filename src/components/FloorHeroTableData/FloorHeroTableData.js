import "./FloorHeroTableData.css";
import {
  PRICE_MODIFIER,
  CHAIN_ICON,
  RARITY_ICON,
} from "../../constants/constants";

const FloorHeroTableData = ({ hero, crystalJewelPair }) => {
  const price = (parseInt(hero.salePrice) / PRICE_MODIFIER).toFixed(2);
  const CONVERSION_MULTIPLIER =
    crystalJewelPair && Number(crystalJewelPair.priceNative);

  const CONVERT_JEWEL_TO_CRYSTAL = (price / CONVERSION_MULTIPLIER).toFixed(2);
  const CONVERT_CRYSTAL_TO_JEWEL = (price * CONVERSION_MULTIPLIER).toFixed(2);

  return (
    <tr>
      <td>{hero.network === "dfk" ? CONVERT_CRYSTAL_TO_JEWEL : price}</td>
      <td>{hero.network === "hmy" ? CONVERT_JEWEL_TO_CRYSTAL : price}</td>
      <td>{hero.id}</td>
      <td>
        <img
          src={CHAIN_ICON[hero.network]}
          alt={hero.network}
          className="chain-icon"
        />
      </td>
      <td>{hero.mainClass}</td>
      <td>
        {" "}
        <img
          src={RARITY_ICON[hero.rarity]}
          alt={RARITY_ICON[hero.rarity]}
          className="rarity-icon"
        />
      </td>
      <td>{hero.generation}</td>
      <td>
        {hero.summonsRemaining} / {hero.maxSummons}
      </td>
    </tr>
  );
};

export default FloorHeroTableData;
