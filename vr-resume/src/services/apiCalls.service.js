import axios from "axios";

const httpService = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-type": "application/json",
  },
});

export const httpFileUpload = (file, onUploadProgress) => {
  let formData = new FormData();

  formData.append("file", file);

  return httpService.post("/upload-images", formData, {
    headers: { "Content-Type": "multipart/form-data" },
    onUploadProgress,
  });
};

export const httpCall = async (action, endpoint, config, postData) => {
  let responseData;

  const apiUrl = process.env.REACT_APP_API_URL;

  switch (action) {
    case "get":
      responseData = axios.get(endpoint, config);
      break;
    case "post":
      responseData = axios.post(endpoint, postData, config);
      break;
    case "delete":
      responseData = axios.delete(endpoint, config);
      break;
    case "put":
      responseData = axios.put(endpoint, postData, config);
      break;
    default:
      break;
  }
  const data = await responseData.json();
  return data;
};
