import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const Hero = () => {
  const [Slider, setSlider] = useState(0);
  const imgData = [
    {
      url: "https://cdn.pixabay.com/photo/2024/04/12/07/10/ai-generated-8691253_1280.jpg",
    },
    {
      url: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg ",
    },
    {
      url: "https://cdn.pixabay.com/photo/2016/12/11/22/41/lasagna-1900529_1280.jpg",
    },
  ];

  const handelplus = () => {
    setSlider(Slider === imgData.length - 1 ? 0 : Slider + 1);
  };
  const handelminus = () => {
    setSlider(Slider === 0 ? imgData.length - 1 : Slider - 1);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handelplus();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [Slider]);

  return (
    <>
      <div className="mt-[110px]">
        <div className="w-[90%] mx-auto h-[75vh] my-5 relative">
          {imgData.map((img, index) => (
            <div
              key={index}
              className={`${Slider === index ? "block" : "hidden"}`}
            >
              <img
                src={img.url}
                alt="Food Images"
                className="w-full h-[75vh] rounded-2xl "
                style={{
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              />
            </div>
          ))}
          <div className="w-[100%] mx-auto h-[75vh] opacity-35 bg-black absolute top-0 left-0 rounded-2xl"></div>
          <div className="absolute w-full top-[46%] text-[15px] md:text-[30px]  font-semibold text-white flex justify-center items-center">
            <p className="text-[2vw] opacity-0 sm:opacity-100">
              Welcome to the world of Testy and Fresh Food
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center w-full px-20 absolute bottom-[30%] text-white opacity-0 sm:opacity-100">
          <FaChevronLeft
            size={"5vw"}
            className="cursor-pointer"
            onClick={handelminus}
          />
          <FaChevronRight
            size={"5vw"}
            className="cursor-pointer"
            onClick={handelplus}
          />
        </div>
      </div>
    </>
  );
};
export default Hero;
