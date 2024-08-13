import { useQuery, useQueryClient } from "react-query";
import apiRequests from "../Configs/Config";

const getYadmanDetails = (id) => {    
  return useQuery(["YadmanData", id], () => {
    return apiRequests
      .get("/martyr/YademanPathAPI")
      .then((res) => {
        const yadman = res.data.martyrApi.find((book) => book.id === +id);
        return yadman;
      });
  });
};

export default getYadmanDetails;
