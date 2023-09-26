import { useLoaderData } from "react-router-dom";
import Navbar from "../../components/Header/Navbar/Navbar";
import DonationCard from "../../components/DonationCard/DonationCard";
import { useRef, useState } from "react";

const Home = () => {
  const [filterCategoryCard, setFilterCategoryCard] = useState([]);
  const [isClick, setIsClick] = useState(false);

  const donations = useLoaderData();
  const inputRef = useRef(null);

  const handleSearchBnt = () => {
    setIsClick(true);
    const inputValue = inputRef.current.value.trim().toLowerCase();
    const filterDonationCategory = donations.filter(
      (donation) => donation.category.toLowerCase() === inputValue
    );
    setFilterCategoryCard(filterDonationCategory);
    inputRef.current.value = "";
  };

  return (
    <div>
      <div
        className="hero place-items-stretch"
        style={{
          backgroundImage: "url(banner.png)",
        }}
      >
        <div className="hero-overlay bg-[#FFFFFFF2]"> </div>
        <div>
          <Navbar></Navbar>

          {/* here is banner section */}
          <div className="max-w-[1320px] mx-auto">
            <div className="hero-content text-center text-neutral-content h-[70vh]">
              <div>
                <h1 className="mb-8 text-2xl md:text-4xl lg:text-5xl text-[#0B0B0B] font-bold">
                  I Grow By Helping People In Need
                </h1>
                <div className="relative">
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search here...."
                    className="input w-11/12 md:w-full max-w-md text-[#0B0B0B66]"
                  />
                  <button
                    onClick={handleSearchBnt}
                    className="py-3 px-5 bg-[#FF444A] rounded-r-lg text-white absolute right-4 md:right-[66px] lg:right-[162px]"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* banner section end */}
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 my-12 max-w-[1320px] mx-auto px-5 lg:px-0">
        {isClick
          ? filterCategoryCard.map((donation, idx) => (
              <DonationCard key={idx} donation={donation}></DonationCard>
            ))
          : donations.map((donation, idx) => (
              <DonationCard key={idx} donation={donation}></DonationCard>
            ))}
      </div>
    </div>
  );
};

export default Home;
