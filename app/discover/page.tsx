import { NextPage } from "next";
import DiscoverContent from "./DiscoverContent";


const Discover: NextPage = () => {
  return (
    <main className="discover">
      <div className="discover-wrapper">
        <h1>Discover</h1>
        <DiscoverContent />
   
      </div>
    </main>
  );
};

export default Discover;
