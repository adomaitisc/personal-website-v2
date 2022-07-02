import { forwardRef, Ref } from "react";

const About = forwardRef((props: {}, ref: Ref<HTMLDivElement>) => (
  <>
    <div
      ref={ref}
      className="w-full h-screen snap-start box-border flex flex-col items-end justify-center text-right scale-110"
    >
      {/* Title */}
      <h1 className="text-2xl font-kngb leading-2xl text-white font-bold">
        {"Here it goes a little about me :)"}
      </h1>

      <div className="mt-8" />

      {/* Text */}
      <h1 className="text-base font-kng text-zinc-400">
        <span className="font-kngb text-white">I was born in Brazil,</span> in
        2003. I am the only
        <br />
        kid, and we moved away from our family.
        <br />
        <br />
        <span className="font-kngb text-white">
          I have been developing since 2018,
        </span>{" "}
        trying
        <br />
        many languages like Python or JavaScript.
        <br />
        <br />
        <span className="font-kngb text-white">
          I started developing sneaker bots,
        </span>{" "}
        using
        <br />
        scrapers/requests, and it gave me a lot
        <br />
        of intial sense and direction.
        <br />
        <br />
        <span className="font-kngb text-white">
          Now I am studying Computer Science
        </span>{" "}
        at
        <br />
        Wentworth Institute of Technology,
        <br />
        located in Boston, Massachusetts.
        <br />
        <span className="text-sm font-kngl text-zinc-100">
          - I am loving here, even with the cons.
        </span>
        <br />
        <br />
        <span className="font-kngb text-white">In my free time,</span> I could
        start a new project,
        <br />
        cook a nice dinner, listen to my playlists...
        <br />
        <span className="text-sm font-kngl text-zinc-100">
          - well, I could write a long list about this.
        </span>
      </h1>
    </div>
  </>
));

About.displayName = "About";

export default About;
