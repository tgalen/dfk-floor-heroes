import { useState } from "react";

import { HERO_CATEGORY_DISPLAY_NAME } from "../../constants/constants";
import FloorHeroTableData from "../FloorHeroTableData/FloorHeroTableData";
import NoHeroData from "../NoHeroData/NoHeroData";

import JEWEL_ICON from "../../assets/jewel.png";
import CRYSTAL_ICON from "../../assets/crystal.png";
import JADE_ICON from "../../assets/jade.png";

import "./HeroCategory.css";

const HeroCategory = ({
  category,
  floorHeroes,
  crystalJewelPair,
  jewelJadePair,
}) => {
  const [hideContent, setHideContent] = useState(true);
  const CJ_CONVERSION_MULTIPLIER =
    crystalJewelPair && Number(crystalJewelPair.priceNative);

  const JJ_CONVERSION_MULTIPLIER =
    jewelJadePair && Number(jewelJadePair.priceNative);

  const toggleContent = () => {
    setHideContent(!hideContent);
  };

  const categorySortedByPriceAscending =
    floorHeroes &&
    floorHeroes[category].sort((a, b) => {
      let priceA =
        a.network === "hmy"
          ? a.salePrice
          : a.network === "dfk"
          ? a.salePrice * CJ_CONVERSION_MULTIPLIER
          : a.salePrice * JJ_CONVERSION_MULTIPLIER;
      let priceB =
        b.network === "hmy"
          ? b.salePrice
          : b.network === "dfk"
          ? b.salePrice * CJ_CONVERSION_MULTIPLIER
          : b.salePrice * JJ_CONVERSION_MULTIPLIER;
      return priceA - priceB;
    });

  return (
    <div>
      <button onClick={toggleContent}>
        {HERO_CATEGORY_DISPLAY_NAME[category]}
        <i className={hideContent ? "arrow down" : "arrow up"} />
      </button>
      <div
        className={
          hideContent ? "content-container-hidden" : "content-container"
        }
      >
        {floorHeroes[category].length === 0 ? (
          <NoHeroData />
        ) : (
          <table className="category-table">
            <thead>
              <tr>
                <th>
                  <img
                    alt="Jewel Icon"
                    height="20px"
                    width="20px"
                    src={JEWEL_ICON}
                  />
                </th>
                <th>
                  <img
                    alt="Crystal Icon"
                    height="20px"
                    width="20px"
                    src={CRYSTAL_ICON}
                  />
                </th>
                <th>
                  <img
                    alt="Jade Icon"
                    height="20px"
                    width="20px"
                    src={JADE_ICON}
                  />
                </th>
                <th>ID</th>
                <th>Chain</th>
                <th>Main</th>
                <th>Main R1</th>
                <th>Sub</th>
                <th>Sub R1</th>
                <th>Rarity</th>
                <th>Active1</th>
                <th>Active2</th>
                <th>Passive1</th>
                <th>Passive2</th>
                <th>Gen</th>
                <th>Summons</th>
                <th>Profession</th>
              </tr>
            </thead>
            <tbody>
              {categorySortedByPriceAscending.map((hero) => {
                return (
                  <FloorHeroTableData
                    key={hero.id}
                    hero={hero}
                    crystalJewelPair={crystalJewelPair}
                    jewelJadePair={jewelJadePair}
                  />
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default HeroCategory;
