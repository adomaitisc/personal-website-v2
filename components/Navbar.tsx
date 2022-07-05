import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = ({ onClick, height, position }: any | undefined) => {
  return (
    <>
      <div className="w-1/2 fixed right-0 top-0 bottom-0 h-screen flex items-center justify-center font-kngb">
        <div className="text-base text-white relative my-0 mx-0 after:absolute after:w-[2px] after:bg-zinc-200 after:top-6 after:bottom-4  after:mr-1">
          <div className="mb-8 px-4 py-3 hover:text-gray-300 cursor-pointer relative after:absolute after:w-[14px] after:h-[14px] after:left-[-6px] after:z-[1] after:bg-zinc-800 after:border-white after:border-2 after:top-[18px] after:rounded-[50%]">
            <Link
              style={{ padding: "1rem 0.75rem" }}
              activeClass="text-gray-400"
              to="hello"
              spy={true}
              smooth={true}
              duration={300}
            >
              introduction
            </Link>
          </div>

          <div className="mb-8 px-4 py-3 hover:text-gray-300 cursor-pointer relative after:absolute after:w-[14px] after:h-[14px] after:left-[-6px] after:z-[1] after:bg-zinc-800 after:border-white after:border-2 after:top-[18px] after:rounded-[50%]">
            <Link
              style={{ padding: "1rem 0.75rem" }}
              activeClass="text-gray-400"
              to="projects"
              spy={true}
              smooth={true}
              duration={300}
            >
              some projects
            </Link>
          </div>

          <div className="mb-8 px-4 py-3 hover:text-gray-300 cursor-pointer relative after:absolute after:w-[14px] after:h-[14px] after:left-[-6px] after:z-[1] after:bg-zinc-800 after:border-white after:border-2 after:top-[18px] after:rounded-[50%]">
            <Link
              style={{ padding: "1rem 0.75rem" }}
              activeClass="text-gray-400"
              to="about"
              spy={true}
              smooth={true}
              duration={300}
            >
              about me
            </Link>
          </div>

          <div className="px-4 py-3 hover:text-gray-300 cursor-pointer relative after:absolute after:w-[14px] after:h-[14px] after:left-[-6px] after:z-[1] after:bg-zinc-800 after:border-white after:border-2 after:top-[18px] after:rounded-[50%]">
            <Link
              style={{ padding: "1rem 0.75rem" }}
              activeClass="text-gray-400"
              to="contact"
              spy={true}
              smooth={true}
              duration={300}
            >
              contact me
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

Navbar.displayName = "Navbar";

export default Navbar;
