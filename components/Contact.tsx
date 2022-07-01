import Image from "next/image";

const Contact = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col items-end justify-center text-right scale-110">
        {/* Title */}
        <h1 className="text-2xl font-kngb leading-2xl text-white font-bold">
          Don't be afraid, hit me up!
        </h1>

        <div className="mt-8" />

        {/* Text */}
        <h1 className="text-base font-kng text-zinc-400">
          <span className="font-kngb text-white">
            If you wish to start your long-dreamed project,
          </span>
          <br />
          or if you want to clear some questions.
          <br />
          <br />
          <span className="font-kngb text-white">For casual purposes,</span> you
          can ‘dm’ me on any
          <br />
          social network I have down here.
          <br />
          <br />
          <span className="font-kngb text-white">
            Now, if you are serious,
          </span>{" "}
          you can email me so we
          <br />
          can schedule a meeting, or perhaps a call.
        </h1>

        <div className="mt-8" />

        {/* Social */}
        <div className="flex flex-row text-base text-white font-kng gap-8">
          <div className="flex flex-col items-start gap-2">
            <div className="flex flex-row items-center justify-center gap-2">
              <Image src="/icons/Mail.svg" width={20} height={20} />
              adomaitisc@wit.edu
            </div>
            <div className="flex flex-row items-center justify-center gap-2">
              <Image src="/icons/Phone.svg" width={20} height={20} />
              +55 11 97300-4230
            </div>
          </div>
          <div className="flex flex-col items-start gap-2">
            <div className="flex flex-row items-center justify-center gap-2">
              <Image src="/icons/Discord.svg" width={16} height={16} />
              adomaitisc#8388
            </div>
            <div className="flex flex-row items-center justify-center gap-2">
              <Image src="/icons/Instagram.svg" width={16} height={16} />
              @adomaitiscaua
            </div>
            <div className="flex flex-row items-center justify-center gap-2">
              <Image src="/icons/LinkedIn.svg" width={16} height={16} />
              Cauã Adomaitis
            </div>
            <div className="flex flex-row items-center justify-center gap-2">
              <Image src="/icons/Github.svg" width={16} height={16} />
              adomaitisc
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
