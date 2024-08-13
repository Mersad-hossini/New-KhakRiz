import apiRequests from "../Configs/Config";

const getLibraryData = () => {
  return apiRequests
    .get("/library/physicalbookApi/?format=json")
    .then((res) => res.data.GraphicDesignApi);
};

export default getLibraryData;