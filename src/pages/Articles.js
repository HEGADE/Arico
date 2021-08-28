import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Article from "../components/Article";
import Heading from "../commomComponets/Heading";
import { authC } from "../store/SignupContext";
import Loader from "../commomComponets/Loader";
import { FetchArticle } from "../customHooks/FetchArticle";

const Articles = () => {
  let { setIsLogg, loading, setLoading } = useContext(authC);
  let [page, setPage] = useState(1);
  const { isLog, articles, has } = FetchArticle(page);
  useEffect(() => {
    setIsLogg(true);
    setLoading(true);
  }, []);

  if (loading) return <Loader />;
  if (!isLog) return <Redirect to="/auth" />;
  return (
    <>
      <Heading />
      <div className="article_container">
        {articles.map((ele, index) => {
          return (
            <Article
              {...ele}
              key={index}
              some={index}
              determineColor={ele.color}
            />
          );
        })}
      </div>
      <button
        className="load_more"
        onClick={() => {
          setPage((pre) => pre + 1);
        }}
      >
        {has ? "LoadMore" : "no more"}
      </button>
    </>
  );
};

export default Articles;
