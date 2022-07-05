const Background = (props: {}) => {
  return (
    <>
      <div
        className="bg-black/50 fixed top-0 left-0 right-0 bottom-0 w-screen h-screen"
        id="bg"
      />
    </>
  );
};

Background.displayName = "Background";

export default Background;
