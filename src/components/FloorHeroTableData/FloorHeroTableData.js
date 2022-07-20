import { PRICE_MODIFIER } from "../../constants/constants";

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
      <td>{hero.network}</td>
      <td>{hero.mainClass}</td>
      <td>{hero.rarity}</td>
      <td>{hero.generation}</td>
      <td>
        {hero.summonsRemaining} / {hero.maxSummons}
      </td>
    </tr>
  );
};

export default FloorHeroTableData;
