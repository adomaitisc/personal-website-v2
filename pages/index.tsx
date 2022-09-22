import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import About from "../components/About";
import Background from "../components/Background";
import Contact from "../components/Contact";
import Hello from "../components/Hello";
import Navbar from "../components/Navbar";

import {
  ScrollContainer,
  ScrollPage,
  batch,
  FadeIn,
  MoveOut,
  Sticky,
} from "react-scroll-motion";

const Animator = dynamic(
  import("react-scroll-motion").then((it) => it.Animator),
  { ssr: false }
);

const Fade = batch(FadeIn(), MoveOut());

const Home: NextPage = () => {
  return (
    <main className="w-full top-0 bottom-0 bg-black/50 snap-y snap-mandatory flex flex-col items-center overflow-x-hidden">
      <Head>
        <title>Personal Website V4</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background />
      <div className="w-screen overflow-x-hidden flex flex-col items-center justify-center">
        <ScrollContainer>
          <div id="hello">
            <ScrollPage>
              <Animator animation={Fade}>
                <Hello />
              </Animator>
            </ScrollPage>
          </div>
          <div id="about">
            <ScrollPage>
              <Animator animation={Fade}>
                <About />
              </Animator>
            </ScrollPage>
          </div>
          <div id="contact">
            <ScrollPage>
              <Animator animation={Fade}>
                <Contact />
              </Animator>
            </ScrollPage>
          </div>
        </ScrollContainer>
        {/* <Project id="projects" /> */}
      </div>
      <Navbar />
    </main>
  );
};

export default Home;
