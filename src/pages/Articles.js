import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Article from "../components/Article";
import Heading from "../commomComponets/Heading";
import { authC } from "../store/SignupContext";
import { fetchData } from "../helper/fetchData";
import Loader from "../commomComponets/Loader";

const Articles = () => {
  let { isLog, setIsLogg, loading, setLoading } = useContext(authC);
  let [articles, setArticles] = useState([]);
  useEffect(() => {
    setIsLogg(true);
    setLoading(true);
    (async () => {
      try {
        let data = await fetchData({ page: 1 });
        if (data.data?.code === -1) setIsLogg(false);
        else {
          setIsLogg(true);
          setArticles((pre) => [...pre, ...data?.data]);
        }
      } catch (e) {
        alert("Slow network detected..,pls try again later");
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  if (loading) return <Loader />;
  if (!isLog) return <Redirect to="/auth" />;
  return (
    <>
      <Heading />
      <div className="article_container">
        {articles.map((ele, index) => {
          return <Article {...ele} key={index} determineColor="green" />;
        })}
      </div>
    </>
  );
};

export default Articles;
// writing algorithm that ignores blackish and whitish color (40 and 220)
