import axios from "axios";
const apiUrl =
  "https://api.edamam.com/search?app_id=759a9f86&app_key=ba2d23594e77b0cbc8c8fc6c40d2f9c7&health=alcohol-free&";

export const fetchRecipe = (name) => {
  return axios.get(apiUrl + "q=" + name);
};
