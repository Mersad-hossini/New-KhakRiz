import apiRequests from "../Configs/Config";

const getHonariClip= () => {
  return apiRequests
    .get("/cinamtic-art/VideoMusicApi/?format=json")
    .then((res) => res.data.VideoMusicApi);
};

export default getHonariClip;