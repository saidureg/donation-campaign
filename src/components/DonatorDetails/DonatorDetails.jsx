import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DonatorDetails = ({ donator }) => {
  const { picture, title, category, price } = donator;
  return (
    <div>
      <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img
            src={picture}
            alt={title}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
            {category}
          </h6>
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {title}
          </h4>
          <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            ${price}
          </p>
          <Link>
            <button
              className="rounded-lg text-xs font-bold uppercase"
              type="button"
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

DonatorDetails.propTypes = {
  donator: PropTypes.object,
};

export default DonatorDetails;
