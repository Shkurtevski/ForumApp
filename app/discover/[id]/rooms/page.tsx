import { DataType } from "@/app/interfaces";
import { NextPage } from "next";
import { notFound } from "next/navigation";
import React from "react";

export const metadata: { title: string } = {
  title: "Rooms",
};

const discoverApiUrl = process.env.DISCOVER_API_URL || "";

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

const Rooms: NextPage<{ params: DataType }> = async ({ params }) => {
  const { channel } = await getDataType(params.id);
  return (
    <h1>
      Channel {channel.name} for {channel.id}
    </h1>
  );
};

export default Rooms;
