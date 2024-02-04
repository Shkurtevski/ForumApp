import React from "react";
import { HiMiniXMark } from "react-icons/hi2";
import Image from "next/image";
import { ProfileType } from "../interfaces";
import { NextPage } from "next";

async function getProfile() {
  const res = await fetch("http://localhost:4000/profile", {
    next: {
      revalidate: 0,
    },
  });
  return res.json();
}

const XmarkProfileImg: NextPage = async () => {
  const profiles: ProfileType[] = await getProfile();
  const loggedInProfile = profiles.find((profile) => profile.isLoggedIn);

  if (!loggedInProfile) {
    return <div>No logged-in profile found</div>;
  }

  return (
    <div className="icon-profile-wrapper">
      <HiMiniXMark size={28} />
      <Image
        src={loggedInProfile.image}
        alt={loggedInProfile.id}
        width={60}
        height={60}
      />
    </div>
  );
};

export default XmarkProfileImg;
