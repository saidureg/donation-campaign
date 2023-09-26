import { useLoaderData } from "react-router-dom";
import Navbar from "../../components/Header/Navbar/Navbar";
import DonationCard from "../../components/DonationCard/DonationCard";
import { useState } from "react";

const Home = () => {
  const [inputCategoryValue, setInputCategoryValue] = useState("");
  const [filterCategoryCard, setFilterCategoryCard] = useState([]);
  const [isClick, setIsClick] = useState(false);

  const donations = useLoaderData();

  const handleSearch = (e) => {
    setInputCategoryValue(e.target.value);
  };

  const handleSearchBnt = () => {
    setIsClick(true);
    const filterDonationCategory = donations.filter(
      (donation) =>
        donation.category.toLowerCase() === inputCategoryValue.toLowerCase()
    );
    setFilterCategoryCard(filterDonationCategory);
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
                <h1 className="mb-8 text-5xl text-[#0B0B0B] font-bold">
                  I Grow By Helping People In Need
                </h1>
                <div className="relative">
                  <input
                    onChange={handleSearch}
                    type="text"
                    placeholder="Search here...."
                    className="input md:w-full max-w-md text-[#0B0B0B66]"
                  />
                  <button
                    onClick={handleSearchBnt}
                    className="py-3 md:py-3 md:px-5 bg-[#FF444A] rounded-r-lg text-white absolute -ml-[88px] md:-ml-32"
                  >
                    Get Started
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
