import { useQuery, useQueryClient } from "react-query";
import apiRequests from "../Configs/Config";

const HonariClipData = (id) => {
  return useQuery(["HonariClipData", id], () => {
    return apiRequests
      .get("/cinamtic-art/VideoMusicApi/?format=json")
      .then((res) => {
        const clip = res.data.VideoMusicApi.find((clip) => clip.id === +id);
        return clip;
      });
  });
};

export default HonariClipData;
