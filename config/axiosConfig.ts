import axios from "axios";
import { FOOD_APP_TOKEN } from "../utils/constant";
import AsyncStorage from "@react-native-async-storage/async-storage";

const axiosInstance = () => {
  //setting the token
  const token = AsyncStorage.getItem(FOOD_APP_TOKEN);
  //setting the enviroment
  let url: any = "";
  if (process.env.NODE_ENV === "development") {
    url = "https://78d2-103-170-179-91.ngrok.io";
  } else {
    url = "https://78d2-103-170-179-91.ngrok.io";
  }

  const enviroment = `${url}/api`;
  return axios.create({
    baseURL: enviroment,
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
  });
};

export default axiosInstance;
