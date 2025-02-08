import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 bg-black text-white   font-semibold pt-[40px]">
        <div className="flex flex-col w-[150px] text-[silver] cursor-pointer ml-10">
          <span className=" text-white">
            Yummy <span className="text-[#fbc531]">Food</span>
          </span>
          <span>© 2024 Bundl Technologies Pvt. Ltd</span>
        </div>
        <div className="flex flex-col gap-5 text-[silver] cursor-pointer">
          <span className="text-white">Company</span>
          <span className="hover:text-white duration-[0.2s] transition-colors">
            <Link to={"/"}>Home</Link>
          </span>
          <span className="hover:text-white duration-[0.2s] transition-colors">
            <Link to={"/about"}>About US</Link>
          </span>
          <span className="hover:text-white duration-[0.2s] transition-colors">
            <Link to={"/ourFood"}>Our Food</Link>
          </span>
        </div>
        <div className="flex flex-col text-[silver] cursor-pointer">
          <span className="text-white">Contact us</span>
          <span className="hover:text-white duration-[0.2s] transition-colors">
            Help and Support
          </span>
          <span className="hover:text-white duration-[0.2s] transition-colors">
            Partner with us
          </span>
          <span className="hover:text-white duration-[0.2s] transition-colors">
            Ride with us
          </span>
          <div className="flex w-full h-[200px] flex-col mt-[50px]">
            <div className="flex flex-col gap-3 cursor-pointer">
              <span className="text-white">Legal</span>
              <span className="hover:text-white duration-[0.2s] transition-colors">
                Term & Conditions
              </span>
              <span className="hover:text-white duration-[0.2s] transition-colors">
                Cookie Policy
              </span>
              <span className="hover:text-white duration-[0.2s] transition-colors">
                Privacy Policy
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 cursor-pointer text-[silver]">
          <span className="text-white">We Deliver to :</span>
          <span className="hover:text-white duration-[0.2s] transition-colors">
            Banglore
          </span>
          <span className="hover:text-white duration-[0.2s] transition-colors">
            Gurgaon
          </span>
          <span className="hover:text-white duration-[0.2s] transition-colors">
            Hydrabad
          </span>
          <span className="hover:text-white duration-[0.2s] transition-colors">
            Delhi
          </span>
          <span className="hover:text-white duration-[0.2s] transition-colors">
            Mumbai
          </span>
          <span className="hover:text-white duration-[0.2s] transition-colors">
            Pune
          </span>
        </div>
      </div>
    </>
  );
};
export default Footer;
