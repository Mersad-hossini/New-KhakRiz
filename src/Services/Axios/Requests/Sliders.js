import apiRequests from "../Configs/Config";

const getRaido = () => {
  return apiRequests
    .get("/home-object/sliderSiteApi/?format=json")
    .then((res) => res.data.SliderSiteAPI);
};

export default getRaido;