import styled from "@emotion/styled";

export const CommentListStyled = styled.div`
  .comment-area {
    width: 200px;
    padding: 16px 16px;
  }
  textarea {
    width: calc(100% - 32px);
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 8px;
    font-size: 14px;
    margin-top: 16px;
  }
  .comment-submit-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-content: flex-start;
    justify-content: flex-start;
  }
  .comment-text {
    width: calc(100% - 32px);
    background: #cec8d34f;
    border-radius: 16px;
    font-size: 16px;
    text-align: left;
    padding: 16px;
  }
  .comment-reply-edit-delete {
    padding-top: 16px;
    margin-left: 20px;
    border: 1px solid #ddd;
    margin-bottom: 10px;
    background-color: #f9f9f9;
  }
  .reply-edit-delete-wrapper {
    display: flex;
    align-content: flex-start;
    justify-content: space-around;
    align-items: center;
    padding-top: 16px;
  }
  .btn {
    border: none;
    background: none;
  }
  .save-btn {
    background-color: #4267b2;
    color: white;
    border: none;
    padding: 6px 12px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
    margin-right: 8px;
    transition: background-color 0.2s;
  }

  .save-btn:hover {
    background-color: #365899;
  }

  .cancel-btn {
    background-color: #e4e6eb;
    color: #333;
    border: none;
    padding: 6px 12px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
    transition: background-color 0.2s;
  }

  .cancel-btn:hover {
    background-color: #d3d6db;
  }
`;
