import apiRequests from "../Configs/Config";

const getHonariFilm= () => {
  return apiRequests
    .get("/cinamtic-art/MovieApi/?format=json")
    .then((res) => res.data.MovieApi);
};

export default getHonariFilm; 