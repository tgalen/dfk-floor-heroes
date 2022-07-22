import { useState } from "react";

import { HERO_CATEGORY_DISPLAY_NAME } from "../../constants/constants";
import FloorHeroTableData from "../FloorHeroTableData/FloorHeroTableData";
import NoHeroData from "../NoHeroData/NoHeroData";

import JEWEL_ICON from "../../assets/jewel.png";
import CRYSTAL_ICON from "../../assets/crystal.png";

import "./HeroCategory.css";

const HeroCategory = ({ category, floorHeroes, crystalJewelPair }) => {
  const [hideContent, setHideContent] = useState(true);
  const CONVERSION_MULTIPLIER =
    crystalJewelPair && Number(crystalJewelPair.priceNative);

  const toggleContent = () => {
    setHideContent(!hideContent);
  };

  const categorySortedByPriceAscending =
    floorHeroes &&
    floorHeroes[category].sort((a, b) => {
      let priceA =
        a.network === "hmy" ? a.salePrice : a.salePrice * CONVERSION_MULTIPLIER;
      let priceB =
        b.network === "hmy" ? b.salePrice : b.salePrice * CONVERSION_MULTIPLIER;
      return priceA - priceB;
    });

  return (
    <div>
      <button onClick={toggleContent}>
        {HERO_CATEGORY_DISPLAY_NAME[category]}
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
                <th>ID</th>
                <th>Chain</th>
                <th>Main</th>
                <th>Rarity</th>
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
