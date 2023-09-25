import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const DonationCard = ({ donation }) => {
  const {
    id,
    picture,
    category,
    title,
    card_bg_color,
    text_color,
    category_bg,
  } = donation;
  return (
    <div>
      <Link to={`/donation/${id}`}>
        <div
          className={`relative flex max-w-[24rem] flex-col rounded-xl bg-[${card_bg_color}] text-[${text_color}] bg-clip-border shadow-md`}
        >
          <div className="relative m-0 overflow-hidden rounded-t-xl bg-transparent bg-clip-border shadow-none">
            <img className="w-full" src={picture} alt={title} />
          </div>
          <div className="p-6">
            <h4 className="text-sm font-medium leading-snug tracking-normal antialiased">
              <span className={`bg-[${category_bg}] py-2 px-3 rounded-md`}>
                {category}
              </span>
            </h4>
            <p className="mt-3 text-xl font-semibold leading-relaxed antialiased">
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
