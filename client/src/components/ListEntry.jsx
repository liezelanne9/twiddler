import React, { Component } from 'react';

class ListEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false

        }
        // PROPS: post.
        // username,
        // thought,
        // liked,
        // createdAt,
        // updatedAt,
    }

    // 

    render() {
        return (
            <div>
                <fieldset>
                    <legend className="username">{this.props.post.username}</legend>
                    <p className="postedThought">{this.props.post.thought.trim()}</p><br />
                    <p className="postDate">posted {this.props.post.createdAt}</p>
                </fieldset>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        )
    }

}

export default ListEntry;