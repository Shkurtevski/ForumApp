import { NextPage } from "next";
import React from "react";
import { notFound } from "next/navigation";
import { DataType } from "@/app/interfaces";
import Image from "next/image";
import CustomNavbar from "../../components/navbar/CustomNavbar";
import Channels from "./sub-components/Channels";
import XmarkProfileImg from "../sub-components/XmarkProfileImg";
import { PageMetadata } from "@/app/interfaces";

export const metadata: PageMetadata = {
  title: "Channel",
  description: "Explore channels",
  keywords: ["channel", "community"],
  author: "Your Name",
  robots: "index, follow",
  ogTitle: "Channel - Forum App",
  ogDescription: "Explore channels in the community app",
  ogImage: "https://example.com/og-image.jpg",
  ogUrl: "https://example.com/channel",
  ogType: "website",
};

const discoverApiUrl = process.env.DISCOVER_API_URL || "";

export async function generateStaticParams() {
  const res = await fetch(discoverApiUrl);

  const data = await res.json();

  return data.map((data: DataType) => ({
    id: data.id,
  }));
}

async function getDataType(id: string) {
  const res = await fetch(`${discoverApiUrl}/${id}`, {
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
      <div className="channel-page-container">
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
      </div>
    </main>
  );
};

export default ChannelPage;
