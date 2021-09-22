import React, { useState, useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Article from '../components/Article';
import Heading from '../commomComponets/Heading';
import { authC } from '../store/SignupContext';
import Loader from '../commomComponets/Loader';
import { FetchArticle } from '../customHooks/FetchArticle';
import {fetchData as fetchSearchArticle} from "../helper/fetchData"

const Articles = () => {
   let { setIsLogg, loading, setLoading } = useContext(authC);
   let [page, setPage] = useState(1);
   let [search, setSearch] = useState("de");
   const { isLog, articles, has } = FetchArticle(page,search);
   useEffect(() => {
      setIsLogg(true);
      setLoading(true);
   }, []);

   if (loading) return <Loader />;
   if (!isLog) return <Redirect to="/auth" />;
   return (
      <>
         <Heading />
         <SearchBox placeHolder="search"  setSearch={setSearch} setPage={setPage}/>
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
            {has ? 'LoadMore' : 'no more'}
         </button>
      </>
   );
};

export default Articles;

const SearchBox = ({ placeHolder ,setSearch,setPage}) => {
   const searchArticle =async (e) => {
     let something=document.getElementById("input")
      e.preventDefault();
      setPage(1)
      setSearch(something.value)

    
   };
   return (
      <>
         <div className="search_div">
            <form onSubmit={searchArticle}>
               <input id="input"
                  type="text"
                  placeholder={placeHolder}
                  name="searchQuery"
               />
            </form>
         </div>
      </>
   );
};
