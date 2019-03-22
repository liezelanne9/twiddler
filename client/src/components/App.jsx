import React, { Component } from 'react';
import axios from 'axios';
import List from './List.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usernameExists: false,
            username: '',
            thought: '',
            characterCount: 240,
            postedThoughts: []
        }
        this.fetchPostedThoughts = this.fetchPostedThoughts.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.toggleUsernameExists = this.toggleUsernameExists.bind(this);
        this.handleNewThought = this.handleNewThought.bind(this);
        this.handleSubmitButton = this.handleSubmitButton.bind(this);
    }

    componentDidMount() {
        this.fetchPostedThoughts();
    }

    fetchPostedThoughts() {
        axios
        .get('/api')
        .then(results => this.setState({
            postedThoughts: results.data.reverse()
        }))
    }

    handleUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    toggleUsernameExists(e) {
        e.preventDefault()
        this.setState({
            usernameExists: true
        })
    }

    handleNewThought(e) {
        this.setState({
            thought: e.target.value,
            characterCount: this.state.characterCount - 1,
        }, () => console.log(this.state.thought, this.state.characterCount))
    }

    handleSubmitButton(e) {
        e.preventDefault();
        if (this.state.thought.length === 0) {
            alert('Please enter a thought');
            return;
        }
        axios
        .post('/api', this.state)
        .then(() => {
            document.getElementById("textarea").value = '';
            this.fetchPostedThoughts();
            this.setState({ thought: '' })
        })
    }

    render() {
        return (
            <div>
                
                {!this.state.usernameExists &&
                <div id="need_username">
                    Welcome!
                    <form>
                        <fieldset>
                            <legend>Provide a username to start sharing some thoughts:</legend>
                            username: <input name="username" type="text" onChange={this.handleUsername} /><br />
                            <button className="btn" name="start" onClick={this.toggleUsernameExists}>Submit</button>
                        </fieldset>
                    </form>
                    <div>
                    </div>
                </div>
                }

                {this.state.usernameExists &&
                <div id="username_exists">
                    Let's Twiddle!
                    <form>
                        <fieldset>
                        <textarea rows="4" cols="50" maxLength="240" id="textarea" placeholder={`${this.state.username} is thinking about...`} onChange={this.handleNewThought} /><br />
                        <button className="btn" name="post" onClick={this.handleSubmitButton}>Twiddle</button><p>characters remaining: {this.state.characterCount}</p>
                        </fieldset>
                    </form>
                </div>
                }

                <div>
                    <br />
                    <List postedThoughts={this.state.postedThoughts} fetchPostedThoughts={this.fetchPostedThoughts} />
                </div>


            </div>
        )
    }
}

export default App;