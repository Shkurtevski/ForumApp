import { NextPage } from "next";
import DiscoverContent from "./DiscoverContent";
import NavBar from "../components/NavBar";
import { TbCirclesRelation } from "react-icons/tb";
import { MdLocalPostOffice } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoStatsChart } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";

export const metadata: { title: string } = {
  title: "Discover",
};

const Discover: NextPage = () => {
  return (
    <main className="discover">
      <div className="discover-wrapper">
        <DiscoverContent />
        <NavBar
          icons={[
            <Link href="/" key={1}>
              <TbCirclesRelation size={25} />
            </Link>,
            <MdLocalPostOffice key={2} size={25} />,
            <FaLocationDot key={3} size={25} />,
            <IoStatsChart key={4} size={25} />,
            <CgProfile key={5} size={25} />,
          ]}
        />
      </div>
    </main>
  );
};

export default Discover;
