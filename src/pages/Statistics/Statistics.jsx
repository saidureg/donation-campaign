import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { useLoaderData } from "react-router-dom";
import { getDonationCard } from "../../Utilites/localStorages";

const Statistics = () => {
  const [totalDonated, setTotalDonated] = useState([]);

  const donations = useLoaderData();
  const remainingDonation = donations.length - totalDonated.length;
  const yourDonation = totalDonated.length;
  const totalDonation = [remainingDonation, yourDonation];
  useEffect(() => {
    const storedDonator = getDonationCard();
    setTotalDonated(storedDonator);
  }, []);

  return (
    <div className="container-fluid mb-3 flex justify-center my-24">
      <Chart
        type="pie"
        className="w-[340px] md:w-[420px] lg:w-[520px]"
        series={totalDonation}
        options={{
          noData: { text: "Empty Data" },
          colors: ["#FF444A", "#00C49F"],
          labels: ["Total Donation", "Your Donation"],
        }}
      ></Chart>
    </div>
  );
};

export default Statistics;
