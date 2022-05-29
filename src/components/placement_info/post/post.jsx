import React from "react";
import "./Post.css";
const Post = ({ post: { link,image,info,title }, index }) => {
  console.log(title);
  console.log()
  return (  
    <div className="post-container">
      <h1 className="heading">{title}</h1>
      <div className="image-container">
        <img  src={image} width="200px" height="200px" alt="post" />
      </div>
      
      <div className="info">
        <p>{info}</p>
      </div>

      <div>      
        <a style={{color:"black"}} href="hello"><h4>{link}</h4></a>
      </div>
    </div>
  );
};
  
export default Post;