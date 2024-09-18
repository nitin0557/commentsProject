import React, { useState } from "react";
import { CommentListStyled } from "../style/CommentList.style";
import { CommentStyled } from "../style/Comment.style";

export default function Comment({ comment, onReply, onEdit, onDelete }) {
  const [isReply, setIsReply] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editText, setEditText] = useState(comment.text);

  const handleReplySubmit = () => {
    if (replyText.trim()) {
      onReply(comment.id, replyText);
      setIsReply(false);
      setReplyText("");
    }
  };

  const handleSave = () => {
    if (editText.trim()) {
      onEdit(comment.id, editText);
      setIsEdit(false);
      setEditText("");
    }
  };

  return (
    <>
      <CommentListStyled>
        {isReply && (
          <div className="comment-submit-wrapper">
            <textarea
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="Add a comment"
              className="text-area"
            />
            <button onClick={handleReplySubmit} className="submit">
              Reply
            </button>
          </div>
        )}

        {isEdit ? (
          <div>
            <textarea
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
            <button onClick={handleSave} className="save-btn">
              Save
            </button>
            <button onClick={() => setIsEdit(false)} className="cancel-btn">
              Cancel
            </button>
          </div>
        ) : (
          <>
            <div className="comment-reply-edit-delete">
              <div className="comment-text">{comment.text}</div>
              <div className="reply-edit-delete-wrapper">
                <button onClick={() => setIsReply(!isReply)} className="btn">
                  Reply
                </button>
                <button onClick={() => setIsEdit(true)} className="btn">
                  Edit
                </button>
                <button onClick={() => onDelete(comment.id)} className="btn">
                  Delete
                </button>
              </div>
              {comment.replies && comment.replies.length > 0 && (
                <div>
                  {comment.replies.map((reply) => (
                    <Comment
                      key={reply.id}
                      comment={reply}
                      onReply={onReply}
                      onEdit={onEdit}
                      onDelete={onDelete}
                    />
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </CommentListStyled>
    </>
  );
}
