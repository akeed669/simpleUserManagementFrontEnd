import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

//use interceptors for catching errors
axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  //errors not in above range
  if (!expectedError) {
    //toast message shown to user
    toast.error("An unexpected error occurrred.");
  }

  //for understood errors (from back-end)
  else {
    //toast message shown to user
    toast.error(error.response.data);
  }

  return Promise.reject(error);
});

const exportedObject = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default exportedObject;
