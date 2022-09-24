import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Contact = () => {
  const [visibleElements, setVisibleElements] = useState({
    title: false,
    p1: false,
    p2: false,
    p3: false,
    social: false,
  });

  const titleRef = useRef<HTMLHeadingElement>(null);
  const p1Ref = useRef<HTMLParagraphElement>(null);
  const p2Ref = useRef<HTMLParagraphElement>(null);
  const p3Ref = useRef<HTMLParagraphElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

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
    observer.observe(socialRef.current!);
  }, []);

  return (
    <div className="h-full flex justify-center items-center scale-100">
      <div className="h-full w-full md:px-[10%] xl:px-[20%] flex flex-col items-start justify-center text-left">
        {/* Title */}
        <h2
          id="title"
          ref={titleRef}
          className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-kngb text-violet-500/70 duration-500 ${
            visibleElements.title
              ? "ml-0 opacity-100"
              : " md:ml-[-80px] opacity-0"
          }`}
        >
          Send me a message.
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
            Email or Phone me if you decide to invite me for an interview, or
            discuss a potential project.
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
            You can either message me on any social platform, and I will be
            happy to get back to you.
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
            For hiring purposes, there is a link to my resume at the top of the
            page, and it has been recently updated.
          </p>
        </div>

        <div className="mt-8" />

        {/* Social */}
        <div className="flex flex-col md:flex-row text-base md:text-xl font-kngb gap-4 md:gap-8 opacity-70 duration-500">
          <div className="flex flex-col items-start gap-4 md:gap-2 ">
            <div
              ref={socialRef}
              id="social"
              className={`flex flex-row items-center justify-center gap-2 hover:text-zinc-400 duration-500 ${
                visibleElements.social
                  ? "ml-0 opacity-100"
                  : " md:ml-[-80px] opacity-0"
              }`}
            >
              <Image
                src="/icons/Mail.svg"
                width={24}
                height={24}
                alt="Mail Icon"
              />
              <a
                href="mailto:adomaitisc@wit.edu"
                rel="noreferrer"
                target="_blank"
              >
                adomaitisc@wit.edu
              </a>
            </div>
            <div
              ref={socialRef}
              id="social"
              className={`flex flex-row items-center justify-center gap-2 hover:text-zinc-400 duration-500 ${
                visibleElements.social
                  ? "ml-0 opacity-100"
                  : " md:ml-[-80px] opacity-0"
              }`}
            >
              <Image
                src="/icons/Phone.svg"
                width={24}
                height={24}
                alt="Phone Icon"
              />
              617-992-6053
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 md:gap-2">
            {/* <div className="flex flex-row items-center justify-center gap-2">
              <Image
                src="/icons/Discord.svg"
                width={16}
                height={16}
                alt="Discord Icon"
              />
              adomaitisc#8388
            </div> */}
            {/* <div className="flex flex-row items-center justify-center gap-2">
              <Image
                src="/icons/Instagram.svg"
                width={16}
                height={16}
                alt="Instagram Icon"
              />
              @adomaitiscaua
            </div> */}
            <div
              ref={socialRef}
              id="social"
              className={`flex flex-row items-center justify-center gap-2 hover:text-zinc-400 duration-500 ${
                visibleElements.social
                  ? "ml-0 opacity-100"
                  : " md:ml-[-80px] opacity-0"
              }`}
            >
              <Image
                src="/icons/LinkedIn.svg"
                width={20}
                height={20}
                alt="LinkedIn Icon"
              />
              <a
                href="https://www.linkedin.com/in/cauaadomaitis/"
                rel="noreferrer"
                target="_blank"
              >
                Cauã Adomaitis
              </a>
            </div>
            <div
              ref={socialRef}
              id="social"
              className={`flex flex-row items-center justify-center gap-2 hover:text-zinc-400 duration-500 ${
                visibleElements.social
                  ? "ml-0 opacity-100"
                  : " md:ml-[-80px] opacity-0"
              }`}
            >
              <Image
                src="/icons/Github.svg"
                width={20}
                height={20}
                alt="Github Icon"
              />
              <a
                href="https://github.com/adomaitisc"
                rel="noreferrer"
                target="_blank"
              >
                adomaitisc
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
