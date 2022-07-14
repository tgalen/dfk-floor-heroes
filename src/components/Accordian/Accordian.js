import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_FLOOR_HERO_PRICES } from "../../constants/constants";
import HeroCategory from "../HeroCategory/HeroCategory";
import "./Accordian.css";

const Accordian = () => {
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

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;

  return (
    <div className="accordian">
      {floorHeroes &&
        Object.keys(floorHeroes).map((category) => {
          return <HeroCategory category={category} />;
        })}
    </div>
  );
};

export default Accordian;
