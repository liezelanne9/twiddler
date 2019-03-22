import React, { Component } from 'react';
import axios from 'axios';

class ListEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false

        }
        this.handleDeleteButton = this.handleDeleteButton.bind(this);
        // PROPS: post.
        // username,
        // thought,
        // liked,
        // createdAt,
        // updatedAt,
    }

    handleDeleteButton(e) {
        e.preventDefault();
        axios
        .delete(`/api/${this.props.post.id}`)
        .then(this.props.fetchPostedThoughts)
    }

    render() {
        return (
            <div>
                <fieldset>
                    <legend className="username">{this.props.post.username}</legend>
                    <p className="postedThought">{this.props.post.thought.trim()}</p><br />
                    <p className="postDate">posted {this.props.post.createdAt}</p>
                <button>Edit</button>
                <button onClick={this.handleDeleteButton}>Delete</button>
                </fieldset>
            </div>
        )
    }

}

export default ListEntry;