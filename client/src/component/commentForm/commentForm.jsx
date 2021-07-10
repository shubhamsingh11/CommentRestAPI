import React from 'react';

import './commentForm.css';

class CommentForm extends React.Component {
    constructor() {
        super();
        this.state = { comment : '', name : '', emailId : '' };
    }

    onChangeHandler = e => {
        this.setState( { [e.target.name ] : e.target.value })
    }

    onSubmitHandler = e => {
        fetch('http://localhost:9000/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                comment: this.state.comment
            })
        })
                .then(res => {
                    if (res.ok) {
                        console.log(res);
                    }
                    else {
                        console.log("Failed");
                    }
                })
        .catch(err => console.log(err))
        }

    render() {
        const { comment, name, emailId } = this.state;
        return (
            <div>
                <h2>Leave a Reply</h2>
                <form className="form" onSubmit={this.onSubmitHandler}>
                    <label htmlFor="comment"> Comment </label>
                    <textarea name="comment" className="border-removed" id="comment" value={comment} onChange={this.onChangeHandler}></textarea>
                    <br></br><br></br>
                    <label htmlFor="name">Name</label>
                    <input name="name" id="name" value={name} onChange={this.onChangeHandler}></input>
                    <br></br><br></br>
                    <label htmlFor="emailId">Email</label>
                    <input name="emailId" id="emailId" value={emailId} onChange={this.onChangeHandler}></input>
                    <br></br><br></br>
                    <button type="submit">POST</button>
                </form>
            </div>
        )
    }
}

export default CommentForm;