import { useEffect, useRef, useState } from "react";

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
  const [visibleElements, setVisibleElements] = useState({
    subtitle: false,
    title: false,
    p1: false,
    div: false,
  });

  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const p1Ref = useRef<HTMLParagraphElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisibleElements((prev) => {
            return {
              ...prev,
              [entry.target.id]: entry.isIntersecting,
            };
          });
        });
      },
      {
        threshold: 1,
      }
    );
    observer.observe(subtitleRef.current!);
    observer.observe(titleRef.current!);
    observer.observe(p1Ref.current!);
    observer.observe(divRef.current!);
  }, []);

  return (
    <div className="w-screen mt-20 h-[90vh] flex items-center p-[20%]">
      <div className="h-full sm:h-80v sm:max-w-[80%] flex flex-col items-start justify-center text-left scale-100">
        {/* Subtitle */}
        <h3
          id="subtitle"
          ref={subtitleRef}
          className={`text-2xl sm:text-base font-kngb text-white/70 duration-500 ${
            visibleElements.subtitle
              ? "ml-0 opacity-100"
              : "ml-[-80px] opacity-0"
          }`}
        >
          Hello There! I am
        </h3>

        <div className="mt-2"></div>

        {/* Title */}
        <h1
          id="title"
          ref={titleRef}
          className={`text-8xl sm:text-3xl font-kngb leading-[90px] text-white font-bold duration-500 ${
            visibleElements.title ? "ml-0 opacity-100" : "ml-[-80px] opacity-0"
          }`}
        >
          Cauã Adomaitis
        </h1>

        <div className="mt-10 sm:mt-4" />

        {/* Briefing */}
        <p
          id="p1"
          ref={p1Ref}
          className={`text-3xl sm:text-base font-kngb text-white/70 max-w-[60%] duration-500 ${
            visibleElements.p1 ? "ml-0 opacity-100" : "ml-[-80px] opacity-0"
          }`}
        >
          I am a front-end developer, and computer science student.
        </p>

        <div className="mt-10 sm:mt-4" />

        {/* Suitcase */}
        <div
          id="div"
          ref={divRef}
          className={`text-2xl sm:text-base font-kngb text-zinc-400 duration-500 ${
            visibleElements.div ? "ml-0 opacity-100" : "ml-[-80px] opacity-0"
          }`}
        >
          currently developing with:
          <div className="flex gap-4">
            <p className="text-orange-400/70">Typescript</p>
            <p className="text-rose-400/70">ReactJS</p>
            <p className="text-red-400/70">TailwindCSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hello;
