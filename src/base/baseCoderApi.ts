import axios from "axios";
import Cookies from "js-cookie";
import envVariables from "../config/env.import";

const baseCoderApi = axios.create({
  baseURL: envVariables.CODER_API_URL,
});

const removeCookies = () => {
  Cookies.remove("client_id");
  Cookies.remove("names");
  Cookies.remove("client_accounts");
};

baseCoderApi.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401) {
      removeCookies();
      window.location.reload();
      return baseCoderApi(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default baseCoderApi;
