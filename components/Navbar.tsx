import Image from "next/image";
import { Link } from "react-scroll";

import icon from "../public/android-chrome-192x192.png";

const Navbar = () => {
  return (
    <>
      <div className="mt-4 mx-auto w-72 fixed top-0 left-0 right-0 flex items-center justify-center bg-black/40 backdrop-blur-lg rounded-full font-kng text-sm outline outline-1 outline-white/20">
        <div className="md:px-1 py-2 hover:text-gray-300 cursor-pointer select-none touch-none">
          <Link
            style={{ padding: "1rem 0.75rem" }}
            activeClass="text-zinc-400"
            to="hello"
            spy={true}
            smooth={true}
            duration={300}
          >
            Hello
          </Link>
        </div>

        {/* <div className="md:px-1 py-2 hover:text-gray-300 cursor-pointer select-none touch-none">
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

        <div className="md:px-1 py-2 hover:text-gray-300 cursor-pointer select-none touch-none">
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

        <div className="md:px-1 py-2 hover:text-gray-300 cursor-pointer select-none touch-none">
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
        <div className="px-2 py-2 flex select-none touch-none">
          <Image src={icon} alt="icon" width={20} height={20} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
