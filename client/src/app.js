import React from 'react';
import axios from 'axios';
import './app.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = { comments : '' , comment : '', name : '', emailId : '' };
    }
    callAPI() {
        fetch('http://localhost:9000/comments')
            .then(res => res.text())
            .then(res => this.setState({ comments: res }))
            .catch(err => console.log(err))
    }


    onChangeHandler = e => {
        this.setState( { [e.target.name ] : e.target.value })
    }

    onSubmitHandler = e => {
        // axios.post('http://localhost:9000/comments', this.state)
        //     .then(res => console.log(res))
        //     .catch(err => console.log(err))
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


    async componentDidMount() {
        this.callAPI();
    }

    render() {
        const { comment, name, emailId } = this.state;
        return (
            <div>
                <h2>Leave a Reply</h2>
                <form onSubmit={this.onSubmitHandler}>
                    <label htmlFor="comment"> Comment </label>
                    <textarea name="comment" id="comment" value={comment} onChange={this.onChangeHandler}></textarea>
                    <br></br><br></br>
                    <label htmlFor="name">Name</label>
                    <input name="name" id="name" value={name} onChange={this.onChangeHandler}></input>
                    <br></br><br></br>
                    <label htmlFor="emailId">Email</label>
                    <input name="emailId" id="emailId" value={emailId} onChange={this.onChangeHandler}></input>
                    <br></br><br></br>
                    <button type="submit">POST</button>
                </form>
                <p>
                    {this.state.comments}
                </p>
            </div>
        )
    }
}

export default App;