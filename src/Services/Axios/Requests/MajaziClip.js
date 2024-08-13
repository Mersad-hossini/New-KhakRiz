import apiRequests from "../Configs/Config";

const getMajaziClip= () => {
  return apiRequests
    .get("/cyberspace/VideoClipApi/?format=json")
    .then((res) => res.data.VideoClipApi);
};

export default getMajaziClip;