import apiRequests from "../Configs/Config";

const getSotiBook = () => {
  return apiRequests
    .get("/literature-history/LHBookAudioApi/?format=json")
    .then((res) => res.data.AudioBookAPI);
};

export default getSotiBook;