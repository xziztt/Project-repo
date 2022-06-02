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

      <div className="linkContainer">      
        <a  style={{color:"black"}} href={link}><h4 className="registerContainer">Click here to register</h4></a>
      </div>
    </div>
  );
};
  
export default Post;