const text = "Fluid Menu Animation";
const Content = () => {
  return (
    <div className="absolute inset-0 text-bl1 text-6xl font-extrabold flex justify-center items-center max-sm:text-xl">
      {text.split("").map((l, i) => {
        return (
          <span
            key={i}
            className={`inline-block transition-transform duration-500 ease-in-out transform hover:scale-150 hover:text-[#fc75b2] cursor-pointer`}
          >
            {l}
          </span>
        );
      })}
    </div>
  );
};

export default Content;
