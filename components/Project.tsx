import Image from "next/image";
import { forwardRef, Ref } from "react";

const Project = forwardRef((props: {}, ref: Ref<HTMLDivElement>) => (
  <>
    <div
      ref={ref}
      className="w-full h-screen snap-start box-border flex flex-col items-end justify-center text-right scale-110"
    >
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
          Typescript ReactJS Pure CSS
        </h1>

        <div className="mt-4" />

        {/* Links */}
        <h1 className="text-xl font-kngb text-white">repo - live app</h1>
      </div>
    </div>
  </>
));

Project.displayName = "Project";

export default Project;
