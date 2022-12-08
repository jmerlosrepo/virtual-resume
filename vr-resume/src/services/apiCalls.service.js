import axios from "axios";

export const httpCall = async (action, endpoint, config, postData) => {
  let responseData;

  const apiUrl = process.env.REACT_APP_API_URL;

  switch (action) {
    case "get":
      responseData = axios.get(`${apiUrl}${endpoint}`, config);
      break;
    case "post":
      responseData = axios.post(`${apiUrl}${endpoint}`, postData, config);
      break;
    case "delete":
      responseData = axios.delete(`${apiUrl}${endpoint}`, config);
      break;
    case "put":
      responseData = axios.put(`${apiUrl}${endpoint}`, postData, config);
      break;
    default:
      break;
  }
  const data = await responseData.json();
  return data;
};
