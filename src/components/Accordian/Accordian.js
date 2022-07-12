import HeroCategory from "../HeroCategory/HeroCategory";
import "./Accordian.css";

const Accordian = () => {
  return (
    <div className="accordian">
      {/* map each hero cat */}
      <HeroCategory />
    </div>
  );
};

export default Accordian;
