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

const Hello = () => {
  return (
    <div className="w-screen h-screen flex items-center p-[20%]">
      <div className="h-full sm:h-80v sm:max-w-[80%] flex flex-col items-start justify-center text-left scale-100">
        {/* Subtitle */}
        <h3 className="text-2xl sm:text-base font-kng text-zinc-400">
          Hello There! I am
        </h3>

        {/* Title */}
        <h1 className="text-8xl sm:text-3xl font-kngb leading-[90px] text-white font-bold">
          {"Cauã Adomaitis"}
        </h1>

        <div className="mt-10 sm:mt-4" />

        {/* Briefing */}
        <p className="text-3xl sm:text-base font-kng text-zinc-400">
          I am a{" "}
          <span className="font-kngb text-white">front-end developer,</span>
          <br />
          and computer science student.
        </p>

        <div className="mt-10 sm:mt-4" />

        {/* Suitcase */}
        <p className="text-2xl sm:text-base font-kng text-zinc-400">
          currently developing with:
          <br />
          <Gradient color="blue">Typescript</Gradient>{" "}
          <Gradient color="green">ReactJS</Gradient>{" "}
          <Gradient color="red">TailwindCSS</Gradient>
        </p>
      </div>
    </div>
  );
};

export default Hello;
