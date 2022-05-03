import "./comment.css";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

export default function Comment({ comment }) {
  const { user } = useContext(Context);
  const handleDelete = async () => {
    try {
      await axios.delete(`/comments/${comment._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/discussion");
    } catch (err) {}
  };
  return (
    <div className="comment">
      <div className="commentInfo">
        <hr />
        <div className="flex">
        <span className="commentDate">
        <p className="commentDesc">{comment.username}</p>
        {new Date(comment.createdAt).toDateString()}
        </span>
        {(comment.username===(user.username) || user.username==="admin") && <i className="singlePostIcon  far fa-trash-alt delete"
          onClick={handleDelete} ></i> } 
          </div>
          
        <span className="commentDate">
         
        </span>
      </div>
      <p className="commentDesc">{comment.desc}</p>
      
    </div>
  );
}
