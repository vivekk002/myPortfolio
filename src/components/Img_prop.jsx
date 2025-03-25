const Img_prop = ({ img, label }) => {
  return (
    <>
      <div
        className="w-[110px] max-sm:w-[75px] h-[110px] max-sm:h-[75px] shadow-xl shadow-slate-300 
      dark:shadow-lg dark:shadow-blue-500/50 bg-gradient-to-bl 
      from-[#ccc] to-[#eee] dark:from-[#051937] dark:to-[#222] rounded-full
       place-content-center flex flex-col items-center translate-x-[100px] max-sm:translate-x-1 
       hover:scale-150 transform transition duration-500 ease-in-out "
      >
        <img
          src={img}
          alt="html"
          className="max-sm:h-[40px] h-[40px] cursor-pointer text-center"
        />
        <span className="text-[#00040f] dark:text-slate-300 text-center font-bold text-sm transform transition duration-500 ease-in-out">
          {label}
        </span>
      </div>
    </>
  );
};
export default Img_prop;
