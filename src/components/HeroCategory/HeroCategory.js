import { useState } from "react";

import { HERO_CATEGORY_DISPLAY_NAME } from "../../constants/constants";
import FloorHeroTableData from "../FloorHeroTableData/FloorHeroTableData";
import NoHeroData from "../NoHeroData/NoHeroData";

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
      {floorHeroes[category].length === 0 && <NoHeroData />}
      <div
        className={
          hideContent ? "content-container-hidden" : "content-container"
        }
      >
        <table>
          <thead>
            <tr>
              <th>Price JEWEL</th>
              <th>Price CRYSTAL</th>
              <th>ID</th>
              <th>Chain</th>
              <th>Main</th>
              <th>Rarity</th>
              <th>Gen</th>
              <th>Summons</th>
            </tr>
          </thead>
          {floorHeroes[category].map((hero) => {
            return <FloorHeroTableData hero={hero} />;
          })}
        </table>
      </div>
    </div>
  );
};

export default HeroCategory;
