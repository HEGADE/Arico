import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Article from "./Articles/Article";
import Heading from "../commomComponets/Heading";
import { authC } from "../store/SignupContext";
import { fetchData } from "../helper/fetchData";

const Articles = () => {
  let { isLog, setIsLogg } = useContext(authC);
  let [articles, setArticles] = useState([]);
  useEffect(() => {
    fetchData()
      .then((data) => {
        if (data.data?.code === -1) {
          setIsLogg(false);
          // console.log("iam running");
        }
        if (data.data[0]?.article) {
          setArticles((pre) => [...pre, ...data?.data]);
        }
        console.log(data);
      })
      .catch((e) => {
        alert("Slow network detected..,pls try again later");
      });
  }, []);

  return (
    <>
      {!isLog && <Redirect to="/login" />}
      <Heading />
      <div className="article_container">
        {articles.map((ele, index) => {
          return (
            <Article
              determineColor="red"
              articleContent={ele.article}
              user={ele.user}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default Articles;
// writing algorithm that ignores blackish and whitish color (40 and 220)
