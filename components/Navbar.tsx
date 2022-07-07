import { Link } from "react-scroll";
import Image from "next/image";

const Navbar = ({ onClick, height, position }: any | undefined) => {
  return (
    <>
      <div className="py-4 w-5/6 fixed top-0 flex flex-row items-center justify-center font-kngb bg-black/70 backdrop-blur-sm">
        <div className="left-0 absolute cursor-pointer group">
          <Link
            style={{ padding: "1rem 0.75rem" }}
            to="hello"
            spy={true}
            smooth={true}
            duration={300}
          >
            <Image src="/icons/Logo.svg" width={50} height={24} alt="Logo" />
          </Link>
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
            hello
          </Link>
        </div>

        <div className="px-4 py-3 hover:text-gray-300 cursor-pointer relative">
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
        </div>

        <div className="px-4 py-3 hover:text-gray-300 cursor-pointer relative">
          <Link
            style={{ padding: "1rem 0.75rem" }}
            activeClass="text-zinc-400"
            to="about"
            spy={true}
            smooth={true}
            duration={300}
          >
            about me
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
            contact me
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
