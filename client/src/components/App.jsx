import React, { Component } from 'react';
import axios from 'axios';
import List from './List.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usernameExists: false,
            username: '',
            newThought: '',
            characterCount: 240,
            postedThoughts: []
        }
        this.handleUsername = this.handleUsername.bind(this);
        this.toggleUsernameExists = this.toggleUsernameExists.bind(this);
        this.handleNewThought = this.handleNewThought.bind(this);
    }

    //component

    //fetchPostedThoughts

    handleUsername(e) {
        this.setState({
            username: e.target.value
        }, () => console.log(this.state.username))
    }

    toggleUsernameExists(e) {
        e.preventDefault()
        this.setState({
            usernameExists: true
        })
    }

    handleNewThought(e) {
        this.setState({
            newThought: e.target.value,
            characterCount: this.state.characterCount - 1,
        }, () => console.log(this.state.newThought, this.state.characterCount))
    }

    //handleSubmitButton

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
                        <textarea rows="4" cols="50" maxLength="240" name="textarea" onChange={this.handleNewThought} /><br />
                        <button className="btn" name="post">Twiddle</button> characters remaining: {this.state.characterCount}
                        </fieldset>
                    </form>
                </div>
                }


            </div>
        )
    }
}

export default App;