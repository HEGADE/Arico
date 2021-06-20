import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Article from "../components/Article";
import Heading from "../commomComponets/Heading";
import { authC } from "../store/SignupContext";
import { fetchData } from "../helper/fetchData";
import Loader from "../commomComponets/Loader"

const Articles = () => {
  let { isLog, setIsLogg,loading,setLoading } = useContext(authC);
  let [articles, setArticles] = useState([]);
  useEffect(() => {
    setIsLogg(true)
    setLoading(true)
    fetchData()
      .then((data) => {
        if (data.data?.code === -1) {
          setIsLogg(false);
          setLoading(false)
        }
        if (data.data[0]?.article) {

          setIsLogg(true)
          setLoading(false)
          setArticles((pre) => [...pre, ...data?.data]);
        }

        console.log(data);
      })
      .catch((e) => {
        alert("Slow network detected..,pls try again later");
      });
  }, []);
  if(loading) return <Loader/>
if(!isLog) return <Redirect to="/login" />
  return (
    <>
    
      <Heading />
      <div className="article_container">
        {articles.map((ele, index) => {
          return (
            <Article
             goto={ele._id}
              determineColor="green"
              heading={ele.title}
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
