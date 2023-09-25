import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDonationCard } from "../../Utilites/localStorages";
import DonatorDetails from "../../components/DonatorDetails/DonatorDetails";

const Donation = () => {
  const [addDonator, setAddDonator] = useState([]);

  const donations = useLoaderData();

  useEffect(() => {
    const donatorIds = getDonationCard();
    if (donations.length > 0) {
      const donators = donations?.filter((donator) =>
        donatorIds.includes(donator.id)
      );
      setAddDonator(donators);
    }
  }, [donations]);

  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-6 my-20 px-3">
        {addDonator.map((donator, idx) => (
          <DonatorDetails key={idx} donator={donator}></DonatorDetails>
        ))}
      </div>
    </div>
  );
};

export default Donation;
