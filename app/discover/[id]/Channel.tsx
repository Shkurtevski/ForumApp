import { NextPage } from "next";
import React from "react";
import { ChannelType } from "@/app/interfaces";
import Image from "next/image";

const Channel: NextPage<ChannelType> = ({ image, title, description }) => {
  return (
    <div className="channel">
      <div className="channel-wrapper">
        <div className="channel-content-one">
          <Image
            src={image}
            alt={title}
            width={110}
            height={110}
            quality={100}
          />
        </div>
        <div className="channel-content-two">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Channel;
