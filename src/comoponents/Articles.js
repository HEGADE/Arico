import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Article from "./Articles/Article";
import "../assets/css/article.css";
import Heading from "../commomComponets/Heading";
const Articles = () => {
  return (
    <>
      <Heading />
      <div className="article_container">
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
      </div>
    </>
  );
};

export default Articles;
