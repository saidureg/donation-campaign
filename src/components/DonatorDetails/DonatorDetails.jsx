import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DonatorDetails = ({ donator }) => {
  const {
    id,
    picture,
    title,
    category,
    price,
    category_bg,
    card_bg_color,
    text_color,
  } = donator;
  return (
    <div>
      <div
        style={{ background: card_bg_color }}
        className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-clip-border shadow-md"
      >
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-clip-border">
          <img
            src={picture}
            alt={title}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <h6 className="mb-4 text-sm leading-relaxed tracking-normal antialiased">
            <span
              style={{ background: category_bg, color: text_color }}
              className="py-2 px-3 rounded-md"
            >
              {category}
            </span>
          </h6>
          <h4 className="mb-2 text-2xl text-[#0B0B0B] font-semibold leading-snug tracking-normal antialiased">
            {title}
          </h4>
          <p
            style={{ color: text_color }}
            className="mb-8 font-semibold leading-relaxed antialiased"
          >
            ${price}.00
          </p>
          <Link to={`/donation/${id}`}>
            <button
              style={{ background: text_color }}
              className="rounded-lg py-3 px-4 text-white text-lg font-semibold uppercase"
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
