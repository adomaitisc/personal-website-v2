const Navbar = () => {
  return (
    <>
      <div className="w-full h-full flex items-center justify-center font-kngb">
        <div className="text-base text-white relative my-0 mx-0 after:absolute after:w-[2px] after:bg-white after:top-6 after:bottom-4  after:mr-1">
          <div className="mb-8 py-3 px-4 relative after:absolute after:w-[14px] after:h-[14px] after:left-[-6px] after:z-[1] after:bg-gray-500 after:border-white after:border-2 after:top-[18px] after:rounded-[50%]">
            introduction
          </div>
          <div className="mb-8 py-3 px-4 relative after:absolute after:w-[14px] after:h-[14px] after:left-[-6px] after:z-[1] after:bg-gray-500 after:border-white after:border-2 after:top-[18px] after:rounded-[50%]">
            some projects
          </div>
          <div className="mb-8 py-3 px-4 relative after:absolute after:w-[14px] after:h-[14px] after:left-[-6px] after:z-[1] after:bg-gray-500 after:border-white after:border-2 after:top-[18px] after:rounded-[50%]">
            more about me
          </div>
          <div className="py-3 px-4 relative after:absolute after:w-[14px] after:h-[14px] after:left-[-6px] after:z-[1] after:bg-gray-500 after:border-white after:border-2 after:top-[18px] after:rounded-[50%]">
            contact me
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
