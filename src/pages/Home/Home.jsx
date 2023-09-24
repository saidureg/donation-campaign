import Banner from "../../components/Header/Banner/Banner";
import Navbar from "../../components/Header/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <div
        className="hero "
        style={{
          backgroundImage: "url(banner.png)",
        }}
      >
        <div className="hero-overlay bg-[#FFFFFFF2]"> </div>
        <div>
          <Navbar></Navbar>
          <Banner></Banner>
        </div>
      </div>
    </div>
  );
};

export default Home;
