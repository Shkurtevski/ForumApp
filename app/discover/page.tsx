import { NextPage } from "next";
import DiscoverContent from "./sub-components/DiscoverContent";
import CustomNavbar from "../components/navbar/CustomNavbar";
import { PageMetadata } from "../interfaces";
import RegistrationForm from "../components/forms/RegistrationForm";

export const metadata: PageMetadata = {
  title: "Discover",
  description: "Explore new content and topics",
  keywords: ["discover", "explore", "topics", "content"],
  author: "Your Name",
  robots: "index, follow",
  ogTitle: "Discover - Forum App",
  ogDescription: "Explore new content and topics in the forum app",
  ogImage: "https://example.com/og-image.jpg",
  ogUrl: "https://example.com/discover",
  ogType: "website",
};

const Discover: NextPage = () => {
  return (
    <main className="discover">
      <div className="modal-window">
        <div className="modal-window-wrapper">
          <RegistrationForm
            name={""}
            surname={""}
            email={""}
            number={0}
            profilePhoto={""}
          />
        </div>
      </div>
      <div className="discover-wrapper">
        <DiscoverContent />
        <CustomNavbar />
      </div>
    </main>
  );
};

export default Discover;
