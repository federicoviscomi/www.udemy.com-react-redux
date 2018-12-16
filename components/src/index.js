import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail.js'
import ApprovalCard from './ApprovalCard.js'

const App = () => {
    return (
        <div>
            <div className="ui container comments">
                <ApprovalCard>
                    <CommentDetail
                        author="Sam"
                        timeAgo="Today at 4:45PM"
                        content="Nice blog post"
                        avatar={faker.image.avatar()}
                    >
                    </CommentDetail>
                </ApprovalCard>
                <ApprovalCard>
                    Warning!
                    <h3>this is an asdf</h3>
                </ApprovalCard>
            </div>
        </div>
    );
};

ReactDOM.render(<App></App>, document.querySelector('#root'));