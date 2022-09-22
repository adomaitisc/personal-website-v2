import Image from "next/image";

const Gradient = (props: { children: string; color: string }) => {
  return (
    <span
      className={`bg-clip-text text-transparent bg-gradient-to-r ${
        props.color === "blue"
          ? "from-blue-500/70 to-blue-400/50"
          : props.color === "green"
          ? "from-green-500/70 to-green-400/50"
          : " from-pink-500/70 to-pink-400/50"
      }`}
    >
      {props.children}
    </span>
  );
};

const Project = (props: { id: string }) => {
  return (
    <>
      <div
        id={props.id}
        className=" h-screen sm:h-80v sm:max-w-[80%] flex flex-col items-start justify-center text-left scale-100"
      >
        {/* Title */}
        <h1 className="text-2xl font-kngb text-white font-bold">
          Website Design + Development
        </h1>

        {/* Subtitle */}
        <h3 className="text-2xl sm:text-base font-kngb text-zinc-400">
          <Gradient color="blue">QI Qualidade Inteligente</Gradient>
        </h3>

        <div className="mt-8" />

        {/* Project Image */}
        <div className="w-[480px] h-[372px] sm:w-[240px] sm:h-[186px] relative ">
          <Image src="/project-1.png" layout="fill" alt="Project Image" />
        </div>

        {/* On Top Of Image */}
        <div className="mt-[-4rem] sm:mt-[-2rem] z-10">
          {/* Tech Stack */}
          <p className="text-2xl sm:text-base font-kng text-zinc-300">
            technologies used:
            <br />
            <Gradient color="blue">Typescript</Gradient>{" "}
            <Gradient color="green">ReactJS</Gradient>{" "}
            <Gradient color="red">Pure CSS</Gradient>
          </p>

          <div className="mt-4" />
        </div>
        {/* Links */}
        <p className="w-full text-center text-3xl sm:w-auto sm:text-left sm:text-xl font-kngb text-white">
          repo - live app
        </p>
      </div>
    </>
  );
};

export default Project;
