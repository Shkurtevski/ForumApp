import { NextPage } from "next";
import Card from "./Card";
import { CardType } from "../interfaces";

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
      <div className="discover-wrapper">
        {cards.map((card: CardType) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default DiscoverContent;
