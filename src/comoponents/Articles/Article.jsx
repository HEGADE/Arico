import React from "react";

const Article = ({img,heading,articleContent}) => {
  const share = async() => {
  
    if(navigator.canShare){
      alert(
      
        'vjh'
      )
        navigator.share({
        files:[],
        text:"ninja is the best",
        title:"ninja",
        url:"dfvlkdflk"

      }).then(()=>{
        console.log("shared");
      }).catch(e=>{
        console.log(e);
      })
      
    }
    
  };
  return (
    <>
      <div className="card_body">
        <div className="card_image">
          <img src="logo192.png" alt="article_image" />
        </div>
        <div className="article_heading">
          <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit</h5>
        </div>
        <div className="article_content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            laudantium sed assumenda...
          </p>
        </div>
        <div className="author_share">
          <small className="author">Ninja</small>
          <small className="shareButton" onClick={share}>
            Share
          </small>
        </div>
      </div>
    </>
  );
};

export default Article;
