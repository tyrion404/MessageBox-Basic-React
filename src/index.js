import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import Navbar from './components/Navbar';
import CommentDetails from './components/CommentDetails';
import ApprovalCard from './components/ApprovalCard';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Navbar />
        <div className="ui container comments">
          <ApprovalCard>
            <CommentDetails
              author="Sam"
              timeAgo="Today at 6:00PM"
              imgSrc={faker.image.avatar()}
              content="Nice blog post!"
            />
          </ApprovalCard>
          
          <ApprovalCard>
            <CommentDetails
              author="Alex"
              timeAgo="Today at 10:00AM"
              imgSrc={faker.image.avatar()}
              content="I like the subject."
            />
          </ApprovalCard>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);