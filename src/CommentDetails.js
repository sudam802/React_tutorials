import React from "react";

const CommentDetails = (props) => {
  return (
    <div class="ui comments">
      <div class="comment">
        <a class="avatar">
          <img src="/images/avatar/small/elliot.jpg" />
        </a>
        <div class="content">
          <a class="author">{props.name}</a>
        </div>
      </div>
    </div>
  );
};
export default CommentDetails;
