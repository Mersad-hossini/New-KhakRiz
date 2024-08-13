import { useQuery, useQueryClient } from "react-query";
import apiRequests from "../Configs/Config";

const LibraryBookData = (id) => {    
  return useQuery(["SingleSotiBook", id], () => {
    return apiRequests
      .get("/library/physicalbookApi/?format=json")
      .then((res) => {
        const book = res.data.GraphicDesignApi.find((book) => book.id === +id);
        return book;
      });
  });
};

export default LibraryBookData;
