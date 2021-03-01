import axios from "axios";

const url = "https://coronavirus-19-api.herokuapp.com/all";

export const fetchData = async () => {
  try {
    const { data } = await axios.get(url);

    return data;
  } catch (error) {}
};
