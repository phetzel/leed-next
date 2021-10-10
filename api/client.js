import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://leed-rails.herokuapp.com/api",
});

export default apiClient;
