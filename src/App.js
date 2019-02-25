import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import Message from './Message';

class App extends Component {
  render() {
    return (
      <div className="ui container comments">
        <Message
          header="Changes in Service"
          text="We just updated our privacy policy here to better service our customers"
        />
        <ApprovalCard>
          <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
          </div>
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            author="adam"
            timeAgo="today @ 1pm"
            content="Yeah!"
            avatar={faker.image.avatar()} />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            author="nicole"
            timeAgo="today @ 3pm"
            content="What?"
            avatar={faker.image.avatar()} />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            author="lindsay"
            timeAgo="yesterday @ 1am"
            content="Hey"
            avatar={faker.image.avatar()} />
        </ApprovalCard>
      </div>
    );
  }
}

export default App;
