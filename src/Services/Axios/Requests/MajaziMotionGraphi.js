import apiRequests from "../Configs/Config";

const getMajaziMotionGraphi = () => {
  return apiRequests
    .get("/cyberspace/MotionGraphiApi/?format=json")
    .then((res) => res.data.MotionGraphiApi);
};

export default getMajaziMotionGraphi;