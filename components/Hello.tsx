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

const Hello = forwardRef((props: { id: string }, ref: Ref<HTMLDivElement>) => (
  <>
    <div
      id={props.id}
      className="w-1/2 h-screen flex flex-col items-end justify-center text-right scale-100"
    >
      <div ref={ref} className="w-0 h-0 top-0" />
      {/* Title */}
      <h1 className="text-[64px] font-kngb leading-[60px] text-white font-bold">
        {"Cauã Adomaitis"}
      </h1>

      {/* Subtitle */}
      <h1 className="text-base font-kng text-zinc-400">
        based in Boston
        <br />
        from São Paulo
      </h1>

      <div className="mt-8" />

      {/* Briefing */}
      <h1 className="text-xl font-kng text-white">
        Hello there, I am a front-end developer,
        <br />
        giving life to your custom projects.
      </h1>

      <div className="mt-8" />

      {/* Suitcase */}
      <h1 className="text-xl font-kng text-white">
        currently developing with:
        <br />
        <Gradient color="blue">Typescript</Gradient>{" "}
        <Gradient color="green">ReactJS</Gradient>{" "}
        <Gradient color="red">TailwindCSS</Gradient>
      </h1>
    </div>
  </>
));

Hello.displayName = "Hello";

export default Hello;
