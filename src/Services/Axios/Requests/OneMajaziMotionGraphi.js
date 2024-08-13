import { useQuery, useQueryClient } from "react-query";
import apiRequests from "../Configs/Config";

const MagaziGallerykData = (id) => {    
  return useQuery(["MagaziGallerykData", id], () => {
    return apiRequests
      .get("/cyberspace/MotionGraphiApi/?format=json")
      .then((res) => {
        const gallery = res.data.MotionGraphiApi.find((gallery) => gallery.id === +id);
        return gallery;
      });
  });
};

export default MagaziGallerykData;
