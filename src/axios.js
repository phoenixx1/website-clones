import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-4234e.cloudfunctions.net/api",
  // "http://localhost:5001/clone-4234e/us-central1/api",
});

export default instance;
