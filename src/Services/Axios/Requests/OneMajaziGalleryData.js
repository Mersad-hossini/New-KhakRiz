import { useQuery, useQueryClient } from "react-query";
import apiRequests from "../Configs/Config";

const GraphicDesignData = (id) => {    
  return useQuery(["MajaziMotionGraphiData", id], () => {
    return apiRequests
      .get("/cyberspace/GraphicDesignApi/?format=json")
      .then((res) => {
        const designApi = res.data.GraphicDesignApi.find((designApi) => designApi.id === +id);
        return designApi;
      });
  });
};

export default GraphicDesignData;
