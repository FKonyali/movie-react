import axios from "axios";

let API_URL = "";

if (window._env_ && window._env_.REACT_APP_API_URL) {
  API_URL = window._env_.REACT_APP_API_URL;
} else {
  API_URL = process.env.REACT_APP_API_URL;
}

axios.defaults.baseURL = API_URL;
