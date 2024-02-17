import { NextPage } from "next";
import DiscoverContent from "./sub-components/DiscoverContent";
import CustomNavbar from "../components/navbar/CustomNavbar";
import { PageMetadata, UserType } from "../interfaces";
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

async function getUser() {
  const res = await fetch("https://forum-app-z6fe.onrender.com/users", {
    next: {
      revalidate: 0,
    },
  });
  return res.json();
}

const Discover: NextPage = async () => {
  const users: UserType[] = await getUser();
  const loggedInUser = users.find((user) => user.isLoggedIn);

  let modalWindow = null;
  // if (!loggedInUser) {
  modalWindow = (
    <div className="modal-window">
      <div className="modal-window-wrapper">
        <RegistrationForm />
      </div>
    </div>
  );
  // }

  return (
    <main className="discover">
      {modalWindow}
      <div className="discover-wrapper">
        <DiscoverContent />
        <CustomNavbar />
      </div>
    </main>
  );
};

export default Discover;
