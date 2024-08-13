import { useQuery, useQueryClient } from "react-query";
import apiRequests from "../Configs/Config";

const MajaziClipData = (id) => {    
  return useQuery(["MajaziClipData", id], () => {
    return apiRequests
      .get("/cyberspace/VideoClipApi/?format=json")
      .then((res) => {
        const clip = res.data.VideoClipApi.find((clip) => clip.id === +id);
        return clip;
      });
  });
};

export default MajaziClipData;
