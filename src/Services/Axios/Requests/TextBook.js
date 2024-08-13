import apiRequests from "../Configs/Config";

const getTextBook= () => {
  return apiRequests
    .get("/literature-history/LHBookApi/?format=json")
    .then((res) => res.data.bookApi);
};

export default getTextBook;