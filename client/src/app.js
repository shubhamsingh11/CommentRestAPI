import React from 'react';
import CommentForm from './component/commentForm/commentForm.jsx';
import Comments from './component/comments/comments.jsx';
import './app.css';

class App extends React.Component { 
    render() {
        return (
            <div>
                <CommentForm />
                <Comments />
            </div>
        )
    }
}

export default App;