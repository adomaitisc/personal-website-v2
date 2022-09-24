import { Link } from "react-scroll";
import Image from "next/image";

const Navbar = ({ onClick, height, position }: any | undefined) => {
  return (
    <>
      <div className="py-4 h-20 w-screen fixed top-0 flex flex-row items-center justify-center font-kngb backdrop-blur-md">
        <div className="right-0 absolute cursor-pointer invisible">
          <div
            className="py-1 px-[0.75rem]"
            style={{ padding: "1rem 0.75rem" }}
          >
            <Image src="/icons/Menu.svg" width={19} height={14} alt="Menu" />
          </div>
        </div>

        <div className="px-4 py-3 hover:text-gray-300 cursor-pointer relative">
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

        {/* <div className="px-4 py-3 hover:text-gray-300 cursor-pointer relative">
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

        <div className="px-4 py-3 hover:text-gray-300 cursor-pointer relative">
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

        <div className="px-4 py-3 hover:text-gray-300 cursor-pointer relative">
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

        <div className="px-4 py-3 text-violet-500 font-kng cursor-pointer relative animate-pulse hover:animate-none">
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
