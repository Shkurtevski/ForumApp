import { NextPage } from "next";
import React from "react";
import Navbar from "./Navbar";
import { MdLocalPostOffice } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoStatsChart } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoIosHome } from "react-icons/io";
import Link from "next/link";
import { TbCirclesRelation } from "react-icons/tb";

interface CustomNavbarProps {
  showHomeIcon?: boolean;
  showCirclesRelationIcon?: boolean;
}

const CustomNavbar: NextPage<CustomNavbarProps> = ({
  showHomeIcon,
  showCirclesRelationIcon,
}) => {
  return (
    <React.Fragment>
      <Navbar
        icons={[
          showHomeIcon ? (
            <Link href="/" key={1}>
              <IoIosHome size={25} />
            </Link>
          ) : (
            <Link href="/discover" key={1}>
              <TbCirclesRelation size={25} />
            </Link>
          ),
          <MdLocalPostOffice key={2} size={25} />,

          showCirclesRelationIcon ? (
            <Link href="/discover" key={1}>
              <TbCirclesRelation size={25} />
            </Link>
          ) : (
            <FaLocationDot key={3} size={25} />
          ),

          <IoStatsChart key={4} size={25} />,
          <CgProfile key={5} size={25} />,
        ]}
      />
    </React.Fragment>
  );
};

export default CustomNavbar;
