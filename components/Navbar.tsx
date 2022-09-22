import { Link } from "react-scroll";
import Image from "next/image";

const Navbar = ({ onClick, height, position }: any | undefined) => {
  return (
    <>
      <div className="py-4 h-20 w-screen sm:w-full sm:py-8 fixed top-0 flex flex-row items-center justify-center font-kngb bg-black/70 backdrop-blur-sm">
        <div className="left-24 absolute cursor-pointer">
          <Link
            style={{ padding: "1rem 0.75rem" }}
            to="hello"
            spy={true}
            smooth={true}
            duration={300}
          >
            <Image src="/icons/Logo.svg" width={42} height={20} alt="Logo" />
          </Link>
        </div>

        <div className="right-0 absolute cursor-pointer invisible sm:visible">
          <div
            className="py-1 px-[0.75rem]"
            style={{ padding: "1rem 0.75rem" }}
          >
            <Image src="/icons/Menu.svg" width={19} height={14} alt="Menu" />
          </div>
        </div>

        <div className="px-4 py-3 hover:text-gray-300 cursor-pointer relative sm:hidden">
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

        {/* <div className="px-4 py-3 hover:text-gray-300 cursor-pointer relative sm:hidden">
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

        <div className="px-4 py-3 hover:text-gray-300 cursor-pointer relative sm:hidden">
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

        <div className="px-4 py-3 hover:text-gray-300 cursor-pointer relative sm:hidden">
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

        <div className="px-4 py-3 hover:text-gray-300 cursor-pointer relative sm:hidden">
          <a
            style={{ padding: "1rem 0.75rem" }}
            href="https://github.com/adomaitisc/personal-website-v2/blob/main/public/resume.pdf"
            rel="noreferrer"
            target="_blank"
          >
            download cv
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
