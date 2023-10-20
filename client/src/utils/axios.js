import { toast } from "react-toastify";
import axios from "axios";
const url = "/api";
import { useGlobalContext } from "../utils/context";

export const userRegistration = async (user) => {
  const { setErrorMessage } = useGlobalContext();
  return await axios.post(`${url}/register`, user).catch((error) => {
    console.log(error.response.data.msg);
    console.log(error.response.data.msg);
    //setLoading(false);
    setErrorMessage(error.response.data.msg);
    //toast.error(error.response.data.msg);
  });
};

export const userLogin = async (credentials) => {
  // const { loading, setLoading } = useGlobalContext();
  return await axios.post(`${url}/login`, credentials).catch((error) => {
    console.log(error);
    // console.log(error.response.data.msg);
    setLoading(false);
    toast.error(error.response.data.msg);
    //toast.error(error.message);
  });
};

export const getAllFeeds = async () => {
  return await axios.get(`${url}/feeds`).catch((error) => {
    console.log(error);
    //toast.error(error.message);
  });
};

export const getAllProducts = async () => {
  return await axios
    .get(
      `${url}/products?page=${page}&limit=${limit}&sort=${sorted}&search=${searchValue}&filter=${filter.join(
        ","
      )}`
    )
    .catch((error) => {
      console.log(error);
      //toast.error(error.message);
    });
};
