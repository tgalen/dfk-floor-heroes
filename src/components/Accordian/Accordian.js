import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_FLOOR_HERO_PRICES } from "../../constants/constants";
import HeroCategory from "../HeroCategory/HeroCategory";
import "./Accordian.css";

const Accordian = () => {
  const [floorHeroes, setFloorHeroes] = useState(null);
  const { loading, error, data } = useQuery(GET_FLOOR_HERO_PRICES);
  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;
  return (
    <div className="accordian">
      {/* map each hero cat */}
      <HeroCategory />
    </div>
  );
};

export default Accordian;
