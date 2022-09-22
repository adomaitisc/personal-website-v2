const About = () => {
  return (
    <div className="w-screen h-screen flex items-center p-[20%]">
      <div className="h-full sm:h-auto sm:max-w-[80%] sm:my-20 flex flex-col items-start justify-center text-left scale-100">
        {/* Title */}
        <h2 className="text-4xl sm:text-3xl font-kngb text-white font-bold">
          A little about me.
        </h2>

        <div className="mt-8 sm:mt-4" />

        {/* Text */}
        <p className="text-2xl max-w-[60%] sm:text-base font-kng text-zinc-400">
          <span className="font-kngb text-white">I was born in Brazil,</span> in
          2003. and recently moved to the US
          <br />
          <br />
          <span className="font-kngb text-white">
            I have been developing since 2018,
          </span>{" "}
          trying
          <br />
          many languages like Java, PHP, and JavaScript.
          <br />
          <br />
          <span className="font-kngb text-white">
            I started developing sneaker bots,
          </span>{" "}
          using scrapers/requests, and it gave me a lot of intial sense and
          direction.
          <br />
          <br />
          <span className="font-kngb text-white">
            Now I am studying Computer Science
          </span>{" "}
          at Wentworth Institute of Technology, located in Boston,
          Massachusetts.
          <br />
          <br />
          <span className="font-kngb text-white">In my free time,</span> I could
          start a new project, cook a nice dinner, listen to my playlists...
        </p>
      </div>
    </div>
  );
};

export default About;
