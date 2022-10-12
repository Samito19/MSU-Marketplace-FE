import axios from "axios";

import RedStarIcon from "../assets/red-star-icon.svg";
import NewIcon from "../assets/new-icon.svg";

import ListingCard from "../components/ListingCard";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import ListingCardLoading from "../components/ListingCardLoading";
import NavBar from "../components/NavBar";

function ExplorePage() {
  const [featuredListings, setFeaturedListings] = useState<
    {
      listing_uuid: string;
      title: string;
      description: string;
      price: number;
      author_uuid: string;
    }[]
  >([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get("http://localhost:3001/featured-listings")
      .then((featuredListings) => {
        setFeaturedListings(featuredListings.data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="h-screen w-screen flex flex-col max-w-[100rem]">
       <NavBar/>
        <div className="h-[100%] w-full overflow-y-scroll overflow-x-hidden">
          <section
            id="feature-section"
            className="h-[32rem] w-full mt-[1.5rem]"
          >
            <div className="h-[4.5rem] w-full flex items-center">
              <h1 className="font-medium text-[2em] ml-8">Featured</h1>
              <img src={RedStarIcon} alt="" className="ml-1" />
            </div>

            <div className="h-[25rem] w-full justify-start bg-msu-red flex items-center lg:justify-center gap-12 px-9 overflow-x-scroll no-scrollbar">
              {isLoading
                ? [1, 2, 3, 4].map((listing, index) => {
                    return <ListingCardLoading key={index} />;
                  })
                : featuredListings.map((listing, index) => {
                    return (
                      <ListingCard
                        key={index}
                        image={
                          "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFjYm9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                        }
                        title={listing.title}
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

            <div className="h-[25rem] w-screem flex gap-8 items-center overflow-x-scroll px-10 no-scrollbar">
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
                {
                  id: 3,
                  image:
                    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFjYm9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                  title: "Macbook Air M1 -256GB",
                  rating: 4,
                  description: "This is a nice Macbook pro 2022",
                  price: "699",
                },
                {
                  id: 4,
                  image:
                    "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGlwaG9uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                  title: "Iphone Pro Max Gold -256GB",
                  rating: 4,
                  description: "This is a nice Macbook pro 2022",
                  price: "499",
                },
                {
                  id: 5,
                  image:
                    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFjYm9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                  title: "Macbook Air M1 -256GB",
                  rating: 4,
                  description: "This is a nice Macbook pro 2022",
                  price: "699",
                },
                {
                  id: 6,
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
