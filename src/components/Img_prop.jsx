const Img_prop = ({ img, label }) => {
  return (
    <>
      <div
        className="w-[110px] max-sm:w-[75px] h-[110px] max-sm:h-[75px] shadow-lg 
        dark:shadow-primary/30 bg-gradient-to-br from-primary/10 to-primary-accent/10 dark:from-primary/30 dark:to-primary-accent/30 rounded-full
        place-content-center flex flex-col items-center translate-x-[100px] max-sm:translate-x-1 
        hover:scale-110 hover:shadow-xl hover:from-primary/20 hover:to-primary-accent/20 dark:hover:from-primary/40 dark:hover:to-primary-accent/40
        transform transition duration-300 ease-in-out"
      >
        <img
          src={img}
          alt={label}
          className="max-sm:h-[40px] h-[40px] cursor-pointer text-center mt-4"
        />
        <span className="text-primary-dark dark:text-white text-center font-bold text-sm mt-2">
          {label}
        </span>
      </div>
    </>
  );
};
export default Img_prop;
