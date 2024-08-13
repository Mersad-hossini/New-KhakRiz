import apiRequests from "../Configs/Config";

const getYadmanData = () => {
  return apiRequests
    .get("/martyr/YademanPathAPI")
    .then((res) => res.data.martyrApi);
};

export default getYadmanData;