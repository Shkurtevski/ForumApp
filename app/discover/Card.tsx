import { NextPage } from "next";
import Image from "next/image";
import { CardType } from "../interfaces";

const Card: NextPage<CardType> = ({ title, description, image }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <Image
          src={image}
          alt={title}
          width={600}
          height={230}
          quality={100}
          style={{ objectFit: "cover" }}
          loading="lazy"
        />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
