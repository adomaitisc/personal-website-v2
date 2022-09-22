import Image from "next/image";

const Contact = () => {
  return (
    <div className="w-screen h-screen flex items-center p-[20%]">
      <div className="h-full sm:h-auto sm:my-20 sm:max-w-[80%] flex flex-col items-start justify-center text-left scale-100">
        {/* Title */}
        <h2 className="text-4xl sm:text-3xl font-kngb leading-2xl text-white font-bold">
          Send me a message.
        </h2>

        <div className="mt-8 sm:mt-4" />

        {/* Text */}
        <p className="text-2xl max-w-[60%] sm:text-base font-kng text-zinc-400">
          <span className="font-kngb text-white">
            If you wish to start your long-dreamed project,
          </span>{" "}
          or if you want to clear some questions.
          <br />
          <br />
          <span className="font-kngb text-white">For casual purposes,</span> you
          can dm me on any social media I have down here.
          <br />
          <br />
          <span className="font-kngb text-white">
            Now, if you are serious,
          </span>{" "}
          you can email me so we can schedule a meeting or something.
        </p>

        <div className="mt-8" />

        {/* Social */}
        <div className="flex flex-row text-xl sm:flex-col sm:text-sm sm:gap-3 text-zinc-300 font-kngb gap-8">
          <div className="flex flex-col items-start gap-2 sm:gap-3">
            <div className="flex flex-row items-center justify-center gap-2 hover:text-zinc-400">
              <Image
                src="/icons/Mail.svg"
                width={20}
                height={20}
                alt="Mail Icon"
              />
              <a
                href="mailto:adomaitisc@wit.edu"
                rel="noreferer"
                target="_blank"
              >
                adomaitisc@wit.edu
              </a>
            </div>
            <div className="flex flex-row items-center justify-center gap-2 hover:text-zinc-400">
              <Image
                src="/icons/Phone.svg"
                width={20}
                height={20}
                alt="Phone Icon"
              />
              617-992-6053
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 sm:gap-3">
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
            <div className="flex flex-row items-center justify-center gap-2 hover:text-zinc-400">
              <Image
                src="/icons/LinkedIn.svg"
                width={16}
                height={16}
                alt="LinkedIn Icon"
              />
              <a
                href="https://www.linkedin.com/in/cauaadomaitis/"
                rel="noreferer"
                target="_blank"
              >
                Cauã Adomaitis
              </a>
            </div>
            <div className="flex flex-row items-center justify-center gap-2 hover:text-zinc-400">
              <Image
                src="/icons/Github.svg"
                width={16}
                height={16}
                alt="Github Icon"
              />
              <a
                href="https://github.com/adomaitisc"
                rel="noreferer"
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
