import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDonationCard } from "../../Utilites/localStorages";
import DonatorDetails from "../../components/DonatorDetails/DonatorDetails";

const Donation = () => {
  const [addDonator, setAddDonator] = useState([]);
  const [isShow, setIsShow] = useState(false);

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
      {addDonator.length > 0 ? (
        <div>
          <div>
            {isShow ? (
              <div className="grid lg:grid-cols-2 gap-6 mt-20 mb-6 px-3">
                {addDonator.slice(0, addDonator.length).map((donator, idx) => (
                  <DonatorDetails key={idx} donator={donator}></DonatorDetails>
                ))}
              </div>
            ) : (
              <div className="grid lg:grid-cols-2 gap-6 mt-20 mb-6 px-3">
                {addDonator.slice(0, 4).map((donator, idx) => (
                  <DonatorDetails key={idx} donator={donator}></DonatorDetails>
                ))}
              </div>
            )}
            {addDonator.length > 4 && (
              <div className="flex justify-center items-center">
                {isShow ? (
                  ""
                ) : (
                  <button
                    onClick={() => setIsShow(!isShow)}
                    className="btn btn-primary"
                  >
                    See All
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      ) : (
        <p className="flex justify-center items-center h-[90vh] text-2xl font-semibold">
          No Data Found
        </p>
      )}
    </div>
  );
};

export default Donation;
