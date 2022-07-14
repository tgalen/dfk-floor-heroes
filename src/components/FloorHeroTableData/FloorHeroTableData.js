import { PRICE_MODIFIER } from "../../constants/constants";

const FloorHeroTableData = ({ hero }) => {
  const price = parseInt(hero.salePrice) / PRICE_MODIFIER;

  return (
    <tbody>
      <tr>
        <td>{price}</td>
        <td>{price}</td>
        <td>{hero.id}</td>
        <td>{hero.network}</td>
        <td>{hero.mainClass}</td>
        <td>{hero.rarity}</td>
        <td>{hero.generation}</td>
        <td>
          {hero.summonsRemaining} / {hero.maxSummons}
        </td>
      </tr>
    </tbody>
  );
};

export default FloorHeroTableData;
