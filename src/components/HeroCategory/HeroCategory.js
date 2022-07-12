import { useState } from "react";

import "./HeroCategory.css";

const HeroCategory = () => {
  const [hideContent, setHideContent] = useState(true);

  const toggleContent = () => {
    setHideContent(!hideContent);
  };
  return (
    <div>
      <button onClick={toggleContent}>Category</button>
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
