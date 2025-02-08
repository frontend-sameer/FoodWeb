import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
const Header = ({ count }) => {
  const [SideNav, setSideNav] = useState(false);

  return (
    <>
      <div className="fixed w-full h-[20vh] bg-white z-10 top-0">
        <div className=" flex justify-between h-[20vh] py-[25px] px-[25px] text-[18px] font-semibold  border-b relative items-center">
          <div>
            <Link to="/">
              <p className="cursor-pointer">
                Yummy<span className="text-[#fbc531]">Food</span>
              </p>
            </Link>
          </div>

          <div>
            <ul className="sm:flex gap-4 hidden cursor-pointer  ">
              <Link to="/">
                <li className="hover:text-[#fbc531] transition-colors duration-[0.3s] text-[1.7vw]">
                  Home
                </li>
              </Link>
              <Link to="/About">
                <li className="hover:text-[#fbc531] transition-colors duration-[0.3s] text-[1.7vw]">
                  About Us
                </li>
              </Link>
              <Link to="/OurFood">
                <li className="hover:text-[#fbc531] transition-colors duration-[0.3s] text-[1.7vw]">
                  Our Food
                </li>
              </Link>
              <Link to="/SignIn">
                <li className="hover:text-[#fbc531] transition-colors duration-[0.3s] text-[1.7vw]">
                  SignIn
                </li>
              </Link>
            </ul>
          </div>
          {SideNav ? (
            <div className="bg-[#f5f6fa] z-10 w-[300px] absolute top-0 right-0 text-center h-[100vh] flex items-center justify-center">
              <RxCross2
                size={25}
                className="absolute top-3 right-3 cursor-pointer"
                onClick={() => setSideNav(!SideNav)}
              />
              <ul className="flex z-10 gap-12  cursor-pointer flex-col ">
                <Link to="/">
                  <li
                    className="hover:text-[#fbc531]"
                    onClick={() => setSideNav(!SideNav)}
                  >
                    Home
                  </li>
                </Link>
                <Link to="/About">
                  <li
                    className="hover:text-[#fbc531]"
                    onClick={() => setSideNav(!SideNav)}
                  >
                    About Us
                  </li>
                </Link>
                <Link to="/OurFood">
                  <li
                    className="hover:text-[#fbc531]"
                    onClick={() => setSideNav(!SideNav)}
                  >
                    Our Food
                  </li>
                </Link>
                <Link to="/SignIn">
                  <li
                    className="hover:text-[#fbc531]"
                    onClick={() => setSideNav(!SideNav)}
                  >
                    SignIn
                  </li>
                </Link>
              </ul>
            </div>
          ) : (
            ""
          )}
          <div className="flex gap-5 cursor-pointer items-center justify-center">
            <p>
              <GiHamburgerMenu
                size={20}
                className="cursor-pointer block sm:hidden"
                onClick={() => setSideNav(!SideNav)}
              />
            </p>
            <p>
              <span className="ml-2 text-[1.4vw]">{count}</span>
              <FaCartShopping size={20} className="mt-[-6px]" />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
