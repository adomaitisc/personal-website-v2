import { useEffect, useRef, useState } from "react";

const About = () => {
  const [visibleElements, setVisibleElements] = useState({
    title: false,
    p1: false,
    p2: false,
    p3: false,
    p4: false,
    p5: false,
  });

  const titleRef = useRef<HTMLHeadingElement>(null);
  const p1Ref = useRef<HTMLParagraphElement>(null);
  const p2Ref = useRef<HTMLParagraphElement>(null);
  const p3Ref = useRef<HTMLParagraphElement>(null);
  const p4Ref = useRef<HTMLParagraphElement>(null);
  const p5Ref = useRef<HTMLParagraphElement>(null);

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
    observer.observe(titleRef.current!);
    observer.observe(p1Ref.current!);
    observer.observe(p2Ref.current!);
    observer.observe(p3Ref.current!);
    observer.observe(p4Ref.current!);
    observer.observe(p5Ref.current!);
  }, []);

  return (
    <div className="h-full flex justify-center items-center scale-100">
      <div className="h-full w-full md:px-[10%] xl:px-[20%] flex flex-col items-start justify-center text-left">
        {/* Title */}
        <h2
          id="title"
          ref={titleRef}
          className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-kngb text-rose-500/70 duration-500 ${
            visibleElements.title
              ? "ml-0 opacity-100"
              : " md:ml-[-80px] opacity-0"
          }`}
        >
          About me.
        </h2>

        <div className="mt-4 md:mt-8" />

        {/* Text */}
        <div className="flex flex-col gap-2 md:gap-4">
          <p
            id="p1"
            ref={p1Ref}
            className={`text-base sm:text-xl md:text-2xl lg:text-3xl md:max-w-[80%] lg:max-w-[70%] font-kngb text-white/70 duration-500 ${
              visibleElements.p1
                ? "ml-0 opacity-100"
                : " md:ml-[-80px] opacity-0"
            }`}
          >
            I was born in Brazil, in 2003, but I currently reside on the US.
          </p>

          <p
            id="p2"
            ref={p2Ref}
            className={`text-base sm:text-xl md:text-2xl lg:text-3xl md:max-w-[80%] lg:max-w-[70%] font-kngb text-white/70 duration-500 ${
              visibleElements.p2
                ? "ml-0 opacity-100"
                : " md:ml-[-80px] opacity-0"
            }`}
          >
            I have been developing since 2018, exploring many languages such as
            Java, PHP, and JavaScript.
          </p>

          <p
            id="p3"
            ref={p3Ref}
            className={`text-base sm:text-xl md:text-2xl lg:text-3xl md:max-w-[80%] lg:max-w-[70%] font-kngb text-white/70 duration-500 ${
              visibleElements.p3
                ? "ml-0 opacity-100"
                : " md:ml-[-80px] opacity-0"
            }`}
          >
            I started developing sneaker bots, using scrapers/requests, and it
            led me to web development.
          </p>

          <p
            id="p4"
            ref={p4Ref}
            className={`text-base sm:text-xl md:text-2xl lg:text-3xl md:max-w-[80%] lg:max-w-[70%] font-kngb text-white/70 duration-500 ${
              visibleElements.p4
                ? "ml-0 opacity-100"
                : " md:ml-[-80px] opacity-0"
            }`}
          >
            Now I am studying Computer Science at Wentworth Institute of
            Technology, located in Boston, Massachusetts.
          </p>

          <p
            id="p5"
            ref={p5Ref}
            className={`text-base sm:text-xl md:text-2xl lg:text-3xl md:max-w-[80%] lg:max-w-[70%] font-kngb text-white/70 duration-500 ${
              visibleElements.p5
                ? "ml-0 opacity-100"
                : "md:ml-[-80px] opacity-0 "
            }`}
          >
            In my free time I like to practice tennis, explore cultural recipes,
            or listen to my playlists...
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
