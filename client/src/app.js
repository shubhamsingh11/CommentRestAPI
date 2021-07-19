import React , { Suspense } from 'react';
import CommentForm from './component/commentForm/commentForm.jsx';
import './app.css';

const Comments = React.lazy(() => import('./component/comments/comments.jsx'));

class App extends React.Component { 
    render() {
        return (
            <div>
                <CommentForm />
                <Suspense fallback={<div>Loading...</div>}>
                    <Comments />
                </Suspense>    
            </div>
        )
    }
}

export default App;