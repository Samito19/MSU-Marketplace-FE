import { useNavigate } from "react-router-dom";

import MSULogo from "../assets/msu-logo.svg";
import HamburgerMenu from "../assets/hamburger-menu.svg";


function NavBar() {
  const navigate = useNavigate();

  return (
    <header className="h-[4.5rem] w-full shadow-header flex items-center z-10 bg-white">
    <img
      onClick={() => {
        navigate("/", { replace: false });
      }}
      src={MSULogo}
      alt=""
      className="ml-[1.5rem] h-[3rem] cursor-pointer"
    />
    <img
      src={HamburgerMenu}
      alt=""
      className="ml-auto mr-5 lg:hidden h-[3rem]"
    />
    <div className="hidden ml-[1.5rem] h-full w-[18rem] lg:flex justify-center gap-4 items-center">
      <span className="font text-[1.05em] font-medium h-full flex items-center border-b-4 px-4 border-msu-red cursor-pointer">
        Explore
      </span>
      <span className="font text-[1.05em] font-medium h-full flex items-center border-b-4 px-4 border-white cursor-pointer">
        Categories
      </span>
    </div>
    <button
      onClick={() => {
        navigate("/login", { replace: false });
      }}
      className="hidden lg:block ml-auto font-medium text-[1em] hover:text-msu-red transition-all cursor-pointer"
    >
      Log In
    </button>
    <button
      onClick={() => {
        navigate("/", { replace: false });
      }}
      className="hidden lg:block ml-5 mr-10 font-medium text-[0.9em] py-[0.25rem] px-4 rounded-[5px] text-white bg-msu-red hover:bg-white border-2 border-msu-red hover:text-msu-red transition-all"
    >
      Register
    </button>
  </header>
  );
}

export default NavBar;
