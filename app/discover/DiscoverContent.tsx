import { NextPage } from "next";
import Card from "../components/Card";
import { CardType, ProfileType } from "../interfaces";

import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

import Link from "next/link";
import XmarkProfileImg from "./XmarkProfileImg";

async function getCards() {
  const res = await fetch("http://localhost:4000/discover", {
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
      <XmarkProfileImg />
      <div className="heading-wrapper">
        <h1>Discover</h1>
        <IoIosArrowDown size={23} />
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
          <IoSearch size={23} />
        </div>
      </div>
      <div className="discover-content-wrapper">
        {cards.map((card: CardType) => (
          <Link key={card.id} href={`/discover/${card.id}`} className="card">
            <Card {...card} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DiscoverContent;
