import { mealData } from "../Data/data";
const OurFood = ({ handelcartCount }) => {
  return (
    <>
      <div className="w-[90%] mx-auto mt-[70px]">
        <div>
          <h2 className="text-center text-[#0097e6] text-3xl font-bold py-10 ">
            Our Food
          </h2>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 py-6 gap-2 ">
          {mealData.map((meal, index) => (
            <div
              className="flex justify-center flex-col items-center relative "
              key={index}
            >
              <div>
                <img
                  src={meal.image}
                  alt=""
                  className="w-[200px] h-[200px] rounded-lg object-cover "
                />
              </div>
              <div className="bg-black absolute top-0 w-[200px] h-[200px]  rounded-lg  opacity-40"></div>
              <div className="flex justify-center py-2 px-4 flex-col items-center">
                <p className="text-xl font-semibold uppercase">{meal.name}</p>
                <p className="text-xl font-semibold uppercase">{meal.price}</p>
                <button
                  className="bg-black w-[100px] text-white rounded-md my-3 py-[10px] text-[15px] hover:text-[#fbc531] font-semibold transition-colors duration-[0.3s]"
                  onClick={handelcartCount}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default OurFood;
