import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import Message from './Message';
import TestComponent from './TestComponent';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <div className="ui container comments">
      <TestComponent />
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
