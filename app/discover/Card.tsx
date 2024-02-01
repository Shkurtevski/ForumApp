import { NextPage } from "next";
import Image from "next/image";
import { CardType } from "../interfaces";

const Card: NextPage<CardType> = ({ title, description, image }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <Image
          src={image} // Use the image URL directly
          alt={title}
          width={300}
          height={200}
        />

        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
