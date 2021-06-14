import React from "react";

const Article = ({ img, user, heading, articleContent, determineColor }) => {
  const bg = {
    background: `linear-gradient(193deg,  ${determineColor},22%, #304569)`,
  };
  const share = async () => {
    if (navigator.canShare) {
      navigator
        .share({
          files: [],
          text: "ninja is the best",
          title: "ninja",
          url: "dfvlkdflk",
        })
        .then(() => {
          console.log("shared");
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <>
      <div className="card_body" style={bg}>
        <div className="card_image">
          <img src="logo192.png" alt="article_image" />
        </div>
        <div className="article_heading">
          <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit</h5>
        </div>
        <div className="article_content">
          <p>{articleContent}</p>
        </div>
        <div className="author_share">
          <small className="author">{user}</small>
          <small className="shareButton" onClick={share}>
            Share
          </small>
        </div>
      </div>
    </>
  );
};

export default Article;
