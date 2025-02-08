const Delevery = () => {
  return (
    <>
      <div className="w-full py-16 px-4">
        <h3 className="text-[#fbc531] font-bold text-2xl  text-center">
          Quick Delivery App
        </h3>
        <div className="grid grid-cols-2 w-[70%] mx-auto my-10 gap-10">
          <img
            src="https://www.ycombinator.com/media/?type=post&id=64997&key=user_uploads/741494/6447f895-8407-42e9-83a3-3888319ee070"
            alt=""
            className="w-[550px]"
          />
          <div className="flex flex-col justify-center">
            <p className="font-bold text-[#0097e6] lg:text-[30px]">
              Get The App
            </p>
            <h2 className="lg:text-4xl sm:text-2xl py-2 font-bold">
              Limitless Conveniece on demand
            </h2>
            <button className="bg-black lg:w-[150px] sm:w-[100px] md:w-[100px] w-[50px] text-white rounded-md lg:my-6 lg:py-[15px] lg:text-[20px] sm:text-[15px] md:text-[15px] text-[10px] hover:text-[#0097e6] font-semibold transition-colors duration-[0.3s]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Delevery;
