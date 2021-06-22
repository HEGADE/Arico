import axios from "axios";
import { config } from "../config";
import { LocalStorage } from "../helper/localStorage";
import { useState, useEffect } from "react";
export const fetchData = async ({ page, id }) => {
  let _token = LocalStorage.getItem();
  config.headers["auth"] = _token;
  let data;
  if (page) {
    data = await axios.get(`http://localhost:8000/api?page=${page}`, config);
  } else {
    data = await axios.get(`http://localhost:8000/api/article/${id}`, config);
  }
  return data;
};
