import { useState } from "react";
import { useDispatch } from "react-redux";
//import { addComment } from "../redux/actions/commentActions";

const CommentInput = ({ articleId }) => {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addComment(articleId, comment));
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={comment}
        onChange={(event) => setComment(event.target.value)}
        placeholder="Leave a comment"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CommentInput;
