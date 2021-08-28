import React, { useEffect, useState, useContext } from "react";
import Heading from "../commomComponets/Heading";
import { useParams } from "react-router";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import { fetchData } from "../helper/fetchData";
import Readmore from "../components/ReadMore";
import { authC } from "../store/SignupContext";
import Loader from "../commomComponets/Loader";

export const ReadMore = () => {
  let { id } = useParams();
  let {  setIsLogg, loading, setLoading, setAuth } = useContext(authC);
  let [articles, setArticles] = useState({});

  useEffect(() => {
    setIsLogg(true);
    setLoading(true);
    (async () => {
      try {
        let data = await fetchData({ id });
        setAuth(data);
        setArticles(data.data);
      } catch (e) {
        alert("Slow network detected..,pls try again later");
      } finally {
        setLoading(false);
      }
    })();

  }, []);
  if (loading) return <Loader />;
  return (
    <>
      <Heading title={articles.title} />
      <div className="read_more">
        <Readmore {...articles} />
      </div>
      <div className="shareButtonMore">
        <div>
          <ShareOutlinedIcon />
        </div>
        <div>
          <ShareOutlinedIcon />
        </div>
      </div>
    </>
  );
};
