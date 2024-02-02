import { NextPage } from "next";
import React from "react";
import { notFound } from "next/navigation";
import { DataType } from "@/app/interfaces";
import Image from "next/image";

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
        <div className="channel-page-content-two">
          <h2>{channel.name}</h2>
          <Image
            src={channel.image}
            alt={channel.title}
            width={300}
            height={70}
            quality={100}
            style={{ objectFit: "cover" }}
          />
          <p>{channel.description_one}</p>
          <p>{channel.description_two}</p>
        </div>
      </div>
    </main>
  );
};

export default ChannelPage;
