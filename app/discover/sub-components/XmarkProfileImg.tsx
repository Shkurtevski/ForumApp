import React from "react";

import { FaCircleXmark } from "react-icons/fa6";
import Image from "next/image";
import { ProfileType } from "../../interfaces";
import { NextPage } from "next";

async function getProfile() {
  const res = await fetch("https://forum-app-z6fe.onrender.com/profile", {
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
      <FaCircleXmark size={20} />
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
