import { NextPage } from "next";
import DiscoverContent from "./DiscoverContent";

export const metadata: { title: string } = {
  title: "Discover",
};

const Discover: NextPage = () => {
  return (
    <main className="discover">
      <div className="discover-wrapper">
        <DiscoverContent />
      </div>
    </main>
  );
};

export default Discover;
