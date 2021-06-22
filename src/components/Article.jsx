import React from "react";
import { Link } from "react-router-dom";
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';

const Article = ({
  img,
  user,
  heading,
  articleContent,
  determineColor,
  goto,
}) => {
  const bg = {
    background: `linear-gradient(193deg,  ${determineColor},22%, #304569)`,
  };
  const share = async (e) => {
 
      if (navigator.canShare) {
        navigator
          .share({
            files: [],
            text: "Article",
            title: e.target.title,
            url: e.target.id,
          })
          .then(() => {
            console.log("pass");
          })
          .catch((e) => {
            alert("sharing capability  is not supported by this browser");
          });
      }
      else alert("Sorry sharing capability  is not supported by this browser!")
    
  };

  return (
    <>
      <div className="card_body" style={bg}>
        <Link to={`readmore/${goto}`}>
          <div className="card_image">
            <img src="logo192.png" alt="article_image" />
          </div>
          <div className="article_heading">
            <h5>{heading}</h5>
          </div>
          <div className="article_content">
            <p>{articleContent}...</p>
          </div>
        </Link>
        <div className="author_share">
          <small className="author">{user}</small>
          <small className="shareButton" id={goto} title={heading}  onClick={share}>
     <ShareOutlinedIcon />
          </small>
        </div>
      </div>
    </>
  );
};

export default Article;
