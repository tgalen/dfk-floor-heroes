import { useState } from "react";

import { HERO_CATEGORY_DISPLAY_NAME } from "../../constants/constants";
import FloorHeroTableData from "../FloorHeroTableData/FloorHeroTableData";
import NoHeroData from "../NoHeroData/NoHeroData";

import JEWEL_ICON from "../../assets/jewel.png";
import CRYSTAL_ICON from "../../assets/crystal.png";

import "./HeroCategory.css";

const HeroCategory = ({ category, floorHeroes }) => {
  const [hideContent, setHideContent] = useState(true);

  const toggleContent = () => {
    setHideContent(!hideContent);
  };

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
              </tr>
            </thead>
            <tbody>
              {floorHeroes[category].map((hero) => {
                return <FloorHeroTableData key={hero.id} hero={hero} />;
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default HeroCategory;
