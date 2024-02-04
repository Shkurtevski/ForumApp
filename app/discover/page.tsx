import { NextPage } from "next";
import DiscoverContent from "./DiscoverContent";
import CustomNavbar from "../components/CustomNavbar";

export const metadata: { title: string } = {
  title: "Discover",
};

const Discover: NextPage = () => {
  return (
    <main className="discover">
      <div className="discover-wrapper">
        <DiscoverContent />
        <CustomNavbar />
      </div>
    </main>
  );
};

export default Discover;
