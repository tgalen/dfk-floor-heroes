import "./FloorHeroTableData.css";
import {
  PRICE_MODIFIER,
  CHAIN_ICON,
  RARITY_ICON,
} from "../../constants/constants";

const { decodeRecessiveGeneAndNormalize } = require("../../constants/recessive-genes.js");
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
      jewel: price,
      jade: CONVERT_JEWEL_TO_JADE,
      crystal: CONVERT_JEWEL_TO_CRYSTAL,
    },
    dfk: {
      jewel: CONVERT_CRYSTAL_TO_JEWEL,
      jade: CONVERT_CRYSTAL_TO_JADE,
      crystal: price,
    },
    kla: {
      jewel: CONVERT_JADE_TO_JEWEL,
      jade: price,
      crystal: CONVERT_JADE_TO_CRYSTAL,
    },
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const decodedGenes = decodeRecessiveGeneAndNormalize(hero.statGenes);
  const [mainSkip, mainR1, mainR2, mainR3] = decodedGenes.mainClassGenes;
  const [subSkip, subR1, subR2, subR3] = decodedGenes.subClassGenes;
  const [a1Skip, a1R1, a1R2, a1R3] = decodedGenes.a1Genes;
  const [a2Skip, a2R1, a2R2, a2R3] = decodedGenes.a2Genes;
  const [p1Skip, p1R1, p1R2, p1R3] = decodedGenes.p1Genes;
  const [p2Skip, p2R1, p2R2, p2R3] = decodedGenes.p2Genes;
  
  const displayActiveGenes = {
    Basic1: "B1: Poisoned Blade",
    Basic2: "B2: Blinding Winds",
    Basic3: "B3: Heal",
    Basic4: "B4: Cleanse",
    Basic5: "B5: Iron Skin",
    Basic6: "B6: Speed",
    Basic7: "B7: Critical Aim",
    Basic8: "B8: Deathmark",
    Advanced1: "A1: Exhaust",
    Advanced2: "A2: Daze",
    Advanced3: "A3: Explosion",
    Advanced4: "A4: Hardened Shield",
    Elite1: "E1: Stun",
    Elite2: "E2: Second Wind",
    Exalted1: "Ex1: Resurrection",
  };
  const displayPassiveGenes = {
    Basic1: "B1: Duelist",
    Basic2: "B2: Clutch",
    Basic3: "B3: Foresight",
    Basic4: "B4: Headstrong",
    Basic5: "B5: Clear Vision",
    Basic6: "B6: Fearless",
    Basic7: "B7: Chatterbox",
    Basic8: "B8: Stalwart",
    Advanced1: "A1: Leadership",
    Advanced2: "A2: Efficient",
    Advanced3: "A3: Intimidation",
    Advanced4: "A4: Toxic",
    Elite1: "E1: Giant Slayer",
    Elite2: "E2: Last Stand",
    Exalted1: "Ex1: Second Life",
  };

  return (
    <tr>
      <td>{pricesToDisplay[hero.network].jewel}</td>
      <td>{pricesToDisplay[hero.network].crystal}</td>
      <td>{pricesToDisplay[hero.network].jade}</td>
      <td>{hero.id}</td>
      <td>
        <img
          src={CHAIN_ICON[hero.network]}
          alt={hero.network}
          className="chain-icon"
        />
      </td>
      <td>{hero.mainClass}</td>
      <td>{capitalizeFirstLetter(mainR1)}</td>
      <td>{hero.subClass}</td>
      <td>{capitalizeFirstLetter(subR1)}</td>
      <td>
        {" "}
        <img
          src={RARITY_ICON[hero.rarity]}
          alt={RARITY_ICON[hero.rarity]}
          className="rarity-icon"
        />
      </td>
      <td>{displayActiveGenes[hero.active1]}</td>
      <td>{displayActiveGenes[hero.active2]}</td>
      <td>{displayPassiveGenes[hero.passive1]}</td>
      <td>{displayPassiveGenes[hero.passive2]}</td>
      <td>{hero.generation}</td>
      <td>
        {hero.summonsRemaining} / {hero.maxSummons}
      </td>
      <td>{capitalizeFirstLetter(hero.profession)}</td>
    </tr>
  );
};

export default FloorHeroTableData;
