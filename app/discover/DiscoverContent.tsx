import { NextPage } from "next";
import Card from "./Card";
import { CardType } from "../interfaces";
import { HiMiniXMark } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch, IoIosArrowDown } from "react-icons/io";

async function getCards() {
  const res = await fetch(" http://localhost:4000/discover", {
    next: {
      revalidate: 0,
    },
  });
  return res.json();
}

const DiscoverContent: NextPage = async () => {
  const cards = await getCards();
  return (
    <div className="discover-content">
      <HiMiniXMark size={28} />
      <div className="heading-wrapper">
        <h1>Discover</h1>
        <IoIosArrowDown size={20}/>
      </div>
      <div className="search-wrapper">
        <div className="search-group-hamburger">
          <RxHamburgerMenu size={28} />
        </div>
        <div className="search-group-input">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search for a channel..."
          />
        </div>
        <div className="search-group-search">
          <IoIosSearch size={23} />
        </div>
      </div>
      <div className="discover-content-wrapper">
        {cards.map((card: CardType) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default DiscoverContent;
