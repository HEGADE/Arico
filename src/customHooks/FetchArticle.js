import React, { useContext, useState, useEffect } from "react";
import { authC } from "../store/SignupContext";
import { fetchData } from "../helper/fetchData";

const FetchArticle = (page) => {
  console.log(page);
  let [articles, setArticles] = useState([]);
  let { isLog, setIsLogg, loading, setLoading } = useContext(authC);
  let [has, setHas] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        let data = await fetchData({ page: page });
        console.log(data);
        if (data.data?.code === -1) setIsLogg(false);
        else {
          setIsLogg(true);
          data?.data.length === 0 ?setHas(false):setHas(true)
          
          setArticles((pre) => [...pre, ...data?.data]);
        }
      } catch (e) {
        alert("Slow network detected..,pls try again later");
      } finally {
        setLoading(false);
      }
    })();
  }, [page]);
  return { isLog, loading, articles, has };
};

export { FetchArticle };
