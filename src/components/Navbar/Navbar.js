import React from "react";
import "./Navbar.css";
import { ReactComponent as FBIcon } from "../../assets/fb-round.svg";
import { ReactComponent as InstaIcon } from "../../assets/instagram-round.svg";

function Navbar() {
  return (
    <>
      <nav className="navBar bg-white z-50 fixed w-screen h-14 md:h-16 p-5 md:pl-36 md:pr-36 flex items-center place-content-between">
        <div className="navbar__leftContainer flex items-center">
          <div className="navBar__branding font-semibold text-xl">TastyHub</div>
          <ul className="navBar__links flex pointer-events-none opacity-0 md:pointer-events-auto md:opacity-100 md:ml-20">
            <li>
              <a href="#" className="navBar__link">
                Menu
              </a>
            </li>
            <li>
              <a href="#" className="navBar__link">
                Order Now
              </a>
            </li>
            <li>
              <a href="#" className="navBar__link">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar__rightContainer">
          <a href="#" className="">
            <FBIcon style={{ height: 30, width: 30 }} />
          </a>
          <a href="#" className="">
            <InstaIcon style={{ height: 30, width: 30 }} />
          </a>
        </div>
      </nav>
      <div className="h-14 md:h-16"></div>
    </>
  );
}

export default Navbar;
