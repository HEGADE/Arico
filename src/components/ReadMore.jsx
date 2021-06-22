import React from "react";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";

const ReadMore = ({ heading, content }) => {
  return (
    <>
      <div className="read_more_heading">
        <h1>{heading}</h1>
      </div>
      <div className="article_image">
        <img src="/logo192.png" alt="article logo" />
      </div>
      <div className="read_more_content">{content}</div>
      <div className="play_ground">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, tenetur
        quia iure quod quam sed sequi vero non commodi tempore nulla? Accusamus,
        nam! Et, incidunt. Autem nisi assumenda neque sequi?
      </div>
      <div className="play_ground">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, tenetur
        quia iure quod quam sed sequi vero non commodi tempore nulla? Accusamus,
        nam! Et, incidunt. Autem nisi assumenda neque sequi?
      </div>
     
      
    </>
  );
};
export default ReadMore;
