import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import Navbar from "../../components/Header/Navbar/Navbar";
import DonationCard from "../../components/DonationCard/DonationCard";

const Home = () => {
  const donations = useLoaderData();

  return (
    <div>
      <div
        className="hero"
        style={{
          backgroundImage: "url(banner.png)",
        }}
      >
        <div className="hero-overlay bg-[#FFFFFFF2]"> </div>
        <div className="max-w-[1320px] mx-auto">
          <Navbar></Navbar>
          <Banner></Banner>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 my-12 max-w-[1320px] mx-auto px-5 lg:px-0">
        {donations.map((donation, idx) => (
          <DonationCard key={idx} donation={donation}></DonationCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
