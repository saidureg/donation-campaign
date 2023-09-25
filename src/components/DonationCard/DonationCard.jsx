import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const DonationCard = ({ donation }) => {
  const { id, picture, category, title } = donation;
  return (
    <div>
      <Link to={`/donation/${id}`}>
        <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 overflow-hidden rounded-t-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            <img className="w-full" src={picture} alt={title} />
          </div>
          <div className="p-6">
            <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {category}
            </h4>
            <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
              {title}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
DonationCard.propTypes = {
  donation: PropTypes.object,
};

export default DonationCard;
