import { useQuery, useQueryClient } from "react-query";
import apiRequests from "../Configs/Config";

const getOneTextBook = (id) => {    
  return useQuery(["SingleTextBook", id], () => {
    return apiRequests
      .get("/literature-history/LHBookApi/?format=json")
      .then((res) => {
        const book = res.data.bookApi.find((book) => book.id === +id);
        return book;
      });
  });
};

export default getOneTextBook;
