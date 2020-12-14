import Card from "./Card";
import { FaChevronDown } from "react-icons/fa";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="cards">
      <Card
        title="Discover the best stores near you"
        cta={
          <>
            NORWAY <FaChevronDown />
          </>
        }
      />
      <Card
        title="Resources"
        paragraph="Do you know what could beat the exciting feeling of having a new computer ? Make your own PC!"
      />
      <Card title="+5K tools for you to choose from" cta="Learn more" outline />
    </div>
  );
};

export default Cards;
