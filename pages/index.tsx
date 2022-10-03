import type { NextPage } from "next";
import About from "../components/About";
import Background from "../components/Background";
import Contact from "../components/Contact";
import Hello from "../components/Hello";
import Navbar from "../components/Navbar";
import SEO from "../components/SEO";

const Home: NextPage = () => {
  return (
    <>
      <SEO />
      <Background />
      <div className="w-screen">
        <div
          className="pt-20 w-full h-[60vh] md:h-screen px-8 sm:px-6 md:px-0"
          id="hello"
        >
          <Hello />
        </div>
        <div
          className="w-full h-[80vh] md:h-screen px-8 sm:px-6 md:px-0"
          id="about"
        >
          <About />
        </div>
        <div
          className="pb-20 w-full h-[100vh] md:h-screen px-8 sm:px-6 md:px-0"
          id="contact"
        >
          <Contact />
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default Home;
