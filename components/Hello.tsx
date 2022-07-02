import { forwardRef, Ref } from "react";

const Hello = forwardRef((props: {}, ref: Ref<HTMLDivElement>) => (
  <>
    <div
      ref={ref}
      className="w-full h-screen snap-start box-border flex flex-col items-end justify-center text-right scale-110"
    >
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
        Typescript ReactJS TailwindCSS
      </h1>
    </div>
  </>
));

export default Hello;
