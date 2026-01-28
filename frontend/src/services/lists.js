const baseUrl = "/api/lists";
import axios from "axios";

const getAll = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    console.error('error fetching lists', error)
  }
};

export default { getAll };
