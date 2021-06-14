import { useState } from "react";
import axios from "axios";
import { config } from "../config";
import { LocalStorage } from "../helper/localStorage";
export const isAuthenticated = async () => {
  let _token = LocalStorage.getItem();
  config.headers["auth"] = _token;
  let data = await axios.get(
    "http://localhost:8000/api/isauthenticated/",
    config
  );
  if (data.data?.code === -1) return true;

  return false;
};
