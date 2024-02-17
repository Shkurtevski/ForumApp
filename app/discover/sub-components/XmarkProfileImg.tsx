import React from "react";
import { FaCircleXmark } from "react-icons/fa6";
import Image from "next/image";
import { UserType } from "../../interfaces";
import { NextPage } from "next";

async function getUser() {
  const usersApiUrl = process.env.USERS_API_URL || "";
  const res = await fetch(usersApiUrl, {
    next: {
      revalidate: 0,
    },
  });
  return res.json();
}

const XmarkProfileImg: NextPage = async () => {
  const users: UserType[] = await getUser();
  const loggedInUser = users.find((user) => user.isLoggedIn);

  if (!loggedInUser) {
    return <div>No logged-in profile found</div>;
  }

  return (
    <div className="icon-profile-wrapper">
      <FaCircleXmark size={20} />
      <Image
        src={loggedInUser.image}
        alt={loggedInUser.id}
        width={60}
        height={60}
      />
    </div>
  );
};

export default XmarkProfileImg;
