import { useQuery, useQueryClient } from "react-query";
import apiRequests from "../Configs/Config";

const HonariFilmData = (id) => {
  return useQuery(["HonariFilmData", id], () => {
    return apiRequests
      .get("/cinamtic-art/MovieApi/?format=json")
      .then((res) => {
        const film = res.data.MovieApi.find((film) => film.id === +id);
        return film;
      });
  });
};

export default HonariFilmData;
