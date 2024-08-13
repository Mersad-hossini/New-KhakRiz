import apiRequests from "../Configs/Config";

const getMajaziGallery = () => {
  return apiRequests
    .get("/cyberspace/GraphicDesignApi/?format=json")
    .then((res) => res.data.GraphicDesignApi);
};

export default getMajaziGallery;