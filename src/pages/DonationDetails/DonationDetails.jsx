import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const DonationDetails = () => {
  const [donationInfo, setDonationInfo] = useState([]);

  const donations = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);

  useEffect(() => {
    const findDonation = donations?.find(
      (donationId) => donationId.id === idInt
    );
    setDonationInfo(findDonation);
  }, [idInt, donations]);

  return (
    <div>
      <div className="my-12">
        <img
          className="rounded-lg w-full h-[80vh]"
          src={donationInfo?.picture}
          alt=""
        />
      </div>
      <div>
        <h3 className="text-[#0B0B0B] text-4xl font-bold">
          {donationInfo?.title}
        </h3>
        <p className="text-[#0B0B0BB2] text-justify my-9">
          {donationInfo?.description}
        </p>
      </div>
    </div>
  );
};

export default DonationDetails;
