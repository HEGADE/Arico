import { useState, useEffect } from "react";
import axios from "axios";
import { config, _token } from "../config";

const ProfileData = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    (async function () {
      config.headers["auth"] = _token;
      const res = await axios.get("http://localhost:8000/api/profile", config);
      setData(res.data);
      console.log(res.data)
    })();
  }, []);

  return [data];
};

export default ProfileData;
