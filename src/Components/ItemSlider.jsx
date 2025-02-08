import { topPicks } from "../Data/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const ItemSlider = ({ handelcartCount }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="w-[90%] mx-auto ">
        <h2 className="font-bold text-3xl pl-12">What's on your mind ?</h2>
        <div className="py-12">
          <Slider {...settings}>
            {topPicks.map((item, index) => (
              <div className="bg-[white] rounded-md" key={index}>
                <div className="flex justify-center items-center rounded-t-xl">
                  <img
                    src={item.img}
                    alt=""
                    className="w-[200px] rounded-full h-[200px] object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center items-center gap-2 p-4">
                  <p className="text-xl font-semibold uppercase">
                    {item.title}
                  </p>
                  <p className="text-xl font-semibold uppercase">
                    {item.price}
                  </p>
                  <button
                    onClick={handelcartCount}
                    className="bg-black w-[100px] text-white rounded-md my-3 py-[10px] text-[15px] hover:text-[#fbc531] font-semibold transition-colors duration-[0.3s]"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};
export default ItemSlider;
