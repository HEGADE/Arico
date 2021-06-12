import axios from "axios";
import { config } from "../config";
import { LocalStorage } from "../helper/localStorage";
import { useState, useEffect } from "react";
export const fetchData = async () => {
  let _token = LocalStorage.getItem();
  config.headers["auth"] = _token;
  let data = await axios.get("http://localhost:8000/api", config);
  if(data?.code===-1){
    console.log("not authorized");
  }
  return data;
};
