const Exp_prop = (props) => {
  return (
    <>
      <div
        className="shadow-lg rounded-3xl bg-gradient-to-br from-primary/10 to-primary-accent/10 dark:from-primary/30 dark:to-primary-accent/30 h-[490px] max-sm:h-[450px] p-8 
        transition-all duration-300 ease-smooth
        hover:shadow-xl hover:scale-[1.02] hover:from-primary/20 hover:to-primary-accent/20 dark:hover:from-primary/40 dark:hover:to-primary-accent/40
        active:scale-[0.98]"
      >
        <div className="HEADER flex">
          <div className="max-w-[80px] pr-3 mr-3">
            <img
              src={props.img}
              alt=""
              className="transition-transform duration-300 hover:scale-110"
            />
          </div>

          <div className="max-w-[125px]">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r inline from-primary to-primary-accent dark:from-primary-accent dark:to-white text-2xl tracking-wide font-semibold">
              {props.title}
            </h1>
            <p className="text-primary-dark dark:text-white text-lg my-2">
              {props.subtitle}
            </p>
            <p className="italic text-sm text-primary-dark/70 dark:text-white/70">
              {props.date}
            </p>
          </div>
        </div>
        <p className="text-sm text-primary-dark/70 dark:text-white/70 mt-5 p-1 leading-5">
          {props.para}
        </p>
      </div>
    </>
  );
};
export default Exp_prop;
