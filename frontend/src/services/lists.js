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

const createList = async blog => {
  try {
    const response = await axios.post(baseUrl, blog)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

const updateList = async (id, list) => {
  try {
    const response = await axios.post(`${baseUrl}/${id}/items`, list)
    return response.data
  } catch (error) {
    console.error('error updating list', error)
  }
}

export default { getAll, deleteList, createList, updateList };
