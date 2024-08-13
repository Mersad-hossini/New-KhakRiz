import apiRequests from "../Configs/Config";

const getRaidoSound = () => {
  return apiRequests
    .get("/cinamtic-art/RadioApiAll/?format=json")
    .then((res) => res.data.RadioApiAll);
};

export default getRaidoSound;