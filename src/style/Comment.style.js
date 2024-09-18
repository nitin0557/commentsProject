import styled from "@emotion/styled";

export const CommentStyled = styled.div`
  background: #b5b5b552;
  text-align: center;
  min-height: 100vh;
  max-width: 100%;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  align-items: flex-start;

  .comment-header {
    text-align: left;
    margin: 16px 0 32px;C
  }

  .App {
    padding: 20px;
    width: 100%;
    max-width: 600px; /* limits the width on larger screens */
    height: 100%;
    background: #ffffff;
    margin: 0 auto;
    box-shadow: 0 22px 20px 0 rgba(0, 0, 0, 0.4);
    border-radius: 16px;
  }

  textarea {
    width: calc(100% - 32px);
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 8px;
    font-size: 14px;
    margin-bottom: 16px;
  }

  .comment-submit-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .submit {
    background-color: #1877f2;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    line-height: 32px;
    padding: 0 16px;
    width: 100px;
    color: #fff;
    cursor: pointer;
  }

  .submit:hover {
    background-color: #365899;
  }

  .comment-area {
    width: calc(100% -32px);
    padding: 16px;
  }

  .comment-reply-edit-delete {
    padding-top: 16px;
    margin-top: 16px;
    border: 1px solid #ddd;
    margin-bottom: 10px;
    padding: 16px 24px;
    background-color: #f9f9f9;
  }

  .reply-edit-delete-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 16px;
  }

  .btn {
    background: none;
    border: none;
    color: #3b5998;
    cursor: pointer;
    font-size: 12px;
    padding: 5px 8px;
    border-radius: 4px;
    transition: background-color 0.2s;
  }

  .btn:hover {
    background: #f0f2f5;
  }

  .comment-text {
    width: 100%;
    background: #cec8d34f;
    border-radius: 16px;
    font-size: 16px;
    text-align: left;
    padding: 16px;
  }

  /* Media Queries for responsiveness */
  @media (max-width: 768px) {
    .App {
      width: 90%; /* shrink the width on medium screens */
    }
  }

  @media (max-width: 480px) {
    .App {
      width: 95%; /* further shrink the width on small screens */
    }

    .comment-text {
      font-size: 14px; /* reduce font size for better readability on small screens */
    }

    .btn {
      font-size: 10px; /* smaller button text for smaller screens */
    }

    .submit {
      width: auto;
      padding: 0 12px;
      font-size: 14px;
    }
  }
`;

