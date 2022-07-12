import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_FLOOR_HERO_PRICES } from "../../constants/constants";
import HeroCategory from "../HeroCategory/HeroCategory";
import "./Accordian.css";

const Accordian = () => {
  const [floorHeroes, setFloorHeroes] = useState(null);
  const { loading, error, data } = useQuery(GET_FLOOR_HERO_PRICES);
  const mergedFloorHeroCategories = {};
  useEffect(() => {
    if (data) {
      setFloorHeroes(data);
    }
  }, [data]);

  floorHeroes &&
    Object.keys(floorHeroes).forEach((category) => {
      let mergedCategory = category.slice(0, -3);
      if (mergedFloorHeroCategories[mergedCategory]) {
        mergedFloorHeroCategories[mergedCategory] = mergedFloorHeroCategories[
          mergedCategory
        ].concat(floorHeroes[category]);
      } else {
        mergedFloorHeroCategories[mergedCategory] = floorHeroes[category];
      }
    });

  floorHeroes && console.log(mergedFloorHeroCategories);

  // floorHeroes &&
  // Object.keys(floorHeroes).forEach((category) => {
  //   let allChainCategory = category.slice(0, -3);
  //   if (floorHeroesFromEachChain[allChainCategory]) {
  //     floorHeroesFromEachChain[allChainCategory] = floorHeroesFromEachChain[
  //       allChainCategory
  //     ].concat(floorHeroes[category]);
  //   } else {
  //     floorHeroesFromEachChain[allChainCategory] = floorHeroes[category];
  //   }
  // });

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;

  floorHeroes && console.log(floorHeroes);

  return (
    <div className="accordian">
      {/* map each hero cat */}
      <HeroCategory />
    </div>
  );
};

export default Accordian;
