import instance from "./instance";
import { GET_CITIES } from "./Paths";

const getRequest = async (url, object) => {
  try {
    const response = await instance.get(url, { params: object });
    console.log(JSON.stringify(response));
    return response;
  } catch (err) {
    console.log(JSON.stringify(err));
    throw err;
  }
};

// eslint-disable-next-line no-unused-vars
const postRequest = async (url, object) => {
  try {
    const response = await instance.post(url, object);
    return response;
  } catch (err) {
    console.log(JSON.stringify(err));
    throw err;
  }
};

export const getUsersApi = async () => {
  const response = await getRequest(GET_CITIES, {});
  return response;
};
