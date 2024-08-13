import apiRequests from "../Configs/Config";

const GraphicDesign = () => {
  return apiRequests
    .get("/cyberspace/GraphicDesignApi/?format=json")
    .then((res) => res.data.GraphicDesignApi);
};

export default GraphicDesign;