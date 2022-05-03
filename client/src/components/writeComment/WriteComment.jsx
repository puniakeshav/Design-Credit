import { useContext, useState } from "react";
import "./writeComment.css";
import axios from "axios";
import { Context } from "../../context/Context";

export default function WriteComment() {
  const [desc, setDesc] = useState("");
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newComment = {
      username: user.username,
      desc,
    };
    try {
      const res = await axios.post("/comments", newComment);
      window.location.replace("/discussion");
    } catch (err) {}
  };
  return (
    <div className="write">
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your Views..."
            type="text"
            className="writeInput writeText"
            onChange={e=>setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Add Comment
        </button>
      </form>
    </div>
  );
}
