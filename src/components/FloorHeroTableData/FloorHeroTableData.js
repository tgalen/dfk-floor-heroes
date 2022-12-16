import "./FloorHeroTableData.css";
import {
  PRICE_MODIFIER,
  CHAIN_ICON,
  RARITY_ICON,
} from "../../constants/constants";

const FloorHeroTableData = ({ hero, crystalJewelPair, jewelJadePair }) => {
  const price = (parseInt(hero.salePrice) / PRICE_MODIFIER).toFixed(2);
  const CJ_CONVERSION_MULTIPLIER =
    crystalJewelPair && Number(crystalJewelPair.priceNative);

  const JJ_CONVERSION_MULTIPLIER =
    jewelJadePair && Number(jewelJadePair.priceNative);

  const CONVERT_JEWEL_TO_CRYSTAL = (price / CJ_CONVERSION_MULTIPLIER).toFixed(
    2
  );
  const CONVERT_CRYSTAL_TO_JEWEL = (price * CJ_CONVERSION_MULTIPLIER).toFixed(
    2
  );

  const CONVERT_JEWEL_TO_JADE = (price / JJ_CONVERSION_MULTIPLIER).toFixed(2);
  const CONVERT_JADE_TO_JEWEL = (price * JJ_CONVERSION_MULTIPLIER).toFixed(2);

  const CONVERT_JADE_TO_CRYSTAL = (
    (price * JJ_CONVERSION_MULTIPLIER) /
    CJ_CONVERSION_MULTIPLIER
  ).toFixed(2);

  const CONVERT_CRYSTAL_TO_JADE = (
    (price * CJ_CONVERSION_MULTIPLIER) /
    JJ_CONVERSION_MULTIPLIER
  ).toFixed(2);

  const pricesToDisplay = {
    hmy: {
      dfk: CONVERT_JEWEL_TO_CRYSTAL,
      kla: CONVERT_JEWEL_TO_JADE,
      hmy: price,
    },
    dfk: {
      hmy: CONVERT_CRYSTAL_TO_JEWEL,
      kla: CONVERT_CRYSTAL_TO_JADE,
      dfk: price,
    },
    kla: {
      hmy: CONVERT_JADE_TO_JEWEL,
      kla: price,
      dfk: CONVERT_JADE_TO_CRYSTAL,
    },
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // console.log(pricesToDisplay[hero.network].dfk);

  return (
    <tr>
      <td>{pricesToDisplay[hero.network].hmy}</td>
      {/* <td>{hero.network === "dfk" ? CONVERT_CRYSTAL_TO_JEWEL : price}</td> */}
      <td>{pricesToDisplay[hero.network].dfk}</td>
      {/* <td>{hero.network === "hmy" ? CONVERT_JEWEL_TO_CRYSTAL : price}</td> */}
      <td>{pricesToDisplay[hero.network].kla}</td>
      {/* <td>{hero.network === "kla" ? CONVERT_JEWEL_TO_CRYSTAL : price}</td> */}
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
      <td>{capitalizeFirstLetter(hero.profession)}</td>
    </tr>
  );
};

export default FloorHeroTableData;
