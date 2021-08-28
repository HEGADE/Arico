import axios from "axios";
import { config } from "../config";
import { LocalStorage } from "../helper/localStorage";
export const fetchData = async ({ page, id }) => {
  let _token = LocalStorage.getItem();
  config.headers["auth"] = _token;
  let data;
  if (page)
    return (data = await axios.get(
      `http://localhost:8000/api?page=${page}`,
      config
    ));

  return (data = await axios.get(
    `http://localhost:8000/api/article/${id}`,
    config
  ));
};
