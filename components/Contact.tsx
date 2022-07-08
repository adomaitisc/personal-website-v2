import Image from "next/image";

const Contact = (props: { id: string }) => {
  return (
    <>
      <div
        id={props.id}
        className="h-screen sm:h-auto sm:my-20 sm:max-w-[80%] flex flex-col items-start justify-center text-left scale-100"
      >
        {/* Title */}
        <h2 className="text-4xl sm:text-3xl font-kngb leading-2xl text-white font-bold">
          {"Don't be afraid, hit me up!"}
        </h2>

        <div className="mt-8 sm:mt-4" />

        {/* Text */}
        <h1 className="text-2xl sm:text-base font-kng text-zinc-400">
          <span className="font-kngb text-white">
            If you wish to start your long-dreamed project,
          </span>
          <br />
          or if you want to clear some questions.
          <br />
          <br />
          <span className="font-kngb text-white">For casual purposes,</span> you
          {" can 'dm' me on any"}
          <br />
          social network I have down here.
          <br />
          <br />
          <span className="font-kngb text-white">
            Now, if you are serious,
          </span>{" "}
          you can email me so we
          <br />
          can schedule a meeting or something.
        </h1>

        <div className="mt-8" />

        {/* Social */}
        <div className="flex flex-row text-xl sm:flex-col sm:text-sm sm:gap-3 text-zinc-300 font-kngb gap-8">
          <div className="flex flex-col items-start gap-2 sm:gap-3">
            <div className="flex flex-row items-center justify-center gap-2">
              <Image
                src="/icons/Mail.svg"
                width={20}
                height={20}
                alt="Mail Icon"
              />
              adomaitisc@wit.edu
            </div>
            <div className="flex flex-row items-center justify-center gap-2">
              <Image
                src="/icons/Phone.svg"
                width={20}
                height={20}
                alt="Phone Icon"
              />
              +55 11 97300-4230
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 sm:gap-3">
            <div className="flex flex-row items-center justify-center gap-2">
              <Image
                src="/icons/Discord.svg"
                width={16}
                height={16}
                alt="Discord Icon"
              />
              adomaitisc#8388
            </div>
            <div className="flex flex-row items-center justify-center gap-2">
              <Image
                src="/icons/Instagram.svg"
                width={16}
                height={16}
                alt="Instagram Icon"
              />
              @adomaitiscaua
            </div>
            <div className="flex flex-row items-center justify-center gap-2">
              <Image
                src="/icons/LinkedIn.svg"
                width={16}
                height={16}
                alt="LinkedIn Icon"
              />
              Cauã Adomaitis
            </div>
            <div className="flex flex-row items-center justify-center gap-2">
              <Image
                src="/icons/Github.svg"
                width={16}
                height={16}
                alt="Github Icon"
              />
              adomaitisc
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
