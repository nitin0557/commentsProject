import { useState } from "react";
import { CommentStyled } from "./style/Comment.style";
import CommentList from "./components/CommentList";

export default function App() {
  const [text, setText] = useState("");
  const [comments, setComment] = useState([]);

  const handleSubmit = () => {
    const newComment = {
      id: Date.now(),
      text,
      replies: [],
    };
    setComment([newComment, ...comments]);
    setText("");
  };

  const onReply = (parentId, replyText) => {
    const addReply = (comments, parentId, replyText) => {
      return comments.map((item) => {
        if (parentId === item.id) {
          console.log("111");
          const newReply = {
            id: Date.now(),
            text: replyText,
            replies: [],
          };
          return { ...item, replies: [...item.replies, newReply] };
        } else {
          console.log("2222");
          return {
            ...item,
            replies: addReply(item.replies, parentId, replyText),
          };
        }
      });
    };

    setComment(addReply(comments, parentId, replyText));
  };

  const onEdit = (parentId, editText) => {
    const editReply = (comments, parentId, editText) => {
      return comments.map((item) => {
        if (parentId === item.id) {
          return { ...item, text: editText };
        } else {
          return {
            ...item,
            replies: editReply(item.replies, parentId, editText),
          };
        }
      });
    };

    setComment(editReply(comments, parentId, editText));
  };

  const onDelete = (parentId) => {
    const deleteReply = (comments, parentId) => {
      return comments
        .filter((item) => parentId != item.id)
        .map((item) => ({
          ...item,
          replies: deleteReply(item.replies, parentId),
        }));
    };

    setComment(deleteReply(comments, parentId));
  };

  return (
    <CommentStyled>
      <div className="App">
        <h3 className="comment-header">Facebook Comment</h3>
        <div className="comment-submit-wrapper">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add a comment"
            className="comment-area"
          />
          <button onClick={() => handleSubmit()} className="submit">
            Submit
          </button>
        </div>
        <CommentList
          comments={comments}
          onReply={onReply}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      </div>
    </CommentStyled>
  );
}
