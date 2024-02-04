import { NextPage } from "next";
import React from "react";
import { notFound } from "next/navigation";
import { DataType } from "@/app/interfaces";
import Image from "next/image";
import CustomNavbar from "../../components/CustomNavbar";
import Channels from "./Channels";
import XmarkProfileImg from "../XmarkProfileImg";

export const metadata: { title: string } = {
  title: "Channel",
};

export async function generateStaticParams() {
  const res = await fetch(`http://localhost:4000/discover`);

  const data = await res.json();

  return data.map((data: DataType) => ({
    id: data.id,
  }));
}

async function getDataType(id: string) {
  const res = await fetch(`http://localhost:4000/discover/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    notFound();
  }
  return res.json();
}

const ChannelPage: NextPage<{ params: DataType }> = async ({ params }) => {
  const { channel } = await getDataType(params.id);

  return (
    <main className="channel-page">
      <div className="channel-page-wrapper">
        <XmarkProfileImg />
        <div className="channel-page-content-one">
          <Channels />
        </div>
        <div className="channel-page-content-two">
          <h2>{channel.name}</h2>
          <Image
            src={channel.image}
            alt={channel.name}
            width={300}
            height={70}
            quality={100}
            priority
            style={{ objectFit: "cover" }}
          />
          <p>{channel.description_one}</p>
          <p>{channel.description_two}</p>
        </div>
      </div>
      <CustomNavbar showHomeIcon showCirclesRelationIcon />
    </main>
  );
};

export default ChannelPage;
