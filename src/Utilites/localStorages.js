const getDonationCard = () => {
  const storedDonationCard = localStorage.getItem("donator-id");
  if (storedDonationCard) {
    return JSON.parse(storedDonationCard);
  } else {
    return [];
  }
};

const saveDonationCard = (id) => {
  const storedDonationCard = getDonationCard();
  const isExist = storedDonationCard.find((donatorId) => donatorId === id);
  if (!isExist) {
    storedDonationCard.push(id);
    localStorage.setItem("donator-id", JSON.stringify(storedDonationCard));
  }
};

export { getDonationCard, saveDonationCard };
