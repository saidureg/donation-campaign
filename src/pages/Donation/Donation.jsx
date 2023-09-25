import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDonationCard } from "../../Utilites/localStorages";

const Donation = () => {
  const [donator, setDonator] = useState([]);

  const donations = useLoaderData();

  useEffect(() => {
    const donatorIds = getDonationCard();
    if (donations.length > 0) {
      const donators = donations?.filter((donator) =>
        donatorIds.includes(donator.id)
      );
      setDonator(donators);
    }
  }, [donations]);

  return <div>Donation</div>;
};

export default Donation;
