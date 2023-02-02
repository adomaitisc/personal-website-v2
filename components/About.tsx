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
          className={`text-xl sm:text-2xl font-kng text-rose-500 duration-500 ${
            visibleElements.title
              ? "ml-0 opacity-100"
              : " md:ml-[-80px] opacity-0"
          }`}
        >
          About me.
        </h2>

        <div className="mt-4" />

        {/* Text */}
        <div className="flex flex-col gap-2 md:gap-4">
          <p
            id="p1"
            ref={p1Ref}
            className={`text-base sm:text-xl md:max-w-[80%] lg:max-w-[70%] font-kng text-zinc-300 duration-500 ${
              visibleElements.p1
                ? "ml-0 opacity-100"
                : " md:ml-[-80px] opacity-0"
            }`}
          >
            Born and raised in Brazil, now living in Boston building my career
            as a fullstack dev.
          </p>

          <p
            id="p2"
            ref={p2Ref}
            className={`text-base sm:text-xl md:max-w-[80%] lg:max-w-[70%] font-kng text-zinc-300 duration-500 ${
              visibleElements.p2
                ? "ml-0 opacity-100"
                : " md:ml-[-80px] opacity-0"
            }`}
          >
            I have been developing since 2018, exploring various languages like
            Go, Java, Python, Javascript, and many more.
          </p>

          <p
            id="p3"
            ref={p3Ref}
            className={`text-base sm:text-xl md:max-w-[80%] lg:max-w-[70%] font-kng text-zinc-300 duration-500 ${
              visibleElements.p3
                ? "ml-0 opacity-100"
                : " md:ml-[-80px] opacity-0"
            }`}
          >
            Now I work with Typescript, usually building React or NextJS apps. I
            am also a TailwindCSS fan - I think it is great to build fast and
            responsive UIs.
          </p>

          <p
            id="p4"
            ref={p4Ref}
            className={`text-base sm:text-xl md:max-w-[80%] lg:max-w-[70%] font-kng text-zinc-300 duration-500 ${
              visibleElements.p4
                ? "ml-0 opacity-100"
                : " md:ml-[-80px] opacity-0"
            }`}
          >
            I study Computer Science and have plans to specialize in Artificial
            Intelligence - still undecided of which field to focus on.
          </p>

          <p
            id="p5"
            ref={p5Ref}
            className={`text-base sm:text-xl md:max-w-[80%] lg:max-w-[70%] font-kng text-zinc-300 duration-500 ${
              visibleElements.p5
                ? "ml-0 opacity-100"
                : "md:ml-[-80px] opacity-0 "
            }`}
          >
            In my free time I code some side projects, play tennis, read a book,
            or cook something - I love to cook!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
