import React, { useEffect , useState } from 'react';

const Comments = () => {

    function callAPI() {
        fetch('http://localhost:9000/comments')
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                throw res;
            })
            .then(comment => setComments(comment))
            .catch(err => console.log(err))
    }
    const [comments, setComments] = useState({});
    
    
    useEffect (() => {
        callAPI();
    }, [])
    
    const comment = [];

    for (let i = 0; i < comments.length; i++) {
        comment.push([comments[i].name , comments[i].comment])
    }
    const ren = comment.map((com) => {
        return (
                <div>
                <div>{com[0]}</div>
                <div>{com[1]}</div>
                </div>
    )}
        )
    console.log(comment );
    return (
        <div>
            {ren}
        </div>
    )
}

export default Comments;

