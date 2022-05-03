import Comment from "../comment/Comment";
import "./comments.css";

export default function Comments({ comments }) {
  return (
    <div className="comments">
      {comments.map((c) => (
        <Comment comment={c} />
      ))}
    </div>
  );
}
