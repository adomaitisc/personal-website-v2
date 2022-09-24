import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <>
      <div className="py-4 h-20 w-screen fixed top-0 flex flex-row items-center justify-center font-kngb backdrop-blur-md">
        <div className="md:px-4 py-3 hover:text-gray-300 cursor-pointer relative select-none touch-none">
          <Link
            style={{ padding: "1rem 0.75rem" }}
            activeClass="text-zinc-400"
            to="hello"
            spy={true}
            smooth={true}
            duration={300}
          >
            Home
          </Link>
        </div>

        {/* <div className="md:px-4 py-3 hover:text-gray-300 cursor-pointer relative select-none touch-none">
          <Link
            style={{ padding: "1rem 0.75rem" }}
            activeClass="text-zinc-400"
            to="projects"
            spy={true}
            smooth={true}
            duration={300}
          >
            some projects
          </Link>
        </div> */}

        <div className="md:px-4 py-3 hover:text-gray-300 cursor-pointer relative select-none touch-none">
          <Link
            style={{ padding: "1rem 0.75rem" }}
            activeClass="text-zinc-400"
            to="about"
            spy={true}
            smooth={true}
            duration={300}
          >
            About
          </Link>
        </div>

        <div className="md:px-4 py-3 hover:text-gray-300 cursor-pointer relative select-none touch-none">
          <Link
            style={{ padding: "1rem 0.75rem" }}
            activeClass="text-zinc-400"
            to="contact"
            spy={true}
            smooth={true}
            duration={300}
          >
            Contact
          </Link>
        </div>

        <div className="md:px-4 py-3 text-violet-500 font-kng cursor-pointer relative select-none touch-none animate-pulse hover:animate-none">
          <a
            style={{ padding: "1rem 0.75rem" }}
            href="https://github.com/adomaitisc/personal-website-v2/raw/main/public/resume.pdf"
            rel="noreferrer"
            target="_blank"
          >
            Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
