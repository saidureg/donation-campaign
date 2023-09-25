import { useLoaderData, useParams } from "react-router-dom";
import {
  getDonationCard,
  saveDonationCard,
} from "../../Utilites/localStorages";
import swal from "sweetalert";

const DonationDetails = () => {
  const donations = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);

  const donation = donations?.find((donationId) => donationId.id === idInt);

  const handleStoreCard = () => {
    const storedDonator = getDonationCard();
    saveDonationCard(idInt);
    const isExist = storedDonator?.find((donatorId) => donatorId === idInt);
    if (!isExist) {
      swal(
        "Thank you for your donation!",
        "Your contribution is greatly appreciated.",
        "success"
      );
    } else {
      swal(
        "Thank you for your support!",
        "You have already made a donation.",
        "info"
      );
    }
  };

  return (
    <div>
      <div className="my-12 relative">
        <img
          className="rounded-lg w-full h-[80vh]"
          src={donation?.picture}
          alt={donation.title}
        />
        <div className="bg-[#0B0B0B80] absolute rounded-b-lg bottom-0 w-full py-6 px-8">
          <button
            onClick={handleStoreCard}
            className="py-3 px-6 rounded text-white"
            style={{ background: donation.text_color }}
          >
            Donate ${donation?.price}
          </button>
        </div>
      </div>
      <div>
        <h3 className="text-[#0B0B0B] text-4xl font-bold">{donation?.title}</h3>
        <p className="text-[#0B0B0BB2] text-justify my-9">
          {donation?.description}
        </p>
      </div>
    </div>
  );
};

export default DonationDetails;
