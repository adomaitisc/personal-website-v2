import Image from "next/image";
import { forwardRef, Ref } from "react";

const Gradient = (props: { children: string; color: string }) => {
  return (
    <span
      className={`bg-clip-text text-transparent bg-gradient-to-r ${
        props.color === "blue"
          ? "from-blue-400 to-blue-200"
          : props.color === "green"
          ? "from-green-400 to-green-200"
          : " from-pink-400 to-pink-200"
      }`}
    >
      {props.children}
    </span>
  );
};

const Project = forwardRef(
  (props: { id: string }, ref: Ref<HTMLDivElement>) => (
    <>
      <div
        id={props.id}
        className="w-1/2 h-screen flex flex-col items-end justify-center text-right scale-100"
      >
        <div ref={ref} className="w-0 h-0 top-0" />
        {/* Title */}
        <h1 className="text-2xl font-kngb leading-2xl text-white font-bold">
          Website Design + Development
        </h1>

        {/* Subtitle */}
        <h1 className="text-base font-kng text-zinc-400">
          QI Qualidade Inteligente
        </h1>

        <div className="mt-8" />

        {/* Project Image */}
        <div className="w-[400px] h-[310px] relative right-[-50px]">
          <Image
            src="/project-1.png"
            layout="fill"
            className="w-auto"
            alt="Project Image"
          />
        </div>

        {/* On Top Of Image */}
        <div className="mt-[-3rem] z-10">
          {/* Tech Stack */}
          <h1 className="text-base font-kng text-white">
            technologies used:
            <br />
            <Gradient color="blue">Typescript</Gradient>{" "}
            <Gradient color="green">ReactJS</Gradient>{" "}
            <Gradient color="red">Pure CSS</Gradient>
          </h1>

          <div className="mt-4" />

          {/* Links */}
          <h1 className="text-xl font-kngb text-white">repo - live app</h1>
        </div>
      </div>
    </>
  )
);

Project.displayName = "Project";

export default Project;
