import { useNavigate } from "react-router-dom";

import MSULogo from "../assets/msu-logo.svg";
import RedStarIcon from "../assets/red-star-icon.svg";
import NewIcon from "../assets/new-icon.svg";
import HamburgerMenu from "../assets/hamburger-menu.svg";


import ListingCard from "../components/ListingCard";
import Footer from "../components/Footer";

function ExplorePage() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center">
      <div className="h-screen w-screen flex flex-col max-w-[100rem] bg-background-circles">
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
          <button onClick={() => {
              navigate("/login", { replace: false });
            }} className="hidden lg:block ml-auto font-medium text-[1em] hover:text-msu-red transition-all cursor-pointer">
            Log In
          </button>
          <button onClick={() => {
              navigate("/", { replace: false });
            }} className="hidden lg:block ml-5 mr-10 font-medium text-[0.9em] py-[0.25rem] px-4 rounded-[5px] text-white bg-msu-red hover:bg-white border-2 border-msu-red hover:text-msu-red transition-all">
            Register
          </button>
        </header>
        <div className="h-[100%] w-full overflow-y-scroll overflow-x-hidden">
          <section
            id="feature-section"
            className="h-[32rem] w-full mt-[1.5rem]"
          >
            <div className="h-[4.5rem] w-full flex items-center">
              <h1 className="font-medium text-[2em] ml-8">Featured</h1>
              <img src={RedStarIcon} alt="" className="ml-1" />
            </div>

            <div className="h-[25rem] w-full justify-start bg-msu-red flex items-center lg:justify-center gap-12 px-9 overflow-x-scroll">
              {[
                {
                  id: 1,
                  image:
                    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFjYm9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                  title: "Macbook Air M1 -256GB",
                  rating: 4,
                  description: "This is a nice Macbook pro",
                  price: "699",
                },
                {
                  id: 2,
                  image:
                    "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGlwaG9uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                  title: "Iphone Pro Max Gold -256GB",
                  rating: 4,
                  description: "This is a nice Macbook pro 2022",
                  price: "499",
                },
                {
                  id: 3,
                  image:
                    "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHZ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
                  title: "Samsung TV 55-inch 2019",
                  rating: 1,
                  description: "Very good TV for sale, barely used and dent free",
                  price: "499",
                },
                {
                  id: 4,
                  image:
                    "https://images.unsplash.com/photo-1515248137880-45e105b710e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW1hY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                  title: "iMac Pro X2019 -256GB",
                  rating: 5,
                  description: "This is a nice Macbook pro 2022",
                  price: "270",
                },
              ].map((listing) => {
                return (
                  <ListingCard
                    key={listing.id}
                    image={listing.image}
                    title={listing.title}
                    rating={listing.rating}
                    description={listing.description}
                    price={listing.price}
                  />
                );
              })}
            </div>
          </section>
          <section id="new-listings-section" className="h-[35rem] w-full">
            <div className="h-[4.5rem] w-full flex items-center">
              <h1 className="font-medium text-[1.9em] ml-8">New Listings</h1>
              <img src={NewIcon} alt="" className="ml-1" />
              <span className="ml-auto mr-8 font-medium underline text-msu-red cursor-pointer">
                See all
              </span>
            </div>

            <div className="h-[25rem] w-screem flex gap-8 items-center overflow-x-scroll px-10">
              {[
                {
                  id: 1,
                  image:
                    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFjYm9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                  title: "Macbook Air M1 -256GB",
                  rating: 4,
                  description: "This is a nice Macbook pro 2022",
                  price: "699",
                },
                {
                  id: 2,
                  image:
                    "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGlwaG9uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                  title: "Iphone Pro Max Gold -256GB",
                  rating: 4,
                  description: "This is a nice Macbook pro 2022",
                  price: "499",
                },
              ].map((listing) => {
                return (
                  <ListingCard
                    key={listing.id}
                    image={listing.image}
                    title={listing.title}
                    rating={listing.rating}
                    description={listing.description}
                    price={listing.price}
                  />
                );
              })}
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default ExplorePage;
