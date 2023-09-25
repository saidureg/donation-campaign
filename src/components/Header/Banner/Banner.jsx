const Banner = () => {
  return (
    <div className="max-w-[1320px] mx-auto">
      <div className="hero-content text-center text-neutral-content h-[70vh]">
        <div>
          <h1 className="mb-8 text-5xl text-[#0B0B0B] font-bold">
            I Grow By Helping People In Need
          </h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search here...."
              className="input md:w-full max-w-md text-[#0B0B0B66]"
            />
            <button className="py-3 md:py-3 md:px-5 bg-[#FF444A] rounded-r-lg text-white absolute -ml-[88px] md:-ml-32">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
