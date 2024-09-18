import React from "react";
import Comment from "./Comment";

export default function CommentList({ comments, onReply, onEdit, onDelete }) {
  return (
    <div>
      {comments.map((comment) => (
        <Comment
          comment={comment}
          key={comment.id}
          onReply={onReply}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
