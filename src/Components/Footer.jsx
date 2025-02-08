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
          <span>About</span>
          <span>Careers</span>
          <span>Team</span>
          <span>Yummy One</span>
          <span>Yummy Instamart</span>
          <span>Yummy Genie</span>
        </div>
        <div className="flex flex-col text-[silver] cursor-pointer">
          <span className="text-white">Contact us</span>
          <span>Help and Support</span>
          <span>Partner with us</span>
          <span>Ride with us</span>
          <div className="flex w-full h-[200px] flex-col mt-[50px]">
            <div className="flex flex-col gap-3 cursor-pointer">
              <span className="text-white">Legal</span>
              <span>Term & Conditions</span>
              <span>Cookie Policy</span>
              <span>Privacy Policy</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 cursor-pointer text-[silver]">
          <span className="text-white">We Deliver to :</span>
          <span>Banglore</span>
          <span>Gurgaon</span>
          <span>Hydrabad</span>
          <span>Delhi</span>
          <span>Mumbai</span>
          <span>Pune</span>
        </div>
      </div>
    </>
  );
};
export default Footer;
