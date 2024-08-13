import apiRequests from "../Configs/Config";

const getVideo = () => {
  return apiRequests
    .get("/cyberspace/VideoClipApi/?format=json")
    .then((res) => res.data.VideoClipApi);
};

export default getVideo;