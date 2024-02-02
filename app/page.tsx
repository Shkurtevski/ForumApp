"use client"
import { NextPage } from "next";
import Link from "next/link";
// import AnimationSpinner from "./components/AnimationSpinner";

const Home: NextPage = () => {
  return (
    <main className="banner">
      {/* <AnimationSpinner /> */}
      <div className="wrapper">
        <h3>
          Activate community and LTV <br /> <span>on-site</span> where they
          belong.
        </h3>
        <Link href="/discover">
          <button className="btn-primary">Discover</button>
        </Link>
      </div>
    </main>
  );
};

export default Home;
