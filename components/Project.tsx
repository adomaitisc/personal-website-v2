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
        className=" h-screen flex flex-col items-start justify-center text-left scale-100"
      >
        {/* Title */}
        <h2 className="text-4xl font-kngb text-white font-bold">
          Website Design + Development
        </h2>

        {/* Subtitle */}
        <h3 className="text-2xl font-kngb text-zinc-400">
          <Gradient color="blue">QI Qualidade Inteligente</Gradient>
        </h3>

        <div className="mt-8" />

        {/* Project Image */}
        <div className="w-[480px] h-[372px] relative ">
          <Image src="/project-1.png" layout="fill" alt="Project Image" />
        </div>

        {/* On Top Of Image */}
        <div className="mt-[-4rem] z-10">
          {/* Tech Stack */}
          <p className="text-2xl font-kng text-zinc-300">
            technologies used:
            <br />
            <Gradient color="blue">Typescript</Gradient>{" "}
            <Gradient color="green">ReactJS</Gradient>{" "}
            <Gradient color="red">Pure CSS</Gradient>
          </p>

          <div className="mt-4" />
        </div>
        {/* Links */}
        <p className="w-full text-center text-3xl font-kngb text-white">
          repo - live app
        </p>
      </div>
    </>
  );
};

export default Project;
