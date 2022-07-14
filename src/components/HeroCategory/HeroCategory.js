import { useState } from "react";

import { HERO_CATEGORY_DISPLAY_NAME } from "../../constants/constants";

import "./HeroCategory.css";

const HeroCategory = ({ category }) => {
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
        className={hideContent ? "table-container-hidden" : "table-container"}
      >
        <table className="category-table">
          <thead>
            <tr>
              <th>Price</th>
              <th>ID</th>
              <th>Chain</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>5</td>
              <td>444444</td>
              <td>DFK</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HeroCategory;
