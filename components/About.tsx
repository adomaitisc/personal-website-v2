const About = (props: { id: string }) => {
  return (
    <>
      <div
        id={props.id}
        className="h-screen sm:h-auto sm:max-w-[80%] sm:my-20 flex flex-col items-start justify-center text-left scale-100"
      >
        {/* Title */}
        <h2 className="text-4xl sm:text-3xl font-kngb text-white font-bold">
          {"Here it goes a little about me :)"}
        </h2>

        <div className="mt-8 sm:mt-4" />

        {/* Text */}
        <p className="text-2xl sm:text-base font-kng text-zinc-400">
          <span className="font-kngb text-white">I was born in Brazil,</span> in
          2003. I am the only
          <br />
          kid, and recently moved into the US.
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
          <span className="text-xl sm:text-sm font-kngl text-zinc-500">
            - I am loving here, even with the cons.
          </span>
          <br />
          <br />
          <span className="font-kngb text-white">In my free time,</span> I could
          start a new project,
          <br />
          cook a nice dinner, listen to my playlists...
          <br />
          <span className="text-xl sm:text-sm font-kngl text-zinc-500">
            - well, I could write a long list about this.
          </span>
        </p>
      </div>
    </>
  );
};

export default About;
