import { useQuery, useQueryClient } from "react-query";
import apiRequests from "../Configs/Config";

const HonariRadioData = (id) => {    
  return useQuery(["HonariRadioData", id], () => {
    return apiRequests
      .get("/cinamtic-art/RadioApiAll/?format=json")
      .then((res) => {
        const radio = res.data.RadioApiAll.find((radio) => radio.id === +id);
        return radio;
      });
  });
};

export default HonariRadioData;
