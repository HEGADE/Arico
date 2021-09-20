import React from "react";
import Moment from "react-moment";

const ReadMore = ({ title, article,pic,createdDate ,user}) => {
  
  return (
    <>  
      <div className="read_more_heading">
  
        <h1>{title}</h1>
        <div className="created_at">
          
        <Moment fromNow>{createdDate}</Moment>
      </div>
      <div className="author">
        {user}
      </div>
      </div>
      <div className="article_image">
        <img src={`http://localhost:8000/${pic}`} loading="lazy" alt="article logo" />
      </div>
      <div className="read_more_content">{article}</div>
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
