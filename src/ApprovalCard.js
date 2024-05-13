import React from "react";

const ApprovalCard = (props) => {
  return (
    <div class="ui cards">
      <div class="card">
        <div class="content">
          <img
            class="right floated mini ui image"
            src="/images/avatar/large/elliot.jpg"
          />
          <div class="header">Elliot Fu</div>
          <div class="meta">Friends of Veronika</div>
          <div class="description">{props.children}</div>
        </div>
        <div class="extra content">
          <div class="ui two buttons">
            <div class="ui basic green button">Approve</div>
            <div class="ui basic red button">Decline</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ApprovalCard;
