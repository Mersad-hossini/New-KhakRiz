import { useQuery, useQueryClient } from "react-query";
import apiRequests from "../Configs/Config";

const getOneSotiBook = (id) => {    
  return useQuery(["SingleSotiBook", id], () => {
    return apiRequests
      .get("/literature-history/LHBookAudioApi/?format=json")
      .then((res) => {
        const book = res.data.AudioBookAPI.find((book) => book.id === +id);
        return book;
      });
  });
};

export default getOneSotiBook;
