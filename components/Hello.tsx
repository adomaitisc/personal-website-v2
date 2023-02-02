import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Hello = () => {
  const [visibleElements, setVisibleElements] = useState({
    subtitle: false,
    title: false,
    p1: false,
    p2: false,
    gh: false,
  });

  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const p1Ref = useRef<HTMLParagraphElement>(null);
  const p2Ref = useRef<HTMLDivElement>(null);
  const ghRef = useRef<HTMLAnchorElement>(null);

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
    observer.observe(p2Ref.current!);
  }, []);

  return (
    <div className="h-full flex justify-center items-center scale-100">
      <div className="h-full w-full md:px-[10%] xl:px-[20%] flex flex-col items-start justify-center text-left">
        <h3
          id="subtitle"
          ref={subtitleRef}
          className={`text-lg sm:text-xl font-kng text-zinc-300 duration-500 ${
            visibleElements.subtitle
              ? "ml-0 opacity-100"
              : "md:ml-[-80px] opacity-0"
          }`}
        >
          Hello There! I am
        </h3>

        <div className="mt-2"></div>

        <h1
          id="title"
          ref={titleRef}
          className={`text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-kngb text-white duration-500 ${
            visibleElements.title
              ? "ml-0 opacity-100"
              : "md:ml-[-80px] opacity-0"
          }`}
        >
          Cauã Adomaitis
        </h1>

        <div className="mt-2" />

        <p
          id="p1"
          ref={p1Ref}
          className={`text-lg mt-2 sm:text-xl md:max-w-[80%] lg:max-w-[70%] font-kng text-zinc-300 duration-500 ${
            visibleElements.p1 ? "ml-0 opacity-100" : "md:ml-[-80px] opacity-0"
          }`}
        >
          I am a fullstack developer, creating beautiful and functional web
          apps.
        </p>
        <p
          id="p2"
          ref={p2Ref}
          className={`text-base mt-4 sm:text-lg md:text-xl font-kng text-rose-500 duration-500 ${
            visibleElements.p2 ? "ml-0 opacity-100" : "md:ml-[-80px] opacity-0"
          }`}
        >
          From São Paulo, based in Boston.
          <br />
          Currently working @ Qualidade Inteligente
        </p>
      </div>
    </div>
  );
};

export default Hello;
