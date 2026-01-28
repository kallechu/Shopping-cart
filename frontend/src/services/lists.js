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

const deleteList = async (id) => {
    try {
        await axios.delete(`${baseUrl}/${id}`)
    } catch (error) {
        console.error('error deleting list', error)
    }
}

export default { getAll, deleteList };
