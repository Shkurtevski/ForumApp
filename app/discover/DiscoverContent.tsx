import { NextPage } from "next";
import Card from "../components/Card";
import { CardType, ProfileType } from "../interfaces";
import { HiMiniXMark } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

import Link from "next/link";
import Image from "next/image";

async function getCards() {
  const res = await fetch("http://localhost:4000/discover", {
    next: {
      revalidate: 0,
    },
  });
  return res.json();
}

async function getProfile() {
  const res = await fetch("http://localhost:4000/profile", {
    next: {
      revalidate: 0,
    },
  });
  return res.json();
}

const DiscoverContent: NextPage = async () => {
  const cards = await getCards();
  const profiles: ProfileType[] = await getProfile();

  const loggedInProfile = profiles.find((profile) => profile.isLoggedIn);

  if (!loggedInProfile) {
    return <div>No logged-in profile found</div>;
  }

  return (
    <div className="discover-content">
      <div className="icon-profile-wrapper">
        <HiMiniXMark size={28} />
        <Image
          src={loggedInProfile.image}
          alt={loggedInProfile.id}
          width={60}
          height={60}
        />
      </div>
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
