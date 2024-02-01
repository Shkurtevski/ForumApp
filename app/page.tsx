import { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <main className="banner">
      <div className="wrapper">
        <h3>
          Activate community and LTV <br /> <span>on-site</span> where they
          belong.
        </h3>
        <Link href="/">
          <button className="btn-primary">Discover</button>
        </Link>
      </div>
    </main>
  );
};

export default Home;
