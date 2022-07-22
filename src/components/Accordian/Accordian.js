import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_FLOOR_HERO_PRICES } from "../../constants/constants";
import HeroCategory from "../HeroCategory/HeroCategory";
import "./Accordian.css";
import { SpinnerCircular } from "spinners-react";

const Accordian = ({ crystalJewelPair }) => {
  const [floorHeroes, setFloorHeroes] = useState(null);
  const { loading, error, data } = useQuery(GET_FLOOR_HERO_PRICES);

  useEffect(() => {
    const mergeFloorHeroCategoriesFromAllChains = (queryData) => {
      const mergedCategories = {};
      Object.keys(queryData).forEach((category) => {
        let categoryWithOutChain = category.slice(0, -3);

        if (mergedCategories[categoryWithOutChain]) {
          mergedCategories[categoryWithOutChain] = mergedCategories[
            categoryWithOutChain
          ].concat(queryData[category]);
        } else {
          mergedCategories[categoryWithOutChain] = data[category];
        }
      });
      return mergedCategories;
    };
    if (data) {
      setFloorHeroes(mergeFloorHeroCategoriesFromAllChains(data));
    }
  }, [data]);

  if (loading)
    return (
      <div className="accordian">
        <SpinnerCircular style={{ color: "blue", size: "15%" }} />
      </div>
    );
  if (error) return <div>Error</div>;

  return (
    <div className="accordian">
      {floorHeroes &&
        Object.keys(floorHeroes).map((category) => {
          return (
            <HeroCategory
              key={category}
              category={category}
              floorHeroes={floorHeroes}
              crystalJewelPair={crystalJewelPair}
            />
          );
        })}
    </div>
  );
};

export default Accordian;
