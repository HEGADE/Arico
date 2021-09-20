import React from 'react';
import { Link } from 'react-router-dom';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';

const Article = (prop) => {
   const bg = {
      background: `linear-gradient(40deg,  ${prop.determineColor},22%, #304569)`,
   };
   const share = async (e) => {
      if (navigator.canShare) {
         navigator
            .share({
               files: [],
               text: 'Article',
               title: e.target.title,
               url: e.target.id,
            })
            .then(() => {
               console.log('supporting data');
            })
            .catch((e) => {
               alert('sharing capability  is not supported by this browser');
            });
      } else
         alert('Sorry sharing capability  is not supported by this browser!');
   };

   return (
      <>
         <div className="card_body" style={bg}>
            <Link to={`readmore/${prop._id}`}>
               <div className="card_image">
                  <img
                     src={`http://localhost:8000/${prop.pic}`}
                     loading="lazy"
                     height="250"
                     alt="article_image"
                  />
               </div>
               <div className="article_heading">
                  <h5>{prop.title}</h5>
               </div>
               <div className="article_content">
                  <p>{prop.article}...</p>
               </div>
            </Link>
            <div className="author_share">
               <small className="author">{prop.user}</small>
               <small
                  className="shareButton"
                  id={prop._id}
                  title={prop.title}
                  onClick={share}
               >
                  <ShareOutlinedIcon />
               </small>
            </div>
         </div>
      </>
   );
};

export default Article;
