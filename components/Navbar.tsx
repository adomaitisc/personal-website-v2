const Navbar = ({ onClick }: any | undefined) => {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center font-kngb">
        <div className="text-base text-white relative my-0 mx-0 after:absolute after:w-[2px] after:bg-zinc-200 after:top-6 after:bottom-4  after:mr-1">
          <div className="mb-8 py-3 px-4 relative pointer-events-auto hover:text-gray-600 after:absolute after:w-[14px] after:h-[14px] after:left-[-6px] after:z-[1] after:bg-gray-500 after:border-white after:border-2 after:top-[18px] after:rounded-[50%]">
            <button onClick={onClick} id="hello">
              introduction
            </button>
          </div>
          <div className="mb-8 py-3 px-4 relative pointer-events-auto hover:text-gray-600 after:absolute after:w-[14px] after:h-[14px] after:left-[-6px] after:z-[1] after:bg-gray-500 after:border-white after:border-2 after:top-[18px] after:rounded-[50%]">
            <button onClick={onClick} id="projects">
              some projects
            </button>
          </div>
          <div className="mb-8 py-3 px-4 relative pointer-events-auto hover:text-gray-600 after:absolute after:w-[14px] after:h-[14px] after:left-[-6px] after:z-[1] after:bg-gray-500 after:border-white after:border-2 after:top-[18px] after:rounded-[50%]">
            <button onClick={onClick} id="about">
              about me
            </button>
          </div>
          <div className="py-3 px-4 relative pointer-events-auto hover:text-gray-600 after:absolute after:w-[14px] after:h-[14px] after:left-[-6px] after:z-[1] after:bg-gray-500 after:border-white after:border-2 after:top-[18px] after:rounded-[50%]">
            <button onClick={onClick} id="contact">
              contact me
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
